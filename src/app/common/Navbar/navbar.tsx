'use client'
import React, { useState, useEffect } from 'react';
import { AuthLogin, AuthRegist, AuthWrapper, Link, LinkImage, Logo, Wrapper } from './styledNavbar';
import homeImage from '../Images/NavImages/home.svg';


export const Navbar = () => {

    return (
        <Wrapper>
            <Logo href='/'>CHwG</Logo>
            <Link href='/'>
                <LinkImage src={homeImage.src} alt='Link' />
                Strona Główna
            </Link>

            <AuthWrapper>
                <AuthLogin href='/LogIn'>Zaloguj się</AuthLogin>
                <AuthRegist>Rejestracja</AuthRegist>
            </AuthWrapper>
        </Wrapper>
    );
};

