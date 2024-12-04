'use client';
import { createClient } from '@/app/core/supabase/client';
import {
    Container,
    DataWrapper,
    Tile,
    TileLInksWrapper,
    TileSpanWrapper, TileTitle, TilesWrapper, Title, UserImage, Wrapper, TileSpan, TileSpanLegend, SocialLinks
} from './styledProfile';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Loader } from '@/app/common/Loader/loader';
import { FetchError } from '@/app/common/Error/error';
import { UserRound } from 'lucide-react';
import { Button, ButtonLink, } from '@/app/common/UI/UI';
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

    const userFields = [
        {
            icon: <MdDescription />,
            label: "Opis",
            value: user?.user_metadata.bio,
        },
        {
            icon: <MdEmail />,
            label: "E-mail",
            value: user?.email,
        },
        {
            icon: <IoIosHome />,
            label: "Miejscowość",
            value: user?.user_metadata.location,
        },
    ];

    const socialLinks = [
        { url: user?.user_metadata.facebook_url },
        { url: user?.user_metadata.youtube_url },
        { url: user?.user_metadata.instagram_url }
    ];



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
                            {userFields.map((field, index) => (
                                <TileSpanWrapper key={index}>
                                    <TileSpanLegend>{field.icon}{field.label}:</TileSpanLegend>
                                    <TileSpan style={{ fontSize: '16px' }}>
                                        {field.value}
                                    </TileSpan>
                                </TileSpanWrapper>
                            ))}

                            <TileLInksWrapper>
                                {socialLinks.map((link, index) => (
                                    <SocialLinks key={index} url={link.url} target="_blank" />
                                ))}
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
