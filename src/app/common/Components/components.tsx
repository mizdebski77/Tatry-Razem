import { InputInfo, StyledButtonLink, StyledInput } from "./styledComponents";

interface buttonLinkProps {
    text: string;
    href: string;
    background: string;
};

interface inputProps {
    placeHolder: string;
    type: string;
    errorinput: boolean;
    text: string;
}


export const ButtonLink: React.FC<buttonLinkProps> = ({ text, href, background }) => {
    return (
        <StyledButtonLink background={background} href={href}>
            {text}
        </StyledButtonLink>
    );
};


export const Input: React.FC<inputProps> = ({ placeHolder, type, errorinput, text }) => {
    return (
        <label>
            <InputInfo>{text}</InputInfo>
            <StyledInput
                errorinput={errorinput}
                placeholder={placeHolder}
                type={type}
            />
        </label>
    );


}

