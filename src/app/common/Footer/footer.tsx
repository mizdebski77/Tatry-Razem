'use client'

import React from 'react';
import { AppImage, AppSection, AppStore, AppStoresWrapper, AppText, AppTextTitle, AppTextWrapper, Content, ContentLogo, SocialLink, Wrapper } from './styledFooter';
import app from '../Images/FooterImages/phone.svg';
import google from '../Images/FooterImages/googleStore.svg';
import store from '../Images/FooterImages/appStore.svg';
import { SocialLinks } from '../arrays';

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
                {SocialLinks.map((link) => (
                    <SocialLink src={link.img.src} alt={link.alt} key={link.id} />
                ))}
            </Content>
        </Wrapper>
    );
};

