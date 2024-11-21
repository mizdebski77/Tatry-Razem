'use client'
import { styled } from "styled-components";
import headerBackground from './common/Images/HomeImages/headerBackground.svg';
import tileBackground from './common/Images/HomeImages/tileBackground.svg';
import { theme } from "./core/StyledComponents/theme";
import workBackground from './common/Images/HomeImages/howItWorksBackground.svg';

export const Wrapper = styled.main`

 `;

export const Header = styled.header`
    background-image: url(${headerBackground.src});
    background-position: center;
    background-size: cover;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    gap: 20px;
    box-shadow: inset  0px -200px 65px -44px rgba(245, 245, 245, 1);

    @media (max-width: ${theme.mediaQuery.screen}) {
        padding: 120px 20px;
        justify-content: start;
    };

    @media (max-width: ${theme.mediaQuery.mobileMd}) {
        min-height: 70vh;
        padding: 40px 12px;
        justify-content: center;
    };
`;

export const HeaderTitle = styled.h1`
    font-size: 4vw;
    color: white;
    text-align: center;
    max-width: 1920px;
    font-weight: light;

    @media (max-width: ${theme.mediaQuery.screen}) {
        font-size: 5vw;
        max-width: 1000px;
    };

    @media (max-width: ${theme.mediaQuery.mobileSm}) {
        font-size: 32px;
    };
`;




export const PropositionsWrapper = styled.section`
    padding: 0 80px;
    max-width: 1920px;
    margin: -340px auto 0;
    display: grid;
    gap: 20px;

    @media (max-width: ${theme.mediaQuery.mobileMd}) {
        padding: 0 12px;
        margin: -100px auto 0;
    };
`;

export const PropositionsTitle = styled.h2`
    font-size: 40px;
    color: white;
    font-weight: normal;

    @media (max-width: ${theme.mediaQuery.mobileMd}) {
        font-size: 24px;
        color: black;
        text-align: center;
        font-weight: bold;
    };
`;

export const PropositionsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    margin: 20px 0;
    gap: 40px;

    @media (max-width: ${theme.mediaQuery.mobileSm}) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
`;

export const PropositionTile = styled.div`
    background-image: url(${tileBackground.src});
    background-size: cover;
    background-position: center;
    padding: 20px 40px;
    min-height: 260px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 0 10px ${theme.palette.blue};
    };

    @media (max-width: ${theme.mediaQuery.mobileSm}) {
        min-height: 180px;
    };
`;

export const TileTitle = styled.span`
    font-size: 24px;
    color: white;
    font-weight: bold;

    @media (max-width: ${theme.mediaQuery.mobileSm}) {
        font-size: 20px;
    };
`;

export const TileDate = styled.p`
    font-size: 20px;
    color: white;

    @media (max-width: ${theme.mediaQuery.mobileSm}) {
        font-size: 16px;
    };
`;

export const WorkWrapper = styled.section`
    background-image: url(${workBackground.src});
    background-position: center;
    background-size: cover;
    padding: 120px 40px;
    display: grid;
    justify-content: center;
    gap: 40px;
    margin-top: 64px;

    @media (max-width: ${theme.mediaQuery.mobileMd}) {
        padding: 40px 12px;
        gap: 32px;
    };
`;

export const WorkTitle = styled.h3`
    font-size: 80px;
    font-weight: lighter;
    color: white;
    text-align: center;

    @media (max-width: ${theme.mediaQuery.mobileMd}) {
        font-size: 28px;
    };
`;

export const WorkContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
    gap: 64px;

    @media (max-width: ${theme.mediaQuery.mobileMd}) {
        grid-template-columns: 1fr;
        gap: 32px;
    };
`;

export const WorkTile = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(4px);
    padding: 80px 10px;
    border-radius: 20px;

    @media (max-width: ${theme.mediaQuery.mobileMd}) {
        padding: 40px 10px;
    };
`;

export const WorkTileNumber = styled.span`
    background: #D4EEEC;
    font-size: 40px;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin: 0 auto;

    @media (max-width: ${theme.mediaQuery.mobileMd}) {
        font-size: 32px;
        height: 40px;
        width: 40px;
    };
`;

export const WorkTileText = styled.p`
    color: white;
    font-size: 24px;
    text-align: center;

    @media (max-width: ${theme.mediaQuery.mobileMd}) {
        font-size: 20px;
    }; 
`;


export const IdeaWrapper = styled.section`
    max-width: 1200px; 
    margin: 120px auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    padding: 40px;

    @media (max-width: ${theme.mediaQuery.mobileMd}) {
        grid-template-columns: 1fr;
        padding: 12px;
        margin: 32px auto;
    };
`;

export const IdeaTextWrapper = styled.div`
    display: grid;
    gap: 20px;
    text-align: center;
`;

export const IdeaTitle = styled.h4`
    font-size: 40px;
    font-weight: normal;

    @media (max-width: ${theme.mediaQuery.mobileMd}) {
        font-size: 28px;
    };
`;

export const IdeaText = styled.p`
    font-size: 24px;
    text-align: justify;
    opacity: 0.7;

    @media (max-width: ${theme.mediaQuery.mobileMd}) {
        font-size: 16px;
    };
`;

export const IdeaImage = styled.img`
    max-width: 520px;
    width: 100%;
    box-shadow: 25px 25px 31px 1px rgba(66, 68, 90, 1);
    border-radius: 20px;

    @media (max-width: ${theme.mediaQuery.mobileMd}) {
        max-width: 360px;
        margin: 0 auto;
        box-shadow: 15px 15px 21px 1px rgba(66, 68, 90, 1);
    };
`;
