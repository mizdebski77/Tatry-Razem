import { styled } from "styled-components";

export const Wrapper = styled.nav`
    padding: 32px;
    position: fixed;
    z-index: 10;
    top: 0;
    width: 100%;
    backdrop-filter: blur(10px);
`;

export const Link = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    font-size: 18px;
    color: white;
`;

export const LinkImage = styled.img`

`;