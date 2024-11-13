import { useState } from "react";
import { InputButton, InputImg, InputInfo, InputWrapper, StyledButtonLink, StyledInput } from "./styledComponents";
import showPasswordImg from '../Images/AuthImages/showPassword.svg';
import hidePasswordImg from '../Images/AuthImages/hidePassword.svg';

interface buttonLinkProps {
    text: string;
    href: string;
    background: string;
};

interface inputProps {
    placeHolder: string;
    type: string;
    text: string;
    required: boolean;
    name: string;
    isError?: boolean;
};

export const ButtonLink: React.FC<buttonLinkProps> = ({ text, href, background }) => {
    return (
        <StyledButtonLink background={background} href={href}>
            {text}
        </StyledButtonLink>
    );
};


export const Input: React.FC<inputProps> = ({ placeHolder, type, text, name, required, isError }) => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    return (
        <label>
            <InputInfo>{text}</InputInfo>
            <InputWrapper>
                <StyledInput
                    required={required}
                    placeholder={placeHolder}
                    name={name}
                    type={type === 'password' && showPassword ? 'text' : type}
                    errorinput={isError}
                />

                {type === 'password' && (
                    <InputButton
                        type="button"
                        onClick={togglePasswordVisibility}
                    >
                        <InputImg src={showPassword ? showPasswordImg.src : hidePasswordImg.src} />
                    </InputButton>
                )}
            </InputWrapper>
        </label>
    );
};


// export const Button: React.FC<buttonProps> = ({ text, onClick, formAction }) => {
//     const handleClick = async () => {
//         if (formAction) {
//             const formData = new FormData();
//             // Tutaj można pobrać i dodać dane formularza, jeśli są potrzebne
//             await formAction(formData);
//         }
//         if (onClick) onClick();
//     };

//     return (
//         <StyledButton onClick={handleClick}>
//             {text}
//         </StyledButton>
//     );
// };