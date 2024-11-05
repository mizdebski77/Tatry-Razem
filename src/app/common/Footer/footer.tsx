'use client'

import React from 'react';
import { AppImage, AppSection, AppStore, AppStoresWrapper, AppText, AppTextTitle, AppTextWrapper, Wrapper } from './styledFooter';
import app from '../Images/FooterImages/phone.svg';
import google from '../Images/FooterImages/googleStore.svg';
import store from '../Images/FooterImages/appStore.svg';

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
            xd
        </Wrapper>
    );
};

