"use client";
import React, { useState } from "react";
import {
    CalendarSpan,
    FlagContainer,
    FlagIcon,
    FlagWrapper,
    SectionTitle,
    SectionWrapper,
    StyledCalendar,
    Wrapper,
} from "./styledBasicsInfo";
import Slovakia from "../../../common/Images/AddPage/slv.svg";
import Poland from "../../../common/Images/AddPage/pl.svg";
import { Button, Input } from "@/app/common/UI/UI";
// @ts-ignore
import { TimePicker } from "react-ios-time-picker";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function BasicsInfo() {
    const [jd, setJd] = useState("");
    const [value, onChange] = useState<Value>(null);
    const [time, setTitme] = useState("");

    return (
        <Wrapper>
            <SectionWrapper>
                <SectionTitle>Którą część Tatr chcesz wybrać?</SectionTitle>
                <FlagWrapper>
                    <FlagContainer marked={1}>
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
                <StyledCalendar onChange={onChange} value={value} />
                {value && (
                    <CalendarSpan>
                        Wybrano:{" "}
                        {value instanceof Date
                            ? value.toLocaleDateString()
                            : ""}
                    </CalendarSpan>
                )}
            </SectionWrapper>


            <SectionWrapper>
                <SectionTitle>Godzina startu z parkingu.</SectionTitle>
                <Input
                    placeHolder="No: Giewont"
                    type="time"
                    text=""
                    name="destiny"
                    required={true}
                    onChange={(e) => setJd(e.target.value)}
                    isError={0}
                    value=""
                />
            </SectionWrapper>
            <Button
                $background="blue"
                disabled={false}
                onClick={() => alert}
                text="Przejdź dalej ➜"
                type="button"
            />
        </Wrapper>
    );
}
