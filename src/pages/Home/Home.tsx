import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import RocketLight from '../../assets/rocket_light.svg';
import ClockLight from '../../assets/clock_light.svg';
import CalendarLight from '../../assets/calendar_light.svg';
import StarLight from '../../assets/star_light.svg';
import RocketDark from '../../assets/rocket.svg';
import ClockDark from '../../assets/clock.svg';
import CalendarDark from '../../assets/calendar.svg';
import StarDark from '../../assets/star.svg';
import {
    MainContainer,
    Banner,
    Header,
    LogoContainer,
    Logo,
    ThemeButton,
    AuthContainer,
    AuthButton,
    BannerTextContainer,
    BannerTitle,
    BannerParagraph,
    HowWorksContainer,
    HowWorksTitle,
    HowWorksList,
    ItemTextContainer,
    HowWorksItem,
    ItemTitle,
    ItemParagraph,
    Benefits,
    BenefitsTitle,
    BenefitsItemsContainer,
    BenefitsItem,
    BenefitsItemTitle,
    BenefitsItemText,
    BenefitsIcon,
    StartContainer,
    StartText,
    Text,
    StartButton
} from './styles'

const Home:React.FC = () => {
    const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <MainContainer>
            <Banner>
                <Header>
                    <LogoContainer>
                        <Logo>Revise Minder</Logo>
                        <ThemeButton onClick={toggleTheme}>
                            { theme === 'light' ? (
                                <MdOutlineDarkMode color='white' size={35} />
                            ) : (
                                <MdOutlineLightMode color='white' size={35}/>  
                            )}  
                        </ThemeButton> 
                    </LogoContainer>
                    
                    <AuthContainer>
                        <AuthButton onClick={() => navigate('login')}>Entrar</AuthButton>
                        <AuthButton onClick={() => navigate('/signUp')}>Cadastrar</AuthButton>
                    </AuthContainer>
                </Header>
                <BannerTextContainer>
                    <BannerTitle>Desbloqueie o maximo da sua memoria</BannerTitle>
                    <BannerParagraph>
                    Com Revise Minder, você terá todo o controle para maximizar sua produtividade e aprendizado.
                    </BannerParagraph>
                </BannerTextContainer>
            </Banner>
            <HowWorksContainer>
                <HowWorksTitle>Como Funciona</HowWorksTitle>
                <HowWorksList>
                    <HowWorksItem>
                        <ItemTextContainer>
                            <ItemTitle>1. Insira seus estudos</ItemTitle>
                            <ItemParagraph>Adicione as datas em que você estudou ou planeja estudar.</ItemParagraph>
                        </ItemTextContainer>
                    </HowWorksItem>
                    <HowWorksItem>
                        <ItemTextContainer>
                            <ItemTitle>2. Planejamento Automático</ItemTitle>
                            <ItemParagraph>Nosso sistema inteligente calculará automaticamente os melhores momentos para revisar o material.</ItemParagraph>
                        </ItemTextContainer>
                    </HowWorksItem>
                    <HowWorksItem>
                        <ItemTextContainer>
                            <ItemTitle>3. Acompanhe seu progresso</ItemTitle>
                            <ItemParagraph>Acompanhe seu progresso ao longo do tempo. Veja quais tópicos você domina e quais precisam de mais atenção.</ItemParagraph>
                        </ItemTextContainer>
                    </HowWorksItem>
                </HowWorksList>
            </HowWorksContainer>
            <Benefits>
                <BenefitsTitle>Benefícios</BenefitsTitle>
                <BenefitsItemsContainer>
                    <BenefitsItem>
                        <BenefitsItemTitle>Melhore a Retenção</BenefitsItemTitle>
                        <BenefitsItemText>Nossa abordagem de revisão espaçada é comprovada para melhorar a retenção de informações.</BenefitsItemText>
                        <BenefitsIcon src={theme === 'light' ? RocketLight : RocketDark} alt="Foguete" />
                    </BenefitsItem>

                    <BenefitsItem>
                        <BenefitsItemTitle>Economize Tempo</BenefitsItemTitle>
                        <BenefitsItemText>Elimine a preocupação de quando revisar. Nosso sistema faz o trabalho pesado por você.</BenefitsItemText>
                        <BenefitsIcon src={theme === 'light' ? ClockLight : ClockDark} alt="Relógio" />
                    </BenefitsItem>

                    <BenefitsItem>
                        <BenefitsItemTitle>Agendamento Flexível</BenefitsItemTitle>
                        <BenefitsItemText>Nosso sistema se adapta à sua programação. Mude as datas de estudo conforme necessário e continue recebendo um plano de revisão otimizado.</BenefitsItemText>
                        <BenefitsIcon src={theme === 'light' ? CalendarLight : CalendarDark} alt="Calendário" />
                    </BenefitsItem>

                    <BenefitsItem>
                        <BenefitsItemTitle>Simplicidade Intuitiva</BenefitsItemTitle>
                        <BenefitsItemText>Navegue pelo nosso site de forma fácil e intuitiva. Não é necessário ser um expert em tecnologia para aproveitar todos os benefícios.</BenefitsItemText>
                        <BenefitsIcon src={theme === 'light' ? StarLight : StarDark} alt="Estrela" />
                    </BenefitsItem>
                </BenefitsItemsContainer>
            </Benefits>

            <StartContainer>
                <StartText>Comece a aproveitar ao máximo o seu tempo de estudo!</StartText>
            </StartContainer>
            <Text>Crie uma conta gratuita e coloque Revise Minder para trabalhar por você.</Text>

            <StartButton onClick={() => navigate('/signUp')}>Começar agora</StartButton>
        </MainContainer>
    )
}

export default Home