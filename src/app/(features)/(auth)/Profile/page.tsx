'use client';
import { createClient } from '@/app/core/supabase/client';
import { Container, DataWrapper, EditSection, EditTitle, Form, EditWrapper, Tile, TileData, TileLInksWrapper, TileSpan, TileTitle, TilesWrapper, Title, UserImage, Wrapper, ButtonWrapper, AlertWrapper, AlertTitle, AlertSpan } from './styledProfile';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Loader } from '@/app/common/Loader/loader';
import { FetchError } from '@/app/common/Error/error';
import { UserRound } from 'lucide-react';
import { Button, ButtonLink, Input } from '@/app/common/UI/UI';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { confirmAlert } from 'react-confirm-alert'; // Import
import { motion } from 'framer-motion';

export default function Profile() {
    const [editPgae, setEditPage] = useState(false);

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

    const handleEditPage = () => {
        setEditPage(!editPgae)
    }

    if (isLoading) {
        return <Loader />;
    };

    if (isError) {
        return <FetchError />
    };

    console.log(editPgae);


    const closeWindow = () => {
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
                    <TileSpan>Bio: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam ratione est mollitia dignissimos, ad officiis, vitae nam delectus adipisci corporis modi ducimus sunt eligendi cum tempore ab fuga quod facere?</TileSpan>
                    <TileSpan>Imię i Nazwisko: <TileData>{user?.user_metadata.name} {user?.user_metadata.surname}</TileData> </TileSpan>
                    <TileSpan>E-Mail: <TileData>{user?.email}</TileData> </TileSpan>
                    <TileSpan>Miejscowość: <TileData>Kraków</TileData></TileSpan>
                    <TileLInksWrapper>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
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
                        <DataWrapper><TileSpan>Rysy <TileData>23.11.2024</TileData> </TileSpan><ButtonLink $background='blue' href='/Profile' text='Sprawdź' /> </DataWrapper>
                        <DataWrapper><TileSpan>Mięguszowiecka przełęcz pod chłopkiem <TileData>23.11.2024</TileData> </TileSpan><ButtonLink $background='blue' href='/Profile' text='Sprawdź' /> </DataWrapper>
                        <DataWrapper><TileSpan>Rysy <TileData>23.11.2024</TileData> </TileSpan><ButtonLink $background='blue' href='/Profile' text='Sprawdź' /> </DataWrapper>
                    </Tile>

                    <Tile>
                        <TileTitle>Twoje propozycje:</TileTitle>
                        <DataWrapper><TileSpan>Rysy <TileData>23.11.2024</TileData> </TileSpan><ButtonLink $background='blue' href='/Profile' text='Sprawdź' /> </DataWrapper>
                        <DataWrapper><TileSpan>Rysy <TileData>23.11.2024</TileData> </TileSpan><ButtonLink $background='blue' href='/Profile' text='Sprawdź' /> </DataWrapper>
                        <DataWrapper><TileSpan>Rysy <TileData>23.11.2024</TileData> </TileSpan><ButtonLink $background='blue' href='/Profile' text='Sprawdź' /> </DataWrapper>
                        <DataWrapper><TileSpan>Rysy <TileData>23.11.2024</TileData> </TileSpan><ButtonLink $background='blue' href='/Profile' text='Sprawdź' /> </DataWrapper>
                    </Tile>

                </TilesWrapper>
            </Container>

            {editPgae && (
                <EditSection
                    as={motion.div}
                    initial={{ opacity: 0 }}
                    animate={editPgae ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <EditWrapper>
                        <EditTitle>Edytuj swój profil</EditTitle>
                        <Form>
                            <Input
                                placeHolder='Siema'
                                required={false}
                                text='Bio'
                                name='Siema'
                                type='Siema'
                                isError={1}
                                value="Cześć"
                                onChange={() => (console.log('siema'))}
                            />
                            <Input
                                placeHolder='Siema'
                                required={false}
                                text='Imię'
                                name='Siema'
                                type='Siema'
                                isError={1}
                                value="Cześć"
                                onChange={() => (console.log('siema'))}
                            />

                            <Input
                                placeHolder='Siema'
                                required={false}
                                text='Nazwisko'
                                name='Siema'
                                type='Siema'
                                isError={1}
                                value="Cześć"
                                onChange={() => (console.log('siema'))}
                            />

                            <Input
                                placeHolder='E-Mail'
                                required={false}
                                text='E-Mail'
                                name='Siema'
                                type='Siema'
                                isError={1}
                                value="Cześć"
                                onChange={() => (console.log('siema'))}
                            />

                            <Input
                                placeHolder='Siema'
                                required={false}
                                text='Miejscowość'
                                name='Siema'
                                type='Siema'
                                isError={1}
                                value="Cześć"
                                onChange={() => (console.log('siema'))}
                            />

                            <ButtonWrapper>
                                <Button
                                    $background='blue'
                                    onClick={() => handleEditPage()}
                                    text='Zapisz'
                                    type='button'
                                    disabled={false}
                                />

                                <Button
                                    $background='red'
                                    onClick={() => closeWindow()}
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
    );
}
