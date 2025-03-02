import styled from 'styled-components';

export const MainContainer = styled.div<{ $isMenuOpen?: boolean }>`
    background-color: ${({theme}) => theme.background};
    min-height: 100vh;
    padding-left: ${(props) => props.$isMenuOpen ? '260px' : '88px'};
    padding-bottom: 50px;
`;

export const Title = styled.h1`
    color: ${({theme}) => theme.text};
    text-align: center;
    margin-bottom: 80px;
`;