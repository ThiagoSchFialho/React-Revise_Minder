import styled from 'styled-components';

export const MainContainer = styled.div`
    background-color: ${({ theme }) => theme.HomeBackground};
    padding-bottom: 80px;
    
    @media (max-width: 768px) {
        padding-bottom: 40px;
    }
`;

export const Banner = styled.div`
    height: 475px;
    background: linear-gradient(#1A97F0, #3CA6F1);
    
    @media (max-width: 768px) {
        height: auto;
        min-height: 400px;
    }
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 80px;
    
    @media (max-width: 768px) {
        padding: 20px;
        flex-direction: column;
        gap: 20px;
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    gap: 60px;
    
    @media (max-width: 768px) {
        gap: 30px;
        justify-content: center;
    }
`;

export const Logo = styled.h1`
    color: white;
    font-weight: 800;
    
    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

export const ThemeButton = styled.div`
    cursor: pointer;
`;

export const AuthContainer = styled.div`
    display: flex;
    gap: 15px;
    
    @media (max-width: 768px) {
        width: 100%;
        justify-content: center;
    }
`;

export const AuthButton = styled.button`
    padding: 10px 20px;
    border: 2px solid white;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.4);
    color: white;
    font-weight: 800;
    font-size: 16pt;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
    
    @media (max-width: 768px) {
        font-size: 14pt;
        padding: 8px 16px;
    }
`;

export const BannerTextContainer = styled.div`
    margin-top: 90px;
    color: white;
    
    @media (max-width: 768px) {
        margin-top: 40px;
        padding: 0 20px;
    }
`;

export const BannerTitle = styled.h1`
    text-align: center;
    font-weight: 600;
    
    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

export const BannerParagraph = styled.p`
    text-align: center;
    margin: 15px auto 0px auto;
    width: 40%;
    font-size: 14pt;
    
    @media (max-width: 768px) {
        width: 90%;
    }
`;

export const HowWorksContainer = styled.div`
    width: 995px;
    margin: -105px auto 0px auto;
    padding: 64px 72px;
    background-color: ${({theme}) => theme.secondBackground};
    border-radius: 20px;
    box-shadow: ${({theme}) => theme.bigShadow};
    
    @media (max-width: 768px) {
        margin: -50px auto 0px auto;
        width: 90%;
        padding: 32px 36px;
    }
`;

export const HowWorksTitle = styled.h1`
    font-weight: 600;
    font-size: 18pt;
    color: ${({theme}) => theme.text};
    text-align: center;
    
    @media (max-width: 768px) {
        font-size: 16pt;
    }
`;

export const HowWorksList = styled.ul`
    list-style: none;
    margin-top: 65px;
    position: relative;
    padding-left: 20px;
    
    @media (max-width: 768px) {
        margin-top: 40px;
        padding-left: 10px;
    }
`;

export const ItemTextContainer = styled.div``;

export const HowWorksItem = styled.li`
    position: relative;
    padding-left: 50px;
    display: flex;
    gap: 20px;
    margin-left: -15px;
    margin-bottom: 50px;

    &:before {
        content: '';
        position: absolute;
        left: 0;
        top: -4px;
        width: 30px;
        height: 30px;
        background-color: #09AD48;
        border-radius: 50%;
    }

    &:not(:last-child):after {
        content: '';
        position: absolute;
        left: 15px;
        top: 35px;
        width: 1px;
        height: 100%;
        background-color: #09AD48;
    }
    
    @media (max-width: 768px) {
        padding-left: 35px;
        margin-bottom: 30px;
        
        &:before {
            top: -2px;
            width: 24px;
            height: 24px;
        }

        &:not(:last-child):after {
        left: 12px;
        top: 30px;
        height: 90%;
    }
    }
`;

export const ItemTitle = styled.h2`
    font-weight: 600;
    font-size: 15pt;
    color: ${({theme}) => theme.text};
    
    @media (max-width: 768px) {
        font-size: 13pt;
    }
`;

export const ItemParagraph = styled.p`
    font-weight: 500;
    color: ${({theme}) => theme.secondText};
    margin: 20px 0px 0px 30px;
    
    @media (max-width: 768px) {
        margin: 15px 0px 0px 15px;
        font-size: 12pt;
    }
`;

export const Benefits = styled.div`
    margin: 95px auto 150px auto;
    width: 1200px;
    
    @media (max-width: 1280px) {
        width: 75%;
        margin: 60px auto 80px auto;
    }
`;

export const BenefitsTitle = styled.h2`
    margin-bottom: 60px;
    color: ${({theme}) => theme.text};
    text-align: center;
    font-size: 20pt;
    
    @media (max-width: 768px) {
        font-size: 18pt;
        margin-bottom: 40px;
    }
`;

export const BenefitsItemsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 90px;
    
    @media (max-width: 1280px) {
        justify-content: center;
        gap: 40px;
    }
`;

export const BenefitsItem = styled.div`
    position: relative;
    width: 525px; 
    height: 350px;
    padding: 40px;
    background: ${({theme}) => theme.gradientBackground};
    border: 1px solid ${({theme}) => theme.border};
    border-radius: 20px;
    box-shadow: ${({theme}) => theme.shadow};
    
    @media (max-width: 768px) {
        width: 100%;
        height: auto;
        min-height: 250px;
        padding: 25px;
    }
`;

export const BenefitsItemTitle = styled.h2`
    margin-bottom: 15px;
    color: ${({theme}) => theme.text};
    font-size: 17pt;
    font-weight: 600;
    
    @media (max-width: 768px) {
        font-size: 15pt;
    }
`;

export const BenefitsItemText = styled.p`
    color: ${({theme}) => theme.secondText};
    font-weight: 400;
    font-size: 12pt;
    width: 320px;
    
    @media (max-width: 768px) {
        width: 100%;
        font-size: 11pt;
    }
`;

export const BenefitsIcon = styled.img`
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 30px;
    
    @media (max-width: 768px) {
        width: 80px;
        height: auto;
        margin: 20px;
    }
`;

export const StartContainer = styled.div`
    width: fit-content;
    margin: 0 auto 25px auto;
    background-color: ${({theme}) => theme.contrastBackground};
    padding: 20px 30px;
    border-radius: 5px;
    
    @media (max-width: 768px) {
        width: 90%;
        padding: 15px 20px;
    }
`;

export const StartText = styled.p`
    color: ${({theme}) => theme.text};
    text-align: center;
    font-size: 18pt;
    font-weight: 600;
    
    @media (max-width: 768px) {
        font-size: 16pt;
    }
`;

export const Text = styled.p`
    color: ${({theme}) => theme.text};
    text-align: center;
    width: 700px;
    margin: 0 auto 100px auto;
    font-size: 18pt;
    
    @media (max-width: 768px) {
        width: 90%;
        font-size: 14pt;
        margin: 0 auto 60px auto;
    }
`;

export const StartButton = styled.button`
    display: block;
    background-color: ${({theme}) => theme.mainColor};;
    border: none;
    outline: none;
    color: white;
    font-size: 16pt;
    font-weight: 600;
    border-radius: 5px;
    padding: 20px 40px;
    margin: 0 auto;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: 0.3s;

    &:hover {
        box-shadow: 0 0 15px rgba(26, 151, 240, 0.8);
    }
    
    @media (max-width: 768px) {
        font-size: 14pt;
        padding: 15px 30px;
    }
`;