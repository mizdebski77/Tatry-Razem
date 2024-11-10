'use client'

import { AuthButton, AuthButtonImage, AuthButtonWrapper, ButtonSpan, Form, FormSpan, FormTitle, Text, TextWrapper, Title, Wrapper } from "./styledLogIn";
import { Button, ButtonLink, Input } from "@/app/common/Components/components";
import facebook from '../../common/Images/AuthImages/facebook.svg';
import google from '../../common/Images/AuthImages/google.svg';

export default function LogIn() {
    return (
        <Wrapper>
            <TextWrapper>
                <Title>Nie masz konta?</Title>
                <Text>Zarejestruj się klikając w poniższy link!</Text>
                <ButtonLink
                    background="blue"
                    href="/Register"
                    text='Rejestracja'
                />
            </TextWrapper>

            <Form>
                <FormTitle>Logowanie</FormTitle>
                <Input placeHolder="E-Mail" type="email" />
                <Input placeHolder="Hasło" type="password" />
                <FormSpan>Zapomniałeś hasła?</FormSpan>
                <Button onClick={() => alert('Button clicked!')} text="Zaloguj" />
                <ButtonSpan>Lub</ButtonSpan>

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