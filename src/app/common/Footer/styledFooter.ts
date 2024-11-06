import { styled } from "styled-components";
import background from '../Images/FooterImages/footerBackground.jpg';
import { theme } from "@/app/core/StyledComponents/theme";

export const Wrapper = styled.footer`
    background-image: url(${background.src});
    background-position: center;
    background-size: cover;
    padding: 120px 80px 40px;
    box-shadow:inset 0px -300px 303px 323px #000000;
`;

export const AppSection = styled.div`
    display: flex;
    grid-template-columns: 1fr 1fr;
    justify-content:center;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    gap: 20px;
`;

export const AppImage = styled.img`
    max-width: 280px;
    width: 100%;
    filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.2));
`;

export const AppTextWrapper = styled.div`
    max-width: 800px;
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 32px;
`;

export const AppTextTitle = styled.span`
    color: white;
    font-size: 64px;
`;

export const AppText = styled.p`
    font-size: 32px;
    color: white;
    font-weight: lighter;
    opacity: 0.9;
`;

export const AppStoresWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 40px;
`;

export const AppStore = styled.img`
    max-width: 200px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        transform: translateY(-4px);
    }
`;

export const Content = styled.div`
    padding: 120px 80px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 2px solid #aeaeae;
    max-width: 1920px;
    margin: 0 auto 40px;
`;

export const ContentLogo = styled.span`
    font-size: 40px;
    color: white;
`;

export const SocialsWrapper = styled.div`
    display: grid;
    justify-content: center;
    gap: 20px;
`;

export const SocialContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export const SocialLink = styled.img`
    max-width: 32px;
    cursor: pointer;
`;

export const LinksWrapper = styled.div`
    display: grid;
    gap: 20px;
`;

export const LinksTitle = styled.span`
    color: white;
    font-size: 28px;
    margin-bottom: 20px;
    text-align: center;
`;

export const Link = styled.a`
    color: #aeaeae;
    font-size: 20px;
    text-align: center;
`;

export const Creator = styled.p`
    color: white;
    text-align: center;
    color: #aeaeae;
    font-size: 20px;
`;


