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
    
    padding: 40px;

`;

export const TextWrapper = styled.div`
    display: grid;
    color: white;
    text-align: center;
    gap: 20px;
`;

export const Title = styled.h1`
    font-weight: bold;
    font-size: 72px;
`;

export const Text = styled.h3`
    font-weight: lighter;
    font-size: 32px;
`;

export const Form = styled.form`
    box-shadow:0px 0px 31px 72px rgba(255, 255, 255, 0.9);
    background: rgba(255, 255, 255, 0.9);
    display: grid;
    align-items: center;
    justify-content: center;
    padding: 40px;
    height: 80%;
    width: 80%;

`;

export const FormTitle = styled.h2`
    font-size: 72px;
    letter-spacing: 12px;
    font-weight: lighter;
`;

export const FormInput = styled.input`

`;

export const FormSpan = styled.span`

`;


export const FormButton = styled.button`

`;

export const ButtonSpan = styled.span`

`;

export const ButtonImage = styled.img`

`;

