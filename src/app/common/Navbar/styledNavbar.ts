'use client'
import { theme } from "@/app/core/StyledComponents/theme";
import { styled } from "styled-components";

export const Wrapper = styled.nav`
    padding: 28px;
    position: fixed;
    z-index: 10;
    top: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: transform 0.3s ease;
`;

export const Logo = styled.a`
    font-size: 40px;
    color: white;
    cursor: pointer;
    text-decoration: none;
`;

export const Link = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    font-size: 18px;
    color: white;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
        transform: translateY(-4px);
    }
`;

export const LinkImage = styled.img`

`;

export const AuthWrapper = styled.div`
    display: flex;
    gap: 32px;
`;

export const ProfileWrapper = styled.a`
    display: grid;
    align-items: center;
    justify-content: center;
    text-decoration: none;
`;

export const ProfileIcon = styled.img`
    margin: 0 auto;
    width: 100%;
    max-width: 36px;
`;

export const ProfileSpan = styled.span`
    font-size: 18px;
    color: white;
`;

export const AuthLogin = styled.a`
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

export const AuthRegist = styled.a`
    background: white;  
    color: black;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 18px;
    padding: 12px 40px;
    transition: 0.3s;

    &:hover {
        background: #dddddd;
        transform: translateY(-3px)
    };

    &:active {
        background: #e1e1e1;
    };

    @media (max-width: ${theme.mediaQuery.mobileMd}) {
        font-size: 14px;
    };
`;