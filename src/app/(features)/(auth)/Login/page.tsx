'use client'

import { AuthButton, AuthButtonImage, AuthButtonWrapper, SectionSpan, Form, FormSpan, FormTitle, Text, TextWrapper, Title, Wrapper, Button } from "./styledLogIn";
import { ButtonLink, Input } from "@/app/common/UI/UI";
import facebook from '../../../common/Images/AuthImages/facebook.svg';
import google from '../../../common/Images/AuthImages/google.svg';
import { authLogin, authSignUp } from "../authActions";
import React, { useState } from "react";


export default function LogIn() {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');




    const isEmailValid = (email: string) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    };

    const isPasswordValid = (password: string) => {
        const passwordPattern = /^[a-zA-Z0-9._-]{6,}$/;
        return passwordPattern.test(password);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);

        if (!isEmailValid(value)) {
            setEmailError('Niepoprawny format E-Maila');
        } else {
            setEmailError('');
        }
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPassword(value);

        if (!isPasswordValid(value)) {
            setPasswordError('Hasło powinno zawierać conajmniej 6 znaków');
        } else {
            setPasswordError('');
        }
    };

    const isFormValid = !emailError && !passwordError && email && password

    return (
        <Wrapper>
            <TextWrapper>
                <Title>Nie masz konta?</Title>
                <Text>Zarejestruj się klikając w poniższy link!</Text>
                <ButtonLink
                    $background="blue"
                    href="/Private"
                    text='Rejestracja'
                />
            </TextWrapper>

            <Form>
                <FormTitle>Logowanie</FormTitle>
                <Input
                    onChange={handleEmailChange}
                    required={true}
                    text={emailError ? emailError : ''}
                    placeHolder="E-Mail"
                    name='email'
                    type="email"
                    value={email}
                    isError={emailError ? 1 : 0}
                />
                <Input
                    onChange={handlePasswordChange}
                    required={true}
                    text={passwordError ? passwordError : ''}
                    placeHolder="Hasło"
                    name='password'
                    value={password}
                    isError={passwordError ? 1 : 0}
                    type="password" />
                <FormSpan>Zapomniałeś hasła?</FormSpan>

                <Button disabled={!isFormValid} formAction={authLogin}>Zaloguj</Button>
                <Button disabled={!isFormValid} formAction={authSignUp}>Rejestracja</Button>

                <SectionSpan>Lub</SectionSpan>


                <AuthButtonWrapper>
                    <AuthButton>
                        <AuthButtonImage src={google.src} alt="Facebook" />
                        <span>Zaloguj się za pomocą <span style={{ fontWeight: '600' }}>Google</span></span>
                    </AuthButton>

                    <AuthButton>
                        <AuthButtonImage src={facebook.src} alt="Facebook" />
                        <span>Zaloguj się za pomocą <span style={{ fontWeight: '600' }}>Facebook</span></span>
                    </AuthButton>
                </AuthButtonWrapper>
            </Form>
        </Wrapper>
    )
}