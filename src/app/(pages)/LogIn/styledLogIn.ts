import { styled } from "styled-components";
import background from '../../common/Images/AuthImages/background.jpg';

export const Wrapper = styled.main`
    min-height: 100vh;
    background-image: url(${background.src});
    background-position: center;
    background-size: cover;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

`;

export const TextWrapper = styled.div`
    display: grid;
    color: white;
    text-align: center;
    gap: 20px;
`;

export const Title = styled.h1`
    font-weight: bold;
    font-size: 96px;
`;

export const Text = styled.h2`
    font-weight: lighter;
    font-size: 32px;
`;

