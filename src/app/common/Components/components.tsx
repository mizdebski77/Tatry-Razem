import { InputInfo, StyledButtonLink, StyledInput } from "./styledComponents";

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


}

