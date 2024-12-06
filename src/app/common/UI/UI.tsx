"use client";

import { useState } from "react";
import {
    InputButton,
    InputImg,
    InputInfo,
    InputWrapper,
    StyledButton,
    StyledButtonLink,
    StyledInput,
    StyledTitle,
} from "./styledUI";
import showPasswordImg from "../Images/AuthImages/showPassword.svg";
import hidePasswordImg from "../Images/AuthImages/hidePassword.svg";

interface buttonLinkProps {
    text: string;
    href: string;
    $background: string;
}

interface buttonProps {
    text: string;
    $background: string;
    onClick: () => void;
    disabled: boolean;
    type: "button" | "submit" | "reset" | undefined;
}

interface inputProps {
    placeHolder: string;
    type: string;
    text: string;
    required: boolean;
    name: string;
    isError: 1 | 0;
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface titleProps {
    color: string;
    text: string;
}

export const Title: React.FC<titleProps> = ({ text, color }) => {
    return <StyledTitle color={color}>{text}</StyledTitle>;
};

export const Button: React.FC<buttonProps> = ({
    text,
    onClick,
    $background,
    disabled,
    type,
}) => {
    return (
        <StyledButton
            $background={$background}
            onClick={onClick}
            disabled={disabled}
            type={type}
        >
            {text}
        </StyledButton>
    );
};

export const ButtonLink: React.FC<buttonLinkProps> = ({
    text,
    href,
    $background,
}) => {
    return (
        <StyledButtonLink $background={$background} href={href}>
            {text}
        </StyledButtonLink>
    );
};

export const Input: React.FC<inputProps> = ({
    placeHolder,
    type,
    text,
    name,
    required,
    onChange,
    isError,
    value,
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <label>
            <InputInfo>{text}</InputInfo>
            <InputWrapper errorinput={isError}>
                <StyledInput
                    required={required}
                    placeholder={placeHolder}
                    name={name}
                    onChange={onChange}
                    value={value}
                    type={type === "password" && showPassword ? "text" : type}
                />

                {type === "password" && (
                    <InputButton
                        type="button"
                        onClick={togglePasswordVisibility}
                    >
                        <InputImg
                            src={
                                showPassword
                                    ? hidePasswordImg.src
                                    : showPasswordImg.src
                            }
                        />
                    </InputButton>
                )}
            </InputWrapper>
        </label>
    );
};
