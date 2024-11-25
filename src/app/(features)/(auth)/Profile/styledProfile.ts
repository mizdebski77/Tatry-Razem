'use client'

import { styled } from "styled-components";
import headerBackground from '../../../common/Images/Profile/header.jpg';
import { theme } from "@/app/core/StyledComponents/theme";


export const Wrapper = styled.section`
    min-height: 100vh;
    background-position: center;
    background-size: cover;
    padding: 160px 80px;
`;

export const Title = styled.h1`
    color: white;
    font-size: 64px;
    font-weight: normal;
    text-align: center;
    letter-spacing: 5px;
    color: black;
    font-weight: bold;
`;

export const Container = styled.article`
    display: flex;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 40px;
`;

export const Tile = styled.div`
    padding: 80px 40px;
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    text-align: center;
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
    font-size: 40px;
`;

export const TileSpan = styled.p`
    font-size: 20px;
    padding: 12px;
    width: 100%;
    background: #f3f3f3;
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
