import React, { useEffect, useRef, useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FaHouse, FaFileCircleCheck, FaGraduationCap  } from "react-icons/fa6";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useTheme } from '../../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import {
    HeaderContainer,
    MenuContainer,
    Logo,
    UserContainer,
    AddStudy,
    ProfileButton,
    SideMenuContainer,
    MenuItemContainer,
    MenuItemText,
    ToggleMenu,
    ToggleMenuList,
    ToggleMenuItem
} from './styles';

interface HeaderProps {
    isMenuOpen: boolean;
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
    const { theme, toggleTheme } = useTheme();
    const { handleLogout } = useAuth();
    const navigate = useNavigate();
    const [isToggleMenuOpen, setIsToggleMenuOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsToggleMenuOpen(false);
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside)
        }
      }, []);

    return (
        <>
            <HeaderContainer>
                <MenuContainer>
                    <IoMenu onClick={() => setIsMenuOpen(!isMenuOpen)} style={{cursor: 'pointer'}} color={theme == 'light' ? '#171823' : 'white'} size={40}/>
                    <Logo onClick={() => navigate('/dashboard')}>Revise Minder</Logo>
                </MenuContainer>
                
                <UserContainer>
                    <AddStudy onClick={() => navigate('/studyForm')}>
                        <IoMdAdd color={theme == 'light' ? '#171823' : 'white'} size={25}/>
                        Estudo
                    </AddStudy>
                    <ProfileButton onClick={() => setIsToggleMenuOpen(true)}>
                        <FaUserCircle color={theme == 'light' ? '#171823' : 'white'} size={40}/>
                    </ProfileButton>
                    {isToggleMenuOpen && (
                        <ToggleMenu ref={menuRef}>
                            <ToggleMenuList>
                                <ToggleMenuItem onClick={() => navigate(`/profile`)}>Meu Perfil</ToggleMenuItem>
                                {theme === 'light' ? (
                                    <ToggleMenuItem onClick={toggleTheme}>
                                        Modo Escuro <MdOutlineDarkMode color='#171823' size={24} />
                                    </ToggleMenuItem>
                                ) : (
                                    <ToggleMenuItem onClick={toggleTheme}>
                                        Modo Claro <MdOutlineLightMode color='white' size={24} />
                                    </ToggleMenuItem>
                                )}                                
                                <ToggleMenuItem onClick={handleLogout}>Sair</ToggleMenuItem>
                            </ToggleMenuList>
                        </ToggleMenu>
                    )}
                </UserContainer>
            </HeaderContainer>
            <SideMenuContainer isMenuOpen={isMenuOpen}>
                <MenuItemContainer onClick={() => navigate('/dashboard')}>
                    <FaHouse style={{cursor: 'pointer'}} color={theme == 'light' ? '#171823' : 'white'} size={30}/>
                    {isMenuOpen ? (
                        <MenuItemText>Início</MenuItemText>
                    ) : (<></>)}
                </MenuItemContainer>
                <MenuItemContainer onClick={() => navigate('/myStudies')}>
                    <FaGraduationCap style={{cursor: 'pointer'}} color={theme == 'light' ? '#171823' : 'white'} size={30}/>
                    {isMenuOpen ? (
                        <MenuItemText>Meus estudos</MenuItemText>
                    ) : (<></>)}
                </MenuItemContainer>
                <MenuItemContainer onClick={() => navigate('/pastReviews')}>
                    <FaFileCircleCheck style={{cursor: 'pointer'}} color={theme == 'light' ? '#171823' : 'white'} size={30}/>
                    {isMenuOpen ? (
                        <MenuItemText>Revisões passadas</MenuItemText>
                    ) : (<></>)}
                </MenuItemContainer>
            </SideMenuContainer>
        </>
    )
}

export default Header