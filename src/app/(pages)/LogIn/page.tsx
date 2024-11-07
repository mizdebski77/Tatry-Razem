'use client'

import { Form, FormTitle, Text, TextWrapper, Title, Wrapper } from "./styledLogIn";
import { ButtonLink } from "@/app/common/Components/components";

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
            </Form>
        </Wrapper>
    )
}