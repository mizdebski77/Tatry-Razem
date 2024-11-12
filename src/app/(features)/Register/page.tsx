'use client'

import { AuthButton, AuthButtonImage, AuthButtonWrapper, SectionSpan, Form, FormTitle, Text, TextWrapper, Title, Wrapper } from "./styledRegister";
import { Button, ButtonLink, Input } from "@/app/common/Components/components";
import facebook from '../../common/Images/AuthImages/facebook.svg';
import google from '../../common/Images/AuthImages/google.svg';

export default function Rejestracja() {
    return (
        <Wrapper>
            <TextWrapper>
                <Title>Posiadasz konto?</Title>
                <Text>Zaloguj się klikając w poniższy link!</Text>
                <ButtonLink
                    background="blue"
                    href="/LogIn"
                    text='Logowanie'
                />
            </TextWrapper>

            <Form>
                <FormTitle>Rejestracja</FormTitle>
                <Input placeHolder="Imię *" type="email" />
                <Input placeHolder="Nazwisko *" type="email" />
                <Input placeHolder="E-Mail *" type="email" />
                <Input placeHolder="Hasło *" type="password" />
                <Input placeHolder="Powtórz Hasło *" type="password" />
                <Button onClick={() => alert('Button clicked!')} text="Zaloguj" />
                <SectionSpan>Lub</SectionSpan>

                <AuthButtonWrapper>
                    <AuthButton>
                        <AuthButtonImage src={google.src} alt="Facebook" />
                        <span>Zarejestruj się za pomocą <span style={{ fontWeight: '600' }}>Google</span></span>
                    </AuthButton>

                    <AuthButton>
                        <AuthButtonImage src={facebook.src} alt="Facebook" />
                        <span>Zarejestruj się za pomocą <span style={{ fontWeight: '600' }}>Facebook</span></span>
                    </AuthButton>
                </AuthButtonWrapper>
            </Form>
        </Wrapper>
    )
}