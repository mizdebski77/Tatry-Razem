'use client'

import { useState } from "react";
import { AuthButton, AuthButtonImage, AuthButtonWrapper, SectionSpan, Form, FormSpan, FormTitle, Text, TextWrapper, Title, Wrapper, Button } from "./styledLogIn";
import { ButtonLink, Input } from "@/app/common/Components/components";
import facebook from '../../../common/Images/AuthImages/facebook.svg';
import google from '../../../common/Images/AuthImages/google.svg';
import { createClient } from "@/app/core/subabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation'
import { authLogin } from "../authActions";


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
                <Input
                    text="Niepoprawny email"
                    errorinput={false}
                    placeHolder="E-Mail"
                    type="email"
                />
                <Input
                    text="Hasło niepoprawne email"
                    errorinput={false}
                    placeHolder="Hasło"
                    type="password" />
                <FormSpan>Zapomniałeś hasła?</FormSpan>
                <Button formAction={authLogin}>Zaloguj</Button>
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