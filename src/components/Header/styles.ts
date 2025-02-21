import styled from 'styled-components'

export const HeaderContainer = styled.div`
    background-color: ${({theme}) => theme.background}; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
`;

export const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
`;

export const Logo = styled.h1`
    font-weight: 800;
    font-size: 18pt;
    color: ${({theme}) => theme.text};
    cursor: pointer;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

export const UserContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`;

export const AddStudy = styled.button`
    background-color: rgba(255, 255, 255, 0.2); 
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 5px 10px;
    border: 1px solid ${({theme}) => theme.text};
    border-radius: 10px;
    color: ${({theme}) => theme.text};
    font-size: 14pt;
    font-weight: 600;
    cursor: pointer;
`;

export const ProfileButton = styled.div`
    cursor: pointer;
`;

export const SideMenuContainer = styled.div<{ isMenuOpen?: boolean }>`
    background-color: ${({theme}) => theme.background};
    position: absolute;
    width: ${(props) => props.isMenuOpen ? '260px' : '88px' };
    justify-content: center;
    gap: 60px;
    padding: 30px 26px;
`;

export const MenuItemContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 50px;
    cursor: pointer;
`;

export const MenuItemText = styled.p`
    color: ${({theme}) => theme.text};
    font-weight: 500;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

export const ToggleMenu = styled.div`
  z-index: 100;
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: ${({ theme }) => theme.secondBackground};
  border: 1px solid ${({theme}) => theme.border};
  border-radius: 10px;
  box-shadow: ${({theme}) => theme.bigShadow};
`;

export const ToggleMenuList = styled.ul`
  list-style-type: none;
  padding: 5px 50px 5px 10px;
`;

export const ToggleMenuItem = styled.li`
  padding: 5px;
  margin: 3px;
  text-align: left;
  cursor: pointer;
  color: ${({theme}) => theme.text};
  display: flex;
  align-items: center;
  gap: 10px;
`;