'use client';
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
}

interface FormFields {
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
    const [formData, setFormData] = useState<FormFields>({
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
            const { user_metadata } = user;
            setFormData(prevData => ({
                ...prevData,
                ...user_metadata,
                email: user.email || prevData.email,
            }));
        }
    }, [user]);


    const handleUpdate = async (data: FormData) => {
        startTransition(async () => {
            const { errorMessage } = await updateUser(data);
            if (errorMessage) {
                toast.error(errorMessage);
            } else {
                toast.success(formData.email === '' || formData.email === user?.email ? 'Dane zakutalizowano pomyślnie. ' : "Potwierdź zakutalizowany E-Mail.");

                setTimeout(() => {
                    window.location.reload();
                }, 3000)

            }
        });
    };

    const showConfirmationDialog = (title: string, message: string, onConfirm: () => void) => {
        confirmAlert({
            customUI: ({ onClose }) => (
                <AlertWrapper>
                    <AlertTitle>{title}</AlertTitle>
                    <AlertSpan>{message}</AlertSpan>
                    <Button type='button' disabled={false} text="Nie" $background="white" onClick={onClose} />
                    <Button type='button' disabled={false} text="Tak" $background="red" onClick={() => { onConfirm(); onClose(); }} />
                </AlertWrapper>
            ),
        });
    };

    const handleFormSubmit = () => {
        const formDataToSend = new FormData();
        Object.keys(formData).forEach((key) => {
            formDataToSend.append(key, formData[key as keyof FormFields]);
        });
        handleUpdate(formDataToSend);
        setEditPage(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    return (
        <EditSection as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <EditWrapper>
                <EditTitle>Edytuj swój profil</EditTitle>
                <Form>
                    <FormHeader>Dane podstawowe</FormHeader>

                    {EditInputs.map(field => (
                        field.component === 'input' ? (
                            <Input
                                key={field.id}
                                placeHolder={field.placeholder}
                                name={field.name}
                                required={false}
                                text=''
                                isError={0}
                                type='text'
                                value={formData[field.name as keyof FormFields]}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <React.Fragment key={field.id}>
                                <FormHeader>Opisz siebie żeby można było cię lepiej poznać</FormHeader>
                                <TextArea
                                    name={field.name}
                                    value={formData[field.name as keyof FormFields]}
                                    onChange={handleInputChange}
                                />
                            </React.Fragment>
                        )
                    ))}

                    <FormHeader>Social media:</FormHeader>
                    {SocialInputs.map(social => (
                        <SocialWrapper key={social.id}>
                            <social.icon style={{ fontSize: '28px' }} />
                            <SocialInput
                                placeholder={social.placeholder}
                                name={social.name}
                                value={formData[social.name as keyof FormFields]}
                                onChange={handleInputChange}
                            />
                        </SocialWrapper>
                    ))}

                    <ButtonWrapper>
                        <Button
                            $background="blue"
                            type='button'
                            disabled={false}
                            onClick={() => showConfirmationDialog(
                                'Na pewno chcesz zapisać dane?',
                                'Twoje dane zostaną zaktualizowane.',
                                handleFormSubmit
                            )}
                            text="Zapisz"

                        />
                        <Button
                            $background="red"
                            onClick={() => showConfirmationDialog(
                                'Na pewno chcesz zamknąć?',
                                'Twoje dane nie zostaną zapisane.',
                                () => setEditPage(false)
                            )}
                            text="Anuluj"
                            type='button'
                            disabled={false}
                        />
                    </ButtonWrapper>
                </Form>
            </EditWrapper>
        </EditSection>
    );
};
