import { theme } from "@/app/core/StyledComponents/theme";
import { CircleX, } from "lucide-react";
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


export const Error = styled(CircleX)`
    font-size: 40px;
    width: 400px;
    height: 400px;
    color: ${theme.palette.error};
`;

export const Title = styled.h1`
    font-size: 44px;
    font-weight: normal;
    text-align: center;
`;

