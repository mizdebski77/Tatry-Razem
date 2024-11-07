'use client'
import React from 'react';
import { Link, LinkImage, Wrapper } from './styledNavbar';
import homeImage from '../Images/NavImages/home.svg';


export const Navbar = () => {
    return (
        <Wrapper>
            <Link href='/'>
                <LinkImage src={homeImage.src} alt='Link' />
                Strona Główna
            </Link>
        </Wrapper>
    );
};

