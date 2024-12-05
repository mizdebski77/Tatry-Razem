import { theme } from "@/app/core/StyledComponents/theme";
import { CircleX, } from "lucide-react";
import styled from "styled-components";
import { MdOutlineReportGmailerrorred } from "react-icons/md";

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    padding: 12px;
`;

export const Error = styled(MdOutlineReportGmailerrorred )`
    font-size: 40px;
    width: 280px;
    height: 280px;
    color: ${theme.palette.error};

    @media (max-width: ${theme.mediaQuery.mobileMd}) {
        width: 180px;
        height: 180px;
    };
`;

export const Title = styled.h1`
    font-size: 32px;
    font-weight: normal;
    text-align: center;

    @media (max-width: ${theme.mediaQuery.mobileMd}) {
        font-size: 24px;
    };
`;

export const ParagraphWrapper = styled.p`
    display: grid;
    gap: 20px;
    font-size: 24px;
    text-align: center;

    @media (max-width: ${theme.mediaQuery.mobileMd}) {
        font-size: 20px;
    };
`;

