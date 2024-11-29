'use client';
import { createClient } from '@/app/core/supabase/client';
import { Container, DataWrapper, Tile, TileLInksWrapper, TileSpanWrapper, TileTitle, TilesWrapper, Title, UserImage, Wrapper, TileSpan, TileSpanLegend } from './styledProfile';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Loader } from '@/app/common/Loader/loader';
import { FetchError } from '@/app/common/Error/error';
import { UserRound } from 'lucide-react';
import { Button, ButtonLink, } from '@/app/common/UI/UI';
import { SocialIcon } from 'react-social-icons';
import { IoIosHome } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { MdDescription } from "react-icons/md";
import { EditPage } from './EditPage/editPage';


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
    };



    return (
        <>
            {isLoading ? <Loader /> : isError ? <FetchError /> : (
                <Wrapper>
                    <Title>
                        Profil użytkownika.
                    </Title>
                    <Container>
                        <Tile>
                            <UserImage>
                                <UserRound style={{ color: 'white', width: '180px', height: '180px' }} />
                            </UserImage>
                            <TileTitle>{user?.user_metadata.name} {user?.user_metadata.surname}</TileTitle>
                            <TileSpanWrapper>
                                <TileSpanLegend><MdDescription />Opis:</TileSpanLegend>
                                <TileSpan style={{ fontSize: '16px' }}>
                                    Frontend Developer with 1+ years of experience in building modern, responsive web
                                    applications. Proficient in React, TypeScript, Angular, HTML & CSS, Redux, and
                                    GitHub. Experienced in e-commerce stores, training applications, CRM systems, and
                                    landing pages. Skilled in API integration, delivering functional applications. Familiar
                                    with Agile methodologies (Scrum) and tools like JIRA and Trello.
                                </TileSpan>
                                {user?.user_metadata.bio}

                            </TileSpanWrapper>


                            <TileSpanWrapper>
                                <TileSpanLegend><MdEmail />E-mail:</TileSpanLegend>
                                <TileSpan>
                                    {user?.email}
                                </TileSpan>
                            </TileSpanWrapper>


                            <TileSpanWrapper>
                                <TileSpanLegend><IoIosHome />Miejscowość:</TileSpanLegend>
                                <TileSpan>
                                    {user?.user_metadata.location}
                                </TileSpan>
                            </TileSpanWrapper>


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
                                <DataWrapper><TileSpanWrapper>Rysy</TileSpanWrapper><ButtonLink $background='blue' href='/Profile' text='Sprawdź' /> </DataWrapper>
                            </Tile>

                            <Tile>
                                <TileTitle>Obserwujesz:</TileTitle>
                                <DataWrapper><TileSpanWrapper>Rysy  </TileSpanWrapper><ButtonLink $background='blue' href='/Profile' text='Sprawdź' /> </DataWrapper>
                            </Tile>

                        </TilesWrapper>
                    </Container>

                    {editPgae && (
                        <EditPage user={user} setEditPage={setEditPage} />
                    )}
                </Wrapper >
            )
            }
        </>
    );
}
