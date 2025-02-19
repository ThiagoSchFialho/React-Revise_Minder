import styled from 'styled-components'

export const HeaderContainer = styled.div`
    background-color: ${({theme}) => theme.background}; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

export const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 80px;
`;

export const Logo = styled.h1`
    font-weight: 800;
    font-size: 18pt;
    color: ${({theme}) => theme.text};
    cursor: pointer;
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
    padding: 10px 20px;
    border: 1px solid ${({theme}) => theme.text};
    border-radius: 10px;
    color: ${({theme}) => theme.text};
    font-size: 16pt;
    font-weight: 600;
    cursor: pointer;
`;

export const ProfileButton = styled.div`
    cursor: pointer;
`;

export const SideMenuContainer = styled.div`
    background-color: ${({theme}) => theme.background};
    position: absolute;
    width: 88px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 60px;
    padding-top: 30px;
`;