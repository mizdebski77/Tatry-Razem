'use client'
import React, { useState, useEffect } from 'react';
import { AuthLogin, AuthRegist, AuthWrapper, Link, LinkImage, Logo, Wrapper } from './styledNavbar';
import homeImage from '../Images/NavImages/home.svg';
import { ButtonLink } from '../Components/components';


export const Navbar = () => {

    return (
        <Wrapper>
            <Logo href='/'>CHwG</Logo>
            <Link href='/'>
                <LinkImage src={homeImage.src} alt='Link' />
                Strona Główna
            </Link>

            <AuthWrapper>
                <ButtonLink background='blue' text='Zaloguj się' href='/LogIn' />
            </AuthWrapper>
        </Wrapper >
    );
};

