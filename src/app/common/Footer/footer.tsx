'use client'
import React from 'react';
import { AppImage, AppSection, AppStore, AppStoresWrapper, AppText, AppTextTitle, AppTextWrapper, Content, ContentLogo, Creator, Link, LinksTitle, LinksWrapper, SocialContainer, SocialLink, SocialsWrapper, Wrapper } from './styledFooter';
import app from '../Images/FooterImages/phone.svg';
import google from '../Images/FooterImages/googleStore.svg';
import store from '../Images/FooterImages/appStore.svg';
import { FooterLinks, SocialLinks } from '../arrays';

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
                <ContentLogo>CHwG</ContentLogo>
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
                        {SocialLinks.map((link) => (
                            <SocialLink src={link.img.src} alt={link.alt} key={link.id} />
                        ))}
                    </SocialContainer>
                </SocialsWrapper>
            </Content>

            <Creator>© ZSW - Projekt oraz realizacja: Marcin Izdebski</Creator>
        </Wrapper>
    );
};

