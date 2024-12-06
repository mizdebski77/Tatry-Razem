"use client";
import React from "react";
import {
    Container,
    Header,
    Line,
    LinksWrapper,
    PathLink,
    Wrapper,
} from "./styledAddPage";
import { Title } from "@/app/common/UI/UI";
import { Minus, MoveRight } from "lucide-react";

export default function AddPage() {
    const Links = [
        { id: 1, text: "Podstawowe informacje" },
        { id: 2, text: "Szczegóły trasy" },
        { id: 3, text: "Kontakt do organizatora" },
        { id: 4, text: "Podsumowanie" },
    ];

    return (
        <Wrapper>
            <Header>
                <Title color="white" text="Dodaj trasę" />
            </Header>

            <Container>
                <LinksWrapper>
                    {Links.map((link) => (
                        <React.Fragment key={link.id}>
                            <PathLink light={link.id > 1 ? 1 : 0}>
                                {link.text}
                            </PathLink>
                            {link.id < Links.length && (
                                <Line light={link.id > 1 ? 1 : 0} />
                            )}
                        </React.Fragment>
                    ))}
                </LinksWrapper>
            </Container>
        </Wrapper>
    );
}
