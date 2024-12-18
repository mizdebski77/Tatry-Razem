import { theme } from '@/app/core/StyledComponents/theme';
import styled from 'styled-components'

export const Wrapper = styled.div`
    display: grid;
    gap: 64px;
`;

export const SectionWrapper = styled.div`
    margin-top: 40px;
    display: grid;
    gap: 20px;
    justify-content: center;
`;

export const SectionTitle = styled.span`
    font-size: 32px;
`;

export const FlagWrapper = styled.div`
    display: flex;
    gap: 80px;
    justify-content: center;
`;

export const FlagContainer = styled.div`
    display: grid;
    justify-content: center;
    background: none;
    border: none;
    gap: 12px;
    font-size: 20px;
`;

export const FlagIcon = styled.button`
    background: ${theme.palette.blue};
    padding: 20px;
    border-radius: 100%;
    width: 120px;
    height: 120px;
    border: none;
    margin: 0 auto;
`;

