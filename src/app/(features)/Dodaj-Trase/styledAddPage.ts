'use client'
import { theme } from '@/app/core/StyledComponents/theme';
import styled from 'styled-components'
import header from '../../common/Images/AddPage/header.jpg';
import css from 'styled-jsx/css';

export const Wrapper = styled.section`
    min-height: 100vh;
    background: linear-gradient(187deg, rgba(246,246,246,0.5672005618653712) 7%, rgba(38,89,195,0.2805497198879552) 77%);
`;

export const Header = styled.header`
    background-image: url(${header.src});
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 40vh;
    box-shadow:inset 0px 95px 234px 72px #000000;
    padding: 24px;

    @media (max-width: ${theme.mediaQuery.mobileMd}) {
        box-shadow:inset 0px 95px 234px 2px #000000;
    };
`;

export const Container = styled.article`
    padding: 40px;
    display: grid;
    gap: 40px;
    justify-content: center;
`;

export const LinksWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
interface PathLinkProps {
    light?: 1 | 0;
}

export const PathLink = styled.span<PathLinkProps>`
    font-size: 24px;
    font-weight: normal;
    padding: 12px 24px;
    color: white;
    border-radius: 20px;

    background: ${({ light }) =>
        light ? theme.palette.lightBlue : theme.palette.blue};
`;

export const Line = styled.div<PathLinkProps>`
    border: 2px solid ${theme.palette.blue};
    width: 120px;
    
    background: ${({ light }) =>
        light ? theme.palette.lightBlue : theme.palette.blue};
`;
