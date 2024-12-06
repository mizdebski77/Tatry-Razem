'use client'

import { styled } from "styled-components";
import { theme } from "@/app/core/StyledComponents/theme";
import { SocialIcon } from "react-social-icons";
import header from '../../../common/Images/Profile/header.jpg';

export const Wrapper = styled.section`
    min-height: 100vh;
    background-position: center;
    background-size: cover;
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

export const Container = styled.article`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 40px;
    gap: 40px;
    max-width: 1500px;
    margin: 0 auto;

    @media (max-width: ${theme.mediaQuery.tabletMd}) {
        grid-template-columns: 1fr;
        padding: 12px;
    };
`;

export const TilesWrapper = styled.div`
    display: grid;
    gap: 40px;
`;

export const Tile = styled.div`
    padding: 0 0 40px;
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    text-align: center;

    @media (max-width: ${theme.mediaQuery.mobileMd}) {
        padding: 0 0 20px;
        gap: 20px;
    };
`;

export const DataWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 20px;

    @media (max-width: ${theme.mediaQuery.mobileMd}) {
        gap: 12px;
        justify-content: center;
    };
`;

export const UserImage = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: fit-content;
    margin: 0 auto;
    max-width: 240px;
    border-radius: 100%;
    height: 240px;
`;

export const TileTitle = styled.p`
    font-size: 32px;
    background: ${theme.palette.blue};
    color: white;
    border-radius: 8px 8px 0 0 ;
    padding: 12px;

    @media (max-width: ${theme.mediaQuery.mobileMd}) {
        font-size: 20px;
    };
`;

export const TileSpanWrapper = styled.label`
    font-size: 20px;
    padding: 16px 24px;
    width: 100%;
    background: #f3f3f3;
    display: grid;
    gap: 8px;
    text-align: center;
    align-items: start;


    @media (max-width: ${theme.mediaQuery.mobileMd}) {
        font-size: 14px;
        display: grid;
        padding: 8px;
        gap: 12px;
    };
`;

export const TileSpanLegend = styled.legend`
    display: flex;
    gap: 8px;
    align-items: center;
    font-weight: bold;
`;

export const TileSpan = styled.p`
    text-align: justify;
    font-size: 20px;
`;


export const TileLInksWrapper = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: space-evenly;
    max-width: 320px;
    width: 100%;
`;

export const SocialLinks = styled(SocialIcon)`
    transition: 0.3s;

    &:hover {
        transform: translateY(-4px);
    }
`;






