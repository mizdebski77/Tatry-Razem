import { theme } from "@/app/core/StyledComponents/theme";
import { Loader2, } from "lucide-react";
import styled from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
`;

export const Spinner = styled(Loader2)`
    animation: spinner 2s linear infinite;
    font-size: 40px;
    width: 320px;
    height: 320px;
    color: ${theme.palette.blue};

    @media (max-width: ${theme.mediaQuery.mobileMd}) {
        width: 180px;
        height: 180px;
    };

    @keyframes spinner {
        0% {
        transform: rotate(0deg);
    }
        100% {
        transform: rotate(360deg);
    };
}`;

export const Title = styled.h1`
    font-size: 44px;
    font-weight: normal;
    text-align: center;
 
    @media (max-width: ${theme.mediaQuery.mobileMd}) {
        font-size: 24px;
    };
`;

