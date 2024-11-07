'use client'

import { Button } from "@/app/common/Components/buttons";
import { Form, FormTitle, Text, TextWrapper, Title, Wrapper } from "./styledLogIn";
import { ButtonLink } from "@/app/common/Components/components";

export default function LogIn() {
    return (
        <Wrapper>
            <TextWrapper>
                <Title>Nie masz konta?</Title>
                <Text>Zarejestruj się klikając w poniższy link!</Text>
                <ButtonLink
                    href="/Register"
                    text='Rejestracja'
                />
            </TextWrapper>

            <Form>
                <FormTitle>Logowanie</FormTitle>
            </Form>
        </Wrapper>
    )
}