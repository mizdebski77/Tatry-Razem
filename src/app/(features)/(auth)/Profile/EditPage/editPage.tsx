'use client'
import React, { useEffect, useState, useTransition } from 'react';
import {
    EditSection,
    EditWrapper,
    EditTitle,
    Form,
    FormHeader,
    TextArea,
    SocialWrapper,
    SocialInput,
    AlertWrapper,
    AlertTitle,
    AlertSpan,
    ButtonWrapper,

} from './styledEditPage';
import { motion } from 'framer-motion';
import { Button, Input } from '@/app/common/UI/UI';
import { updateUser } from '../../authActions';
import { toast } from 'react-hot-toast';
import { User } from '@supabase/supabase-js';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { EditInputs, SocialInputs } from '@/app/common/arrays';

interface EditPageProps {
    user: User | undefined;
    setEditPage: React.Dispatch<React.SetStateAction<boolean>>;
};

interface formFields {
    name: string;
    surname: string;
    email: string;
    location: string;
    bio: string;
    facebook_url: string;
    instagram_url: string;
    youtube_url: string;
}

export const EditPage: React.FC<EditPageProps> = ({ user, setEditPage }) => {


    const [isPending, startTransition] = useTransition();
    const [formData, setFormData] = useState<formFields>({
        name: '',
        surname: '',
        email: '',
        location: '',
        bio: '',
        facebook_url: '',
        instagram_url: '',
        youtube_url: '',
    });

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.user_metadata?.name || '',
                surname: user.user_metadata?.surname || '',
                email: user.email || '',
                location: user.user_metadata?.location || '',
                bio: user.user_metadata?.bio || '',
                facebook_url: user.user_metadata?.facebook_url || '',
                instagram_url: user.user_metadata?.instagram_url || '',
                youtube_url: user.user_metadata?.youtube_url || ''
            });
        }
    }, [user]);


    const handleUpdate = (formData: FormData) => {
        startTransition(async () => {
            const { errorMessage } = await updateUser(formData);
            if (errorMessage) {
                toast.error(errorMessage);
            } else {
                window.location.reload();
            }
        })
    };

    const showConfirmationDialog = (
        title: string,
        message: string,
        onConfirm: () => void
    ) => {
        confirmAlert({
            customUI: ({ onClose }) => (
                <AlertWrapper>
                    <AlertTitle>{title}</AlertTitle>
                    <AlertSpan>{message}</AlertSpan>
                    <Button type="button" text="Nie" $background="white" onClick={onClose} disabled={false} />
                    <Button type="button" text="Tak" $background="red" onClick={() => { onConfirm(); onClose(); }} disabled={false} />
                </AlertWrapper>
            )
        });
    };

    const closeWindowPositive = () => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <AlertWrapper >
                        <AlertTitle>Na pewno chcesz zapisać dane?</AlertTitle>
                        <AlertSpan>Twoje dane zostaną zakutalizowane?</AlertSpan>
                        <Button type='button' text='Nie zapisuj' $background='white' onClick={onClose} disabled={false} />
                        <Button
                            text='Zapisz'
                            $background='red'
                            type='button'
                            disabled={false}
                            onClick={() => {
                                const formDataToSend = new FormData();
                                formDataToSend.append('name', formData.name);
                                formDataToSend.append('surname', formData.surname);
                                formDataToSend.append('email', formData.email);
                                formDataToSend.append('location', formData.location);
                                formDataToSend.append('bio', formData.bio);
                                formDataToSend.append('facebook_url', formData.facebook_url);
                                formDataToSend.append('youtube_url', formData.youtube_url);
                                formDataToSend.append('instagram_url', formData.instagram_url);
                                handleUpdate(formDataToSend);
                                setEditPage(false);
                                onClose();
                            }}
                        />
                    </AlertWrapper >
                );
            }
        });
    };

    const closeWindowNegative = () => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <AlertWrapper >
                        <AlertTitle>Na pewno chcesz zamknąć?</AlertTitle>
                        <AlertSpan>Twoje dane nie zostaną zapisane?</AlertSpan>
                        <Button type='button' text='Nie zamykaj' $background='white' onClick={onClose} disabled={false} />
                        <Button
                            text='Tak zamknij'
                            $background='red'
                            type='button'
                            disabled={false}
                            onClick={() => {
                                setEditPage(false)
                                onClose();
                            }}
                        />

                    </AlertWrapper >
                );
            }
        });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };




    return (
        <EditSection
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <EditWrapper>
                <EditTitle>Edytuj swój profil</EditTitle>
                <Form>
                    <FormHeader>Dane podstawowe</FormHeader>

                    {EditInputs.map((field) => (
                        field.component === 'input' ? (
                            <Input
                                key={field.id}
                                placeHolder={field.placeholder}
                                name={field.name}
                                required={false}
                                text=''
                                isError={0}
                                type='text'
                                value={formData[field.name as keyof formFields]}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <React.Fragment key={field.id}> {/* Wrap in Fragment with key */}
                                <FormHeader>Opisz siebie żeby można było cię lepiej poznać</FormHeader>
                                <TextArea
                                    placeholder={field.placeholder}
                                    name={field.name}
                                    value={formData[field.name as keyof formFields]}
                                    onChange={handleInputChange}
                                />
                            </React.Fragment>
                        )
                    ))}

                    <FormHeader>Social media:</FormHeader>
                    {SocialInputs.map((social) => (
                        <SocialWrapper key={social.id}>
                            <social.icon style={{ fontSize: '28px' }} />
                            <SocialInput
                                placeholder={social.placeholder}
                                name={social.name}
                                type={social.type}
                                value={formData[social.name as keyof formFields]}
                                onChange={handleInputChange}
                            />
                        </SocialWrapper>
                    ))}

                    <ButtonWrapper>
                        <Button
                            $background='blue'
                            onClick={() => closeWindowPositive()}
                            text='Zapisz'
                            type='button'
                            disabled={false}
                        />

                        <Button
                            $background='red'
                            onClick={() => closeWindowNegative()}
                            text='Anuluj'
                            type='button'
                            disabled={false}
                        />
                    </ButtonWrapper>

                </Form>

            </EditWrapper>
        </EditSection>
    );
};
