"use client";
import { createClient } from "@/app/core/supabase/client";
import {
    Container,
    DataWrapper,
    Tile,
    TileLInksWrapper,
    TileSpanWrapper,
    TileTitle,
    TilesWrapper,
    UserImage,
    Wrapper,
    TileSpan,
    TileSpanLegend,
    SocialLinks,
    Header,
} from "./styledProfile";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Loader } from "@/app/common/Loader/loader";
import { FetchError } from "@/app/common/Error/error";
import { UserRound } from "lucide-react";
import { Button, ButtonLink, Title } from "@/app/common/UI/UI";
import { IoIosHome } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { MdDescription } from "react-icons/md";
import { EditPage } from "./EditPage/editPage";
import { CgProfile } from "react-icons/cg";

export default function Profile() {
    const [editPage, setEditPage] = useState(false);

    const {
        data: user,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            const supabase = createClient();
            const { data, error } = await supabase.auth.getUser();
            if (error || !data?.user) {
                throw new Error("User not found");
            }
            return data.user;
        },
    });

    const handleEditPage = () => {
        setEditPage(!editPage);
    };

    const userFields = [
        {
            icon: <CgProfile />,
            label: "Imię i nazwisko",
            value: `${user?.user_metadata.surname} ${user?.user_metadata.name}`,
        },
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
        { url: user?.user_metadata.instagram_url },
    ];

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : isError ? (
                <FetchError />
            ) : (
                <Wrapper>
                    <Header>
                        <Title text="Profil użytkownika" color="white" />
                    </Header>
                    <Container>
                        <Tile>
                            <TileTitle>Dane użytkownika</TileTitle>
                            <UserImage src={user?.user_metadata.avatar_url} />
                            <TileLInksWrapper>
                                {socialLinks.map((link, index) => (
                                    <SocialLinks
                                        key={index}
                                        url={link.url}
                                        target="_blank"
                                    />
                                ))}
                            </TileLInksWrapper>
                            {userFields.map((field, index) => (
                                <TileSpanWrapper key={index}>
                                    <TileSpanLegend>
                                        {field.icon}
                                        {field.label}:
                                    </TileSpanLegend>
                                    <TileSpan>{field.value}</TileSpan>
                                </TileSpanWrapper>
                            ))}

                            <Button
                                $background="blue"
                                onClick={() => handleEditPage()}
                                text="Edytuj dane"
                                disabled={false}
                                type="button"
                            />
                        </Tile>

                        <TilesWrapper>
                            <Tile>
                                <TileTitle>Twoje propozycje</TileTitle>
                                <DataWrapper>
                                    <TileSpanWrapper>Rysy</TileSpanWrapper>
                                    <ButtonLink
                                        $background="blue"
                                        href="/Profile"
                                        text="Sprawdź"
                                    />{" "}
                                </DataWrapper>
                            </Tile>
                            <Tile>
                                <TileTitle>Obserwujesz</TileTitle>
                                <DataWrapper>
                                    <TileSpanWrapper>Rysy </TileSpanWrapper>
                                    <ButtonLink
                                        $background="blue"
                                        href="/Profile"
                                        text="Sprawdź"
                                    />{" "}
                                </DataWrapper>
                            </Tile>
                        </TilesWrapper>
                    </Container>

                    {editPage && (
                        <EditPage user={user} setEditPage={setEditPage} />
                    )}
                </Wrapper>
            )}
        </>
    );
}
