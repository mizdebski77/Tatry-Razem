"use client";

import React, { useState, useTransition } from "react";
import {
    AuthButton,
    AuthButtonImage,
    AuthButtonWrapper,
    Loader,
    Text,
    TextWrapper,
    Title,
    Wrapper,
} from "../authComponents";
import { ButtonLink, Input } from "@/app/common/UI/UI";
import facebook from "../../../common/Images/AuthImages/facebook.svg";
import google from "../../../common/Images/AuthImages/google.svg";
import { RegisterInputs } from "@/app/common/arrays";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { SignUp } from "../authActions";
import { Button, Form, FormTitle, SectionSpan } from "../authComponents";

type formFields = {
    email: string;
    password: string;
    rpassword: string;
    name: string;
    surname: string;
};

export default function Register() {
    const [formData, setFormData] = useState<formFields>({
        email: "",
        password: "",
        rpassword: "",
        name: "",
        surname: "",
    });

    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    const handleSignUp = (formData: FormData) => {
        startTransition(async () => {
            const { errorMessage } = await SignUp(formData);

            if (errorMessage) {
                toast.error(errorMessage);
            } else {
                router.push("/");
                toast.success(
                    "A verification link has been sent to your email"
                );
            }
        });
    };

    const [formErrors, setFormErrors] = useState<formFields>({
        email: "",
        password: "",
        rpassword: "",
        name: "",
        surname: "",
    });

    const validations: Record<
        keyof formFields,
        (value: string) => true | string
    > = {
        email: (value: string) =>
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value) ||
            "Niepoprawny E-mail",
        password: (value: string) =>
            value.length >= 6 || "Hasło powinno zawierać co najmniej 6 znaków",
        rpassword: (value: string) =>
            value === formData.password || "Hasła nie są identyczne",
        name: (value: string) =>
            /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/.test(value) ||
            "Wpisz poprawne imię",
        surname: (value: string) =>
            /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/.test(value) ||
            "Wpisz poprawne nazwisko",
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({ ...prev, [name]: value }));

        if (validations[name as keyof formFields]) {
            const validationResult =
                validations[name as keyof formFields](value);
            setFormErrors((prev) => ({
                ...prev,
                [name]: validationResult === true ? "" : validationResult,
            }));
        }
    };

    const isFormValid =
        Object.values(formErrors).every((error) => error === "") &&
        Object.values(formData).every((value) => value !== "");

    return (
        <Wrapper>
            <TextWrapper>
                <Title>Posiadasz konto?</Title>
                <Text>Zaloguj się klikając w poniższy link!</Text>
                <ButtonLink $background="blue" href="/Login" text="Logowanie" />
            </TextWrapper>

            <Form action={handleSignUp}>
                <FormTitle>Rejestracja</FormTitle>
                {RegisterInputs.map((input) => (
                    <Input
                        key={input.id}
                        placeHolder={input.placeholder}
                        required={input.required}
                        text={formErrors[input.name as keyof formFields]}
                        name={input.name}
                        type={input.type}
                        isError={formErrors ? 0 : 1}
                        value={formData[input.name as keyof formFields]}
                        onChange={handleInputChange}
                    />
                ))}

                <Button disabled={isPending || !isFormValid}>
                    {isPending ? <Loader /> : "Zarejestruj"}
                </Button>
                <SectionSpan>Lub</SectionSpan>

                <AuthButtonWrapper>
                    <AuthButton>
                        <AuthButtonImage src={google.src} alt="Google" />
                        <span>
                            Zarejestruj się za pomocą{" "}
                            <span style={{ fontWeight: "600" }}>Google</span>
                        </span>
                    </AuthButton>

                    <AuthButton>
                        <AuthButtonImage src={facebook.src} alt="Facebook" />
                        <span>
                            Zarejestruj się za pomocą{" "}
                            <span style={{ fontWeight: "600" }}>Facebook</span>
                        </span>
                    </AuthButton>
                </AuthButtonWrapper>
            </Form>
        </Wrapper>
    );
}
