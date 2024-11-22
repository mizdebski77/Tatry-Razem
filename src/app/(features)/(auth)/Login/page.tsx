'use client'

import React, { useState, useTransition } from "react";
import { AuthButton, AuthButtonImage, AuthButtonWrapper, AuthSpan, Loader, Text, TextWrapper, Title, Wrapper, } from "../authComponents";
import { ButtonLink, Input } from "@/app/common/UI/UI";
import facebook from '../../../common/Images/AuthImages/facebook.svg';
import google from '../../../common/Images/AuthImages/google.svg';
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { Button, Form, FormSpan, FormTitle, SectionSpan } from "../authComponents";
import { logInAction } from "../authActions";

export default function LogIn() {
    const [authError, setAuthError] = useState('');

    const router = useRouter();

    const [isPending, startTransition] = useTransition();

    const handleLogIn = (formData: FormData) => {
        startTransition(async () => {
            const { errorMessage } = await logInAction(formData);
            if (errorMessage) {
                setAuthError(errorMessage)
            } else {
                toast.success("Zalogowano pomyślnie");
                router.push("/");
            }
        });
    };
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

    const isFormValid = !emailError && !passwordError && email && password;


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

            <Form action={handleLogIn}>
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

                {authError && <AuthSpan >{authError === 'Invalid login credentials' ? 'Błędny Email lub Hasło' : authError}</AuthSpan>}

                <Button
                    disabled={!isFormValid || isPending}>
                    {isPending ? <Loader /> : 'Zaloguj'}
                </Button>

                <SectionSpan>Lub</SectionSpan>

                <AuthButtonWrapper>
                    <AuthButton>
                        <AuthButtonImage src={google.src} alt="Google" />
                        <span>Zaloguj się za pomocą <span style={{ fontWeight: '600' }}>Google</span></span>
                    </AuthButton>

                    <AuthButton>
                        <AuthButtonImage src={facebook.src} alt="Facebook" />
                        <span>Zaloguj się za pomocą <span style={{ fontWeight: '600' }}>Facebook</span></span>
                    </AuthButton>
                </AuthButtonWrapper>

            </Form>
        </Wrapper >
    );
}
