"use client";
import React, { useState } from "react";
import {
    FlagContainer,
    FlagIcon,
    FlagWrapper,
    SectionTitle,
    SectionWrapper,
    Wrapper,
} from "./styledBasicsInfo";
import Slovakia from "../../../common/Images/AddPage/slv.svg";
import Poland from "../../../common/Images/AddPage/pl.svg";
import { Input } from "@/app/common/UI/UI";
import Calendar from "react-calendar";

import styled from "styled-components";
import { theme } from "@/app/core/StyledComponents/theme";

export default function BasicsInfo() {
    const [jd, setJd] = useState("");

    const StyledCalendar = styled(Calendar)`
        border: none;
        background: #fafafa;
        max-width: 400px;
        padding: 12px;
        border-radius: 20px;

        .react-calendar__navigation__label {
            background: none;
            border: none;
            font-size: 20px;
            opacity: 0.9;
        }

        .react-calendar__navigation__next-button,
        .react-calendar__navigation__prev-button {
            border: none;
            font-size: 32px;
            color: ${theme.palette.blue};
            cursor: pointer;
            background: none;
        }

        .react-calendar__navigation__next2-button,
        .react-calendar__navigation__prev2-button {
            display: none;
        }

        .react-calendar__navigation {
            margin: 0 auto 20px;
            border: none;
            display: flex;
            justify-content: center;
            border-bottom: 1px solid #f2f2f2;
            padding-bottom: 20px;
        }
        .basicsInfo__StyledCalendar {
            background: red;
        }

        .react-calendar__month-view__days {
            margin-top: 20px;
        }

        .react-calendar__month-view__days__day--neighboringMonth {
            opacity: 0.3;
        }

        .react-calendar__tile {
            background: none;
            border: none;
            padding: 12px;
            font-size: 20px;
            border-radius: 5px;
            border: 1px solid white;

            &:hover {
                background-color: #e0e0e0;
                cursor: pointer;
            }
        }

        .react-calendar__tile--active {
            border: 1px solid ${theme.palette.blue};
            color: ${theme.palette.blue};
            background-color: none;
        }
    `;
    return (
        <Wrapper>
            <SectionWrapper>
                <SectionTitle>Którą część Tatr chcesz wybrać?</SectionTitle>
                <FlagWrapper>
                    <FlagContainer>
                        <FlagIcon>
                            <img src={Poland.src} alt="Poland Flag" />
                        </FlagIcon>
                        Tatry Polskie
                    </FlagContainer>
                    <FlagContainer>
                        <FlagIcon>
                            <img src={Slovakia.src} alt="Slovakia Flag" />
                        </FlagIcon>
                        Tatry Słowackie
                    </FlagContainer>
                </FlagWrapper>
            </SectionWrapper>

            <SectionWrapper>
                <SectionTitle>
                    Nazwa szczytu / szlaku na który chcesz iść
                </SectionTitle>
                <Input
                    placeHolder="No: Giewont"
                    type="text"
                    text=""
                    name="destiny"
                    required={true}
                    onChange={(e) => setJd(e.target.value)}
                    isError={0}
                    value=""
                />
            </SectionWrapper>

            <SectionWrapper>
                <SectionTitle>Data która cię interesuje.</SectionTitle>
                <StyledCalendar />
            </SectionWrapper>
        </Wrapper>
    );
}
