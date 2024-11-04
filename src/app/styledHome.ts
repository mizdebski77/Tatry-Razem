import { styled } from "styled-components";
import headerBackground from './common/Images/HomeImages/headerBackground.svg';
import tileBackground from './common/Images/HomeImages/tileBackground.svg';
import { theme } from "./core/StyledComponents/theme";

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
    padding: 120px 20px;
    gap: 20px;
    box-shadow: inset  0px -200px 65px -44px rgba(245, 245, 245, 1);
`;

export const HeaderTitle = styled.h1`
    font-size: 96px;
    color: white;
    text-align: center;
    max-width: 1000px;
    font-weight: light;
`;

export const PropositionsWrapper = styled.section`
    padding: 0 80px;
    max-width: 1920px;
    margin: -340px auto 0;
    display: grid;
`;

export const PropositionsTitle = styled.h2`
    font-size: 40px;
    color: white;
    font-weight: normal;
`;

export const PropositionsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 20px 0;
    gap: 40px;
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
    }
`;

export const TileTitle = styled.span`
    font-size: 24px;
    color: white;
    font-weight: bold;
`;

export const TileDate = styled.p`
    font-size: 20px;
    color: white;
`;