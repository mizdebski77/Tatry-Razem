import React from 'react';
import styled from 'styled-components';
import { theme } from '../../core/StyledComponents/theme';

const StyledButtonLink = styled.a`
    background: ${theme.palette.blue};  
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 18px;
    padding: 12px 40px;
    transition: 0.3s;
    margin: 0 auto;
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


interface buttonProps {
    text: string;
    onClick: () => void;
}

export const ButtonLink: React.FC<buttonProps> = ({ text, onClick }) => {
    return (
        <StyledButtonLink
            onClick={onClick}
        >
            {text}
        </StyledButtonLink>
    );
};