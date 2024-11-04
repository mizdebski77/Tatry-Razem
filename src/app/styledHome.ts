import { styled } from "styled-components";
import headerBackground from './common/Images/HomeImages/headerBackground.jpg';

export const Wrapper = styled.main`

`;

export const Header = styled.header`
    background-image: url(${headerBackground.src});
    background-position: center;
    background-size: cover;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    gap: 20px;
`;

export const HeaderTitle = styled.h1`
    font-size: 96px;
    color: white;
    text-align: center;
    max-width: 1000px;
    font-weight: light;
`;