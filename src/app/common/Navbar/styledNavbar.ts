'use client'
import { theme } from "@/app/core/StyledComponents/theme";
import { styled } from "styled-components";

export const Wrapper = styled.nav`
    padding: 20px 32px;
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

    @media (max-width: ${theme.mediaQuery.tabletXl}) {
        padding: 20px;
    };

    @media (max-width: ${theme.mediaQuery.mobileMd}) {
        padding: 12px;
    };
`;


export const Container = styled.div`
    display: flex;
    gap: 40px;

    @media (max-width: ${theme.mediaQuery.tabletXl}) {
        gap: 20px;
    };

    @media (max-width: ${theme.mediaQuery.mobileXl}) {
        display: none;
    };
`;

export const Logo = styled.a`
    font-size: 40px;
    color: white;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 20px;

    @media (max-width: ${theme.mediaQuery.mobileMd}) {
        font-size: 24px;
        gap: 10px;
    };
    
    @media (max-width: ${theme.mediaQuery.tabletXl}) {
        font-size: 32px;
    };

    @media (max-width: ${theme.mediaQuery.mobileSm}) {
        font-size: 18px;
    };
`;

export const LogoImg = styled.img`
    max-width: 64px;

    @media (max-width: ${theme.mediaQuery.mobileMd}) {
        max-width: 40px;
    };

    @media (max-width: ${theme.mediaQuery.mobileSm}) {
        max-width: 32px;
    };
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
    };

    @media (max-width: ${theme.mediaQuery.mobileXl}) {
        font-size: 16px;
        border-bottom: 1px solid white;
        padding-bottom: 12px;
    };
`;

export const AuthWrapper = styled.div`
    display: flex;
    gap: 32px;

    @media (max-width: ${theme.mediaQuery.mobileXl}) {
        display: none;
    };
`;

export const ProfileWrapper = styled.a`
    display: grid;
    align-items: center;
    justify-content: center;
    text-decoration: none;
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