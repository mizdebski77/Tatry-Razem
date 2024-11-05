import { styled } from 'styled-components';
import background from '../Images/FooterImages/footerBackground.jpg';

export const Wrapper = styled.footer`
    background-image: url(${background.src});
    background-position: center;
    background-size: cover;
    padding: 120px 80px;
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

`;

export const AppTextWrapper = styled.div`
    max-width: 800px;
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 32px;
`;

export const AppTextTitle = styled.text`
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
    display: flex;
    justify-content: space-evenly;
`;

export const ContentLogo = styled.span`
    font-size: 40px;
    color: white;
`;

export const SocialsWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`;

export const SocialLink = styled.img`
    
`;


