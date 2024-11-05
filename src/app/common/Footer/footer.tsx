'use client'

import React from 'react';
import { AppImage, AppSection, AppText, AppTextTitle, AppTextWrapper, Wrapper } from './styledFooter';
import app from '../Images/FooterImages/phone.svg';

export const Footer = () => {
    return (
        <Wrapper>
            <AppSection>
                <AppImage src={app.src} alt='Phone' />
                <AppTextWrapper>
                    <AppTextTitle>Już wkrótce aplikacja dostępna na telefonie</AppTextTitle>
                    <AppText>Aplikacja dostępna będzie w najpopularniejszych sklepach!</AppText>
                </AppTextWrapper>
            </AppSection>
            xd
        </Wrapper>
    );
};

