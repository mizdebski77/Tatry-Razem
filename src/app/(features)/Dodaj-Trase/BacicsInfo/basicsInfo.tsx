import React from "react";
import {
    Flag,
    FlagContainer,
    FlagIcon,
    FlagWrapper,
    SectionTitle,
    SectionWrapper,
    Wrapper,
} from "./styledBasicsInfo";
import Slovakia from "../../../common/Images/AddPage/slv.svg";
import Poland from "../../../common/Images/AddPage/pl.svg";

export default function BasicsInfo() {
    return (
        <Wrapper>
            <SectionWrapper>
                <SectionTitle>Którą część Tatr chcesz wybrać?</SectionTitle>
                <FlagWrapper>
                    <FlagContainer>
                        <FlagIcon>
                            <Flag src={Poland.src} alt="Poland Flag" />
                        </FlagIcon>
                        Tatry Polskie
                    </FlagContainer>
                    <FlagContainer>
                        <FlagIcon>
                            <Flag src={Slovakia.src} alt="Slovakia Flag" />
                        </FlagIcon>
                        Tatry Słowackie
                    </FlagContainer>
                </FlagWrapper>
            </SectionWrapper>
        </Wrapper>
    );
}
