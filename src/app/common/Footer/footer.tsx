'use client'
import React from 'react';
import { AppImage, AppSection, AppStore, AppStoresWrapper, AppText, AppTextTitle, AppTextWrapper, Content, Creator, Link, LinksTitle, LinksWrapper, Logo, LogoImg, SocialContainer, SocialLink, SocialsWrapper, Wrapper } from './styledFooter';
import app from '../Images/FooterImages/phone.svg';
import google from '../Images/FooterImages/googleStore.svg';
import store from '../Images/FooterImages/appStore.svg';
import { FooterLinks, } from '../arrays';
import logo from '../Images/logo.png';
import { SocialIcon } from 'react-social-icons';

export const Footer = () => {
    return (
        <Wrapper>
            <AppSection>
                <AppImage src={app.src} alt='Phone' />
                <AppTextWrapper>
                    <AppTextTitle>Już wkrótce aplikacja dostępna na telefonie</AppTextTitle>
                    <AppText>Aplikacja dostępna będzie w najpopularniejszych sklepach!</AppText>
                    <AppStoresWrapper>
                        <AppStore src={google.src} alt='Google Store' />
                        <AppStore src={store.src} alt='App Store' />
                    </AppStoresWrapper>
                </AppTextWrapper>
            </AppSection>

            <Content>
                <Logo href='/'>
                    <LogoImg src={logo.src} alt='logo' />
                    Tatry Razem
                </Logo>

                {FooterLinks.map((footerLink) => (
                    <LinksWrapper key={footerLink.id}>
                        <LinksTitle>{footerLink.title}:</LinksTitle>
                        {footerLink.links.map((link) => (
                            <Link key={link.id} href={link.link}>{link.name}</Link>
                        ))}
                    </LinksWrapper>
                ))}

                <SocialsWrapper>
                    <LinksTitle>Obserwuj nas na:</LinksTitle>
                    <SocialContainer>
                        <SocialLink url="https://www.facebook.com/?locale=pl_PL" />
                        <SocialLink url="youtube.com" />
                        <SocialLink url="https://www.instagram.com/raynavallandingham/" />

                    </SocialContainer>
                </SocialsWrapper>
            </Content>

            <Creator>© TatryRazem - Projekt oraz realizacja: Marcin Izdebski</Creator>
        </Wrapper>
    );
};

