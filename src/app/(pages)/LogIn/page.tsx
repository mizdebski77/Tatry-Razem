'use client'

import { ButtonSpan, Form, FormSpan, FormTitle, Text, TextWrapper, Title, Wrapper } from "./styledLogIn";
import { Button, ButtonLink, Input } from "@/app/common/Components/components";

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
            </Form>
        </Wrapper>
    )
}