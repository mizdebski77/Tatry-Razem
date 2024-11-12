import { theme } from "@/app/core/StyledComponents/theme";
import { styled, css } from "styled-components";

interface StyledButtonProps {
    background: string;
};

export const StyledButtonLink = styled.a <StyledButtonProps>`
    background: ${({ background }) => background === 'blue' ? theme.palette.blue : theme.palette.white};  
    color: ${({ background }) => background === 'blue' ? theme.palette.white : 'black'};
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 18px;
    padding: 12px 40px;
    transition: 0.3s;
    margin: 0 auto;
    text-decoration: none;

    &:hover {
        background: ${({ background }) => background === 'blue' ? '#3469d8' : '#d1d1d1'};
        transform: translateY(-3px)
    };

    &:active {
        background: ${({ background }) => background === 'blue' ? '#4a7add' : '#aeaeae'};
    };

    @media (max-width: ${theme.mediaQuery.mobileMd}) {
        font-size: 14px;
    };
`;


export const StyledButton = styled.button`
    background: ${theme.palette.blue};  
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 18px;
    padding: 12px 40px;
    transition: 0.3s;

    &:hover {
        background: #3469d8;
        transform: translateY(-3px)
    };

    &:active {
        background: #4a7add;
    };

    @media (max-width: ${theme.mediaQuery.mobileMd}) {
        font-size: 14px;
    };
`;

export const InputWrapper = styled.label`

`;

export const InputInfo = styled.p`
    margin-bottom: 10px;
    color: ${theme.palette.error};
`;

export const StyledInput = styled.input<{ errorInput?: boolean }>`
    padding: 12px 20px;
    border-radius: 12px;
    font-size: 18px;
    border: 2px solid ${theme.palette.blue};
    outline: none;
    background: none;
    width: 100%;

    @media (max-width: ${theme.mediaQuery.mobileMd}) {
        font-size: 16px;
    };


    ${({ errorInput }) => errorInput && css`
        border: 2px solid ${theme.palette.error};
    `};

`;