'use client'
import { theme } from '@/app/core/StyledComponents/theme';
import styled from 'styled-components'
import header from '../../common/Images/AddPage/header.jpg';

export const Wrapper = styled.section`
    min-height: 100vh;
`;

export const Header = styled.header`
    background-image: url(${header.src});
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 40vh;
    box-shadow:inset 0px 95px 234px 72px #000000;
    padding: 24px;

    @media (max-width: ${theme.mediaQuery.mobileMd}) {
        box-shadow:inset 0px 95px 234px 2px #000000;
    };
`;

export const Title = styled.h1`
    color: white;
    font-size: 64px;
    font-weight: bold;
    text-align: center;
    letter-spacing: 5px;

    @media (max-width: ${theme.mediaQuery.mobileMd}) {
        font-size: 32px;
        margin-bottom: 20px;
    };
`;