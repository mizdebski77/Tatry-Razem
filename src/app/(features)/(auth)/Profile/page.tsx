'use client';
import { createClient } from '@/app/core/supabase/client';
import { Container, DataWrapper, EditSection, EditTitle, Form, EditWrapper, Tile, TileData, TileLInksWrapper, TileSpan, TileTitle, TilesWrapper, Title, UserImage, Wrapper, ButtonWrapper, AlertWrapper, AlertTitle, AlertSpan, TextArea } from './styledProfile';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Loader } from '@/app/common/Loader/loader';
import { FetchError } from '@/app/common/Error/error';
import { UserRound } from 'lucide-react';
import { Button, ButtonLink, Input } from '@/app/common/UI/UI';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { confirmAlert } from 'react-confirm-alert'; // Import
import { motion } from 'framer-motion';
import { useTransition } from 'react';
import { updateUser } from '../authActions';
import { toast } from 'react-hot-toast';
import { SocialIcon } from 'react-social-icons';


export default function Profile() {
    const [editPgae, setEditPage] = useState(false);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [isPending, startTransition] = useTransition();
    const [bio, setBio] = useState('');

    const { data: user, isLoading, isError } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const supabase = createClient();
            const { data, error } = await supabase.auth.getUser();
            if (error || !data?.user) {

                throw new Error('User not found');
            }
            return data.user;
        },
    });

    useEffect(() => {
        if (user) {
            setName(user.user_metadata?.name || '');
            setSurname(user.user_metadata?.surname || '');
            setEmail(user.email || '');
            setLocation(user.user_metadata?.location || '');
        }
    }, [user]);

    const handleEditPage = () => {
        setEditPage(!editPgae)
    };

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
        <>
            {isLoading ? <Loader /> : isError ? <FetchError /> : (
                <Wrapper>
                    <Title>
                        Wtiaj {user?.user_metadata?.name}!
                    </Title>
                    <Container>
                        <Tile>
                            <UserImage>
                                <UserRound style={{ color: 'white', width: '180px', height: '180px' }} />
                            </UserImage>
                            <TileTitle>Podstawowe dane:</TileTitle>
                            <TileSpan>Bio: {user?.user_metadata.bio}</TileSpan>
                            <TileSpan>Imię i Nazwisko: <TileData>{user?.user_metadata.name} {user?.user_metadata.surname}</TileData> </TileSpan>
                            <TileSpan>E-Mail: <TileData>{user?.email}</TileData> </TileSpan>
                            <TileSpan>Miejscowość: <TileData>{user?.user_metadata.location}</TileData></TileSpan>
                            <TileLInksWrapper>
                                <SocialIcon url="https://www.facebook.com/?locale=pl_PL" />
                                <SocialIcon url="youtube.com" />
                                <SocialIcon url="https://www.instagram.com/raynavallandingham/" />
                            </TileLInksWrapper>
                            <Button
                                $background='blue'
                                onClick={() => handleEditPage()}
                                text='Edytuj dane'
                                disabled={false}
                                type='button'
                            />
                        </Tile>

                        <TilesWrapper>
                            <Tile>
                                <TileTitle>Twoje propozycje:</TileTitle>
                                <DataWrapper><TileSpan>Rysy <TileData>23.11.2024</TileData> </TileSpan><ButtonLink $background='blue' href='/Profile' text='Sprawdź' /> </DataWrapper>
                            </Tile>

                            <Tile>
                                <TileTitle>Twoje propozycje:</TileTitle>
                                <DataWrapper><TileSpan>Rysy <TileData>23.11.2024</TileData> </TileSpan><ButtonLink $background='blue' href='/Profile' text='Sprawdź' /> </DataWrapper>
                            </Tile>

                        </TilesWrapper>
                    </Container>

                    {editPgae && (
                        <EditSection
                            as={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <EditWrapper>
                                <EditTitle>Edytuj swój profil</EditTitle>
                                <Form>
                                    <TextArea
                                        placeholder='Bio'
                                        onChange={(e) => setBio(e.target.value)}
                                        value={bio}
                                    />

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

                    )}
                </Wrapper >
            )}
        </>
    );
}
