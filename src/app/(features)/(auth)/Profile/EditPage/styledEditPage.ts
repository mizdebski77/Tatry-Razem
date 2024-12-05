import { theme } from "@/app/core/StyledComponents/theme";
import { styled } from "styled-components";

export const EditSection = styled.div`
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow-y: auto;
    background: rgba(0, 0, 0, 0.7);
    padding: 40px;
    overflow: auto;
`;


export const EditWrapper = styled.div`
    background: white;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 800px;
    margin: 20px auto;
    overflow-y: scroll;
    border-radius: 12px; 
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

export const FormHeader = styled.span`
    margin-top: 20px;
    font-size: 24px;
    color: ${theme.palette.blue};
`;

export const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 40px;
`;

export const Image = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: fit-content;

    max-width: 180px;
    border-radius: 100%;
    height: 180px;
`;


export const TextArea = styled.textarea`
    border: 2px solid ${theme.palette.blue};
    padding: 12px 20px;
    border-radius: 12px;
    font-size: 16px;
    outline: none;
    resize: none;
    background: none;
    width: 100%;
    min-height: 180px;

    @media (max-width: ${theme.mediaQuery.mobileMd}) {
        font-size: 16px;
    };
`;

export const SocialWrapper = styled.div`
    display: flex;
    align-items: center;
    border: 2px solid ${theme.palette.blue};
    padding: 12px 20px;
    border-radius: 12px;
    gap: 20px;
`;

export const SocialInput = styled.input`
    font-size: 18px;
    border: none;
    outline: none;
    background: none;
    width: 100%;

    @media (max-width: ${theme.mediaQuery.mobileMd}) {
        font-size: 16px;
    };
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




