import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FaHouse, FaFileCircleCheck, FaGraduationCap  } from "react-icons/fa6";
import { useTheme } from '../../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';
import {
    HeaderContainer,
    MenuContainer,
    Logo,
    UserContainer,
    AddStudy,
    ProfileButton,
    SideMenuContainer,
    MenuItemContainer,
    MenuItemText
} from './styles'

interface HeaderProps {
    isMenuOpen: boolean;
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
    const { theme } = useTheme();
    const navigate = useNavigate();

    return (
        <>
            <HeaderContainer>
                <MenuContainer>
                    <IoMenu onClick={() => setIsMenuOpen(!isMenuOpen)} style={{cursor: 'pointer'}} color={theme == 'light' ? '#171823' : 'white'} size={48}/>
                    <Logo onClick={() => navigate('/dashboard')}>Revise Minder</Logo>
                </MenuContainer>
                
                <UserContainer>
                    <AddStudy>
                        <IoMdAdd color={theme == 'light' ? '#171823' : 'white'} size={28}/>
                        Estudo
                    </AddStudy>
                    <ProfileButton>
                        <FaUserCircle color={theme == 'light' ? '#171823' : 'white'} size={48}/>
                    </ProfileButton>
                </UserContainer>
            </HeaderContainer>
            <SideMenuContainer isMenuOpen={isMenuOpen}>
                <MenuItemContainer onClick={() => navigate('/dashboard')}>
                    <FaHouse style={{cursor: 'pointer'}} color={theme == 'light' ? '#171823' : 'white'} size={32}/>
                    {isMenuOpen ? (
                        <MenuItemText>Início</MenuItemText>
                    ) : (<></>)}
                </MenuItemContainer>
                <MenuItemContainer onClick={() => navigate('/dashboard')}>
                    <FaGraduationCap style={{cursor: 'pointer'}} color={theme == 'light' ? '#171823' : 'white'} size={32}/>
                    {isMenuOpen ? (
                        <MenuItemText>Meus estudos</MenuItemText>
                    ) : (<></>)}
                </MenuItemContainer>
                <MenuItemContainer onClick={() => navigate('/dashboard')}>
                    <FaFileCircleCheck style={{cursor: 'pointer'}} color={theme == 'light' ? '#171823' : 'white'} size={32}/>
                    {isMenuOpen ? (
                        <MenuItemText>Revisões passadas</MenuItemText>
                    ) : (<></>)}
                </MenuItemContainer>
            </SideMenuContainer>
        </>
    )
}

export default Header