'use client'

import { styled } from "styled-components";
import { theme } from "@/app/core/StyledComponents/theme";


export const Wrapper = styled.section`
    min-height: 100vh;
    background-position: center;
    background-size: cover;
    padding: 160px 80px;

    @media (max-width: ${theme.mediaQuery.mobileMd}) {
        padding: 120px 20px;
    };
`;

export const Title = styled.h1`
    color: white;
    font-size: 64px;
    font-weight: normal;
    text-align: center;
    letter-spacing: 5px;
    color: black;
    font-weight: bold;

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

    @media (max-width: ${theme.mediaQuery.tabletMd}) {
        grid-template-columns: 1fr;
        padding: 0px;
    };
`;

export const TilesWrapper = styled.div`
    display: grid;
    gap: 40px;


`;

export const Tile = styled.div`
    padding:40px;
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    text-align: center;

    @media (max-width: ${theme.mediaQuery.mobileMd}) {
        padding: 24px 12px;
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

export const UserImage = styled.div`
    background: ${theme.palette.blue};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    max-width: fit-content;
    padding: 12px;
    margin: 0 auto;
`;

export const TileTitle = styled.p`
    font-size: 32px;

    @media (max-width: ${theme.mediaQuery.mobileMd}) {
        font-size: 24px;
    };
`;

export const TileSpan = styled.p`
    font-size: 20px;
    padding: 12px;
    width: 100%;
    background: #f3f3f3;
    display: flex;
    gap: 20px;
    text-align: center;

    @media (max-width: ${theme.mediaQuery.mobileMd}) {
        font-size: 14px;
        display: grid;
        padding: 8px;
        gap: 12px;
    };
`;

export const TileData = styled.span`
    font-weight: bold;
    color: ${theme.palette.blue};
`;

export const TileLInksWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    max-width: 320px;
    width: 100%;
`;


export const EditSection = styled.div`
    display: block;
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    padding: 40px;
`;

export const EditWrapper = styled.div`
    background: white;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`;

export const EditTitle = styled.h2`
    color: black;
    font-size: 40px;
    text-align: center;
    font-weight: normal;
`;

export const Form = styled.form`
    max-width: 640px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    gap:20px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    max-width: 240px;
    width: 100%;
    margin: 0 auto;
`;


export const AlertWrapper = styled.div`
    background: ${theme.palette.blue};
    padding: 80px;
    border-radius: 20px;
    color: white;
    display: grid;
    gap: 20px;
    text-align: center;
`;

export const AlertTitle = styled.h1`
    font-size: 32px;
`;

export const AlertSpan = styled.p`
    font-size: 24px;
`;
