import { styled } from "styled-components";

export const Wrapper = styled.nav`
    padding: 28px;
    position: fixed;
    z-index: 10;
    top: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4px);
`;

export const Link = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    font-size: 18px;
    color: white;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
        transform: translateY(-4px);
    }
`;

export const LinkImage = styled.img`

`;