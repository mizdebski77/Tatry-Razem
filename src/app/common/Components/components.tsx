import { StyledButton, StyledButtonLink } from "./styledComponents";

interface buttonLinkProps {
    text: string;
    href: string;
};

interface buttonProps {
    text: string;
    onClick: () => void;
};



export const ButtonLink: React.FC<buttonLinkProps> = ({ text, href }) => {
    return (
        <StyledButtonLink href={href}>
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

