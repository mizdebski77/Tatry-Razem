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
import { FaFacebook } from 'react-icons/fa';
import { BsYoutube } from 'react-icons/bs';
import { RiInstagramFill } from "react-icons/ri";
import { updateUser } from '../../authActions';
import { toast } from 'react-hot-toast';
import { User } from '@supabase/supabase-js';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

interface EditPageProps {
    user: User | undefined;
    setEditPage: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EditPage: React.FC<EditPageProps> = ({ user, setEditPage }) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [isPending, startTransition] = useTransition();
    const [bio, setBio] = useState('');

    useEffect(() => {
        if (user) {
            setName(user.user_metadata?.name || '');
            setSurname(user.user_metadata?.surname || '');
            setEmail(user.email || '');
            setLocation(user.user_metadata?.location || '');
        }
    }, [user]);


    const handleUpdate = (formData: FormData) => {
        startTransition(async () => {
            const { errorMessage } = await updateUser(formData);
            if (errorMessage) {
                toast.error(errorMessage);
            } else {
                toast.success(email === '' || email === user?.email ? 'Dane zakutalizowano pomyślnie. Odśwież stronę' : "Potwierdź zakutalizowany E-Mail.");
            }
        })
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
                                const formData = new FormData();
                                formData.append('name', name);
                                formData.append('surname', surname);
                                formData.append('email', email);
                                formData.append('location', location);
                                formData.append('bio', bio);
                                handleUpdate(formData);
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


                    <Input
                        placeHolder='Imię'
                        required={false}
                        text=''
                        name='name'
                        type='text'
                        isError={0}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <Input
                        placeHolder='Nazwisko'
                        required={false}
                        text=''
                        name='surname'
                        type='text'
                        isError={0}
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                    />

                    <Input
                        placeHolder='E-Mail'
                        required={false}
                        text=''
                        name='email'
                        type='email'
                        isError={0}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Input
                        placeHolder='Miejscowość'
                        required={false}
                        text=''
                        name='location'
                        type='text'
                        isError={0}
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />


                    <FormHeader>Opisz siebie żeby można było cię lepiej poznać</FormHeader>

                    <TextArea
                        placeholder='Opisz siebie'
                        name='bio'
                        onChange={(e) => setBio(e.target.value)}
                        value={bio}
                    />

                    <FormHeader>Social media:</FormHeader>
                    <SocialWrapper>
                        <FaFacebook style={{ fontSize: '28px' }} />
                        <SocialInput placeholder='Facebook link' />
                    </SocialWrapper>

                    <SocialWrapper>
                        <BsYoutube style={{ fontSize: '28px' }} />
                        <SocialInput placeholder='YouTube link' />
                    </SocialWrapper>

                    <SocialWrapper>
                        <RiInstagramFill style={{ fontSize: '28px' }} />
                        <SocialInput placeholder='Instagram link' />
                    </SocialWrapper>

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
