import { theme } from "@/app/core/StyledComponents/theme";
import { styled, css } from "styled-components";

interface StyledButtonProps {
    $background: string;
};

interface StyledTitleProps {
    color: string;
}

export const StyledButtonLink = styled.a <StyledButtonProps>`
    background: ${({ $background }) => $background === 'blue' ? theme.palette.blue : theme.palette.white};  
    color: ${({ $background }) => $background === 'blue' ? theme.palette.white : 'black'};
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 18px;
    padding: 12px 32px;
    transition: 0.3s;
    margin: 0 auto;
    text-decoration: none;

    &:hover {
        background: ${({ $background }) => $background === 'blue' ? '#3469d8' : '#d1d1d1'};
        transform: translateY(-3px)
    };

    &:active {
        background: ${({ $background }) => $background === 'blue' ? '#4a7add' : '#aeaeae'};
    };

    @media (max-width: ${theme.mediaQuery.mobileMd}) {
        font-size: 14px;
        padding: 10px 32px;
    };
`;

export const StyledButton = styled.button <StyledButtonProps>`
    background: ${({ $background }) => $background === 'blue' ? theme.palette.blue : $background === 'red' ? theme.palette.error : theme.palette.white};  
    color: ${({ $background }) => $background === 'blue' ? theme.palette.white : $background === 'red' ? 'white' : 'black'};
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 18px;
    padding: 12px 40px;
    white-space: nowrap;
    transition: 0.3s;
    margin: 0 auto;
    text-decoration: none;

    &:hover {
        background: ${({ $background }) => $background === 'blue' ? '#3469d8' : $background === 'red' ? '#e34235' : '#d1d1d1'};
        transform: translateY(-3px)
    };

    &:active {
        background: ${({ $background }) => $background === 'blue' ? '#4a7add' : $background === 'red' ? '#e85f53' : '#aeaeae'};
    };

    @media (max-width: ${theme.mediaQuery.mobileMd}) {
        font-size: 14px;
        padding: 10px 32px;
    };
`;


export const InputInfo = styled.p`
    margin-bottom: 10px;
    color: ${theme.palette.error};
`;

export const InputWrapper = styled.div<{ errorinput?: 1 | 0 }>`
    display: flex;
    align-items: center;
    border: 2px solid ${theme.palette.blue};
    padding: 12px 20px;
    border-radius: 12px;

    ${({ errorinput }) => errorinput && css`
        border: 2px solid ${theme.palette.error};
    `};
`;

export const InputButton = styled.button`
    cursor: pointer;
    border: none;
    background: none;
`;

export const InputImg = styled.img`
    max-width: 24px;
    opacity: 0.6;
`;

export const StyledInput = styled.input`
    font-size: 18px;
    border: none;
    outline: none;
    background: none;
    width: 100%;

    @media (max-width: ${theme.mediaQuery.mobileMd}) {
        font-size: 16px;
    };
`;


export const StyledTitle = styled.h1<StyledTitleProps>`
    color: ${({color}) => color === 'white'  ?'white' : 'black' };
    font-size: 64px;
    font-weight: bold;
    text-align: center;
    letter-spacing: 5px;

    @media (max-width: ${theme.mediaQuery.mobileMd}) {
        font-size: 32px;
        margin-bottom: 20px;
    };
`;