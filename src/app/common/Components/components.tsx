import { StyledButton, StyledButtonLink, StyledInput } from "./styledComponents";

interface buttonLinkProps {
    text: string;
    href: string;
    background: string;
};

interface buttonProps {
    text: string;
    onClick: () => void;
};

interface inputProps {
    placeHolder: string;
    type: string;
}


export const ButtonLink: React.FC<buttonLinkProps> = ({ text, href, background }) => {
    return (
        <StyledButtonLink background={background} href={href}>
            {text}
        </StyledButtonLink>
    );
};

export const Button: React.FC<buttonProps> = ({ text, onClick }) => {
    return (
        <StyledButton
            onClick={onClick}
        >
            {text}
        </StyledButton>
    );
};

export const Input: React.FC<inputProps> = ({ placeHolder, type }) => {
    return <StyledInput placeholder={placeHolder} type={type} />;

}
