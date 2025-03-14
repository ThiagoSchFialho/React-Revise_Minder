import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { useTheme } from '../../contexts/ThemeContext';
import {
    FooterContainer,
    Title,
    SocialIcons
} from './styles'

const Footer: React.FC = () => {
    const { theme } = useTheme();

    return (
        <FooterContainer>
            <Title>Site desenvolvido por <u>Thiago Scheffer Fialho</u> com React.</Title>
                <SocialIcons>
                    <a target='blank' href="https://github.com/ThiagoSchFialho">
                        <FaGithub color={theme == 'light' ? '#171823' : 'white'} size={'40px'}/>
                    </a>
                    <a target='blank' href="https://www.linkedin.com/in/thiago-scheffer-fialho-596630198">
                        <FaLinkedin color={theme == 'light' ? '#171823' : 'white'}size={'40px'}/>
                    </a>
                </SocialIcons>
            
        </FooterContainer>
    )
}

export default Footer