import styled from 'styled-components'

export const MainContainer = styled.div`
    background-color: #171823;
    padding-bottom: 160px;
`;

export const Banner = styled.div`
    height: 475px;
    background: linear-gradient(#1A97F0, #3CA6F1)
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 80px;
`;

export const LogoContainer = styled.div`
    display: flex;
    gap: 60px;
`;

export const Logo = styled.h1`
    color: white;
    font-weight: 800
`;

export const ThemeButton = styled.div`
    cursor: pointer;
`;

export const AuthContainer = styled.div`
    display: flex;
    gap: 15px;
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
`;

export const BannerTextContainer = styled.div`
    margin-top: 90px;
    color: white;
`;

export const BannerTitle = styled.h1`
    text-align: center;
    font-weight: 600
`;

export const BannerParagraph = styled.p`
    text-align: center;
    margin: 15px auto 0px auto;
    width: 40%;
`;

export const HowWorksContainer = styled.div`
    width: 995px;
    margin: -105px auto 0px auto;
    padding: 64px 72px;
    background-color: #242533;
    border-radius: 20px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5)
`;

export const HowWorksTitle = styled.h1`
    font-weight: 600;
    font-size: 18pt;
    color: white;
    text-align: center;
`;

export const HowWorksList = styled.ul`
    list-style: none;
    margin-top: 65px;
    position: relative;
    padding-left: 20px;
`;

export const ItemTextContainer = styled.div`

`;

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
`;

export const ItemTitle = styled.h2`
    font-weight: 600;
    font-size: 15pt;
    color: white;
`;

export const ItemParagraph = styled.p`
    font-weight: 500;
    color: rgba(255, 255, 255, 0.7);
    margin: 20px 0px 0px 30px;
`;

export const Benefits = styled.div`
    margin: 95px auto 150px auto;
    width: 1200px;
`;

export const BenefitsTitle = styled.h2`
    margin-bottom :60px;
    color: white;
    text-align: center;
    font-size: 20pt;
`;

export const BenefitsItemsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 90px;
`;

export const BenefitsItem = styled.div`
    position: relative;
    width: 525px; 
    height: 350px;
    padding: 40px;
    background: linear-gradient(140deg, #242533, 65%, #11121C 100%);
    border: 1px solid #2D2F3D;
    border-radius: 20px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5)
`;

export const BenefitsItemTitle = styled.h2`
    margin-bottom: 15px;
    color: white;
    font-size: 17pt;
    font-weight: 600;
`;

export const BenefitsItemText = styled.p`
    color: rgba(255, 255, 255, 0.7);
    font-weight: 400;
    font-size: 12pt;
    width: 320px;
`;

export const BenefitsIcon = styled.img`
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 30px;
`;

export const StartContainer = styled.div`
    width: fit-content;
    margin: 0 auto 25px auto;
    background-color: #2D2F3E;
    padding: 20px 30px;
    border-radius: 5px;
`;

export const StartText = styled.p`
    color: white;
    text-align: center;
    font-size: 18pt;
    font-weight: 600
`;

export const Text = styled.p`
    color: white;
    text-align: center;
    width: 700px;
    margin: 0 auto 100px auto;
    font-size: 18pt;
`;

export const StartButton = styled.button`
    display: block;
    background-color: #1A97F0;
    border: none;
    outline: none;
    color: white;
    font-size: 16pt;
    font-weight: 600;
    border-radius: 5px;
    padding: 20px 40px;
    margin: 0 auto;
    cursor: pointer;
`;