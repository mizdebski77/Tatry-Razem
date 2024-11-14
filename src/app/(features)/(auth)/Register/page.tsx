'use client'


import { AuthButton, AuthButtonImage, AuthButtonWrapper, SectionSpan, Form, FormTitle, Text, TextWrapper, Title, Wrapper, Button } from "./styledRegister";
import { ButtonLink, Input } from "@/app/common/Components/components";
import facebook from '../../../common/Images/AuthImages/facebook.svg';
import google from '../../../common/Images/AuthImages/google.svg';
import { RegisterInputs } from "@/app/common/arrays";
import { authSignUp } from "../authActions";

export default function Register() {

    return (
        <Wrapper>
            <TextWrapper>
                <Title>Posiadasz konto?</Title>
                <Text>Zaloguj się klikając w poniższy link!</Text>
                <ButtonLink
                    $background="blue"
                    href="/LogIn"
                    text='Logowanie'
                />
            </TextWrapper>

            <Form>
                <FormTitle>Rejestracja</FormTitle>
                {RegisterInputs.map((input) => (
                    <Input
                        key={input.id}
                        placeHolder={input.placeholder}
                        required={input.required}
                        text={input.text}
                        name={input.name}
                        type={input.type}
                        isError={1}
                    />
                ))}
                <Button formAction={authSignUp}>Rejestracja</Button>
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