'use client'
import { theme } from '@/app/core/StyledComponents/theme';
import Calendar from 'react-calendar';
import styled, { css } from 'styled-components'

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
    text-align: center;
`;

export const FlagWrapper = styled.div`
    display: flex;
    gap: 80px;
    justify-content: center;
`;

export const FlagContainer = styled.div<{ marked?: 1 | 0 }>`
    display: grid;
    justify-content: center;
    background: none;
    border: none;
    gap: 12px;
    font-size: 20px;
    opacity: 0.4;

    ${({ marked }) => marked && css`
        opacity: 1;
    `};
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

export const StyledCalendar = styled(Calendar)`
    border: none;
    background: #fafafa;
    max-width: 400px;
    padding: 12px;
    border-radius: 20px;

    .react-calendar__navigation__label {
        background: none;
        border: none;
        font-size: 20px;
        opacity: 0.9;
    }

    .react-calendar__navigation__next-button,
    .react-calendar__navigation__prev-button {
        border: none;
        font-size: 40px;
        color: ${theme.palette.blue};
        cursor: pointer;
        background: none;
        width: 60px;
    }

    .react-calendar__navigation__next2-button,
    .react-calendar__navigation__prev2-button {
        display: none;
    }

    .react-calendar__navigation {
        margin: 0 auto 20px;
        border: none;
        display: flex;
        justify-content: center;
        border-bottom: 1px solid #f2f2f2;
        padding-bottom: 20px;
    }
    .basicsInfo__StyledCalendar {
        background: red;
    }

    .react-calendar__month-view__days {
        margin-top: 20px;
    }

    .react-calendar__month-view__days__day--neighboringMonth {
        opacity: 0.3;
    }

    .react-calendar__tile {
        background: none;
        border: none;
        padding: 12px;
        font-size: 20px;
        border-radius: 5px;
        border: 1px solid white;

        &:hover {
            background-color: #e0e0e0;
            cursor: pointer;
        }
    }

    .react-calendar__tile--active {
        border: 1px solid ${theme.palette.blue};
        color: ${theme.palette.blue};
        background-color: none;
    }
`;

export const CalendarSpan = styled.span`
    background: ${theme.palette.blue};
    text-align: center;
    max-width: fit-content;
    margin: 0 auto;
    padding: 16px 20px;
    border-radius: 12px;
    font-size: 20px;
    color: ${theme.palette.white};
`;

