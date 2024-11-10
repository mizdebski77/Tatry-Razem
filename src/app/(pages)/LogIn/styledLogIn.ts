import { styled } from "styled-components";
import background from '../../common/Images/AuthImages/background.jpg';
import { theme } from "@/app/core/StyledComponents/theme";

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
    width: 80%;
    gap: 20px;
`;

export const FormTitle = styled.h2`
    font-size: 72px;
    letter-spacing: 12px;
    font-weight: lighter;
    margin-bottom: 20px;
`;


export const FormSpan = styled.a`
    color: ${theme.palette.blue};
    text-align: end;
    cursor: pointer;
    font-size: 18px;
    transition: 0.3s;

    &:hover {
        transform: translateY(-4px);
    }
`;


export const ButtonSpan = styled.p`
    text-align: center;
    font-size: 24px;
    margin-top: 20px;
`;

export const AuthButtonWrapper = styled.div`
    display: grid;
    gap: 24px;
`;

export const AuthButton = styled.button`
    font-size: 24px;
    display: flex;
    gap: 20px;
    align-items: center;
    padding: 12px 40px;
    border-radius: 12px;
    border: 2px solid #c3c3c3;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        transform: translateY(-4px);
    }
`;


export const AuthButtonImage = styled.img`
    max-width: 40px;
`;

