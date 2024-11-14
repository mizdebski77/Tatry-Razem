'use client'

import { AuthWrapper, Link, LinkImage, Logo, Wrapper } from './styledNavbar';
import homeImage from '../Images/NavImages/home.svg';
import { ButtonLink } from '../Components/components';


export default function Navigation() {

    return (
        <Wrapper>
            <Logo href='/'>CHwG</Logo>
            <Link href='/'>
                <LinkImage src={homeImage.src} alt='Link' />
                Strona Główna
            </Link>

            <AuthWrapper>
                <ButtonLink $background='blue' text='Zaloguj się' href='/Login' />
                <ButtonLink $background='white' text='Rejestracja' href='/Register' />
            </AuthWrapper>
        </Wrapper >
    );
};

