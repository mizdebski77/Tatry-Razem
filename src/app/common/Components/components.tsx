import { InputInfo, StyledButton, StyledButtonLink, StyledInput } from "./styledComponents";

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

interface buttonProps {
    text: string;
    onClick?: () => void;
    formAction?: (formData: FormData) => Promise<void>;
}

export const ButtonLink: React.FC<buttonLinkProps> = ({ text, href, background }) => {
    return (
        <StyledButtonLink background={background} href={href}>
            {text}
        </StyledButtonLink>
    );
};


export const Input: React.FC<inputProps> = ({ placeHolder, type, text, name, required, isError }) => {
    return (
        <label>
            <InputInfo>{text}</InputInfo>
            <StyledInput
                required={required}
                placeholder={placeHolder}
                name={name}
                type={type}
                errorinput={isError}
            />
        </label>
    );
};


export const Button: React.FC<buttonProps> = ({ text, onClick, formAction }) => {
    const handleClick = async () => {
        if (formAction) {
            const formData = new FormData();
            // Tutaj można pobrać i dodać dane formularza, jeśli są potrzebne
            await formAction(formData);
        }
        if (onClick) onClick();
    };

    return (
        <StyledButton onClick={handleClick}>
            {text}
        </StyledButton>
    );
};