'use client'

import { styled } from "styled-components";
import headerBackground from '../../../common/Images/Profile/header.jpg';
import { theme } from "@/app/core/StyledComponents/theme";


export const Wrapper = styled.section`
    min-height: 100vh;
`;

export const Header = styled.header`
    background-image: url(${headerBackground.src});
    background-position: center;
    background-size: cover;
    display: flex;
    min-height: 40vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    gap: 20px;

    /* @media (max-width: ${theme.mediaQuery.screen}) {
        padding: 120px 20px;
        justify-content: start;
    }; */

`;

export const HeaderTitle = styled.h1`
    color: white;
    font-size: 96px;
    font-weight: normal;
    letter-spacing: 5px;
`;

export const Container = styled.article`

`;