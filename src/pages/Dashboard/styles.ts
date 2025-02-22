import styled from 'styled-components'

export const MainContainer = styled.div<{ isMenuOpen?: boolean }>`
    background-color: ${({theme}) => theme.background};
    min-height: 100vh;
    padding-left: ${(props) => props.isMenuOpen ? '360px' : '188px'};
    padding-right: 100px;
    padding-bottom: 50px;

    @media (max-width: 1360px) {
        padding-left: ${(props) => props.isMenuOpen ? '260px' : '88px'};
        padding-right: 0px
    }
`;

export const SeparatorTitle = styled.h1`
    margin: 100px 0 0 20px;
    color: ${({theme}) => theme.text};
    font-size: 18pt;
    font-weight: 600
`;

export const SeparatorLine = styled.hr`
    margin: 5px 50px 70px 20px;

    @media (max-width: 1360px) {
        margin: 5px 50px 70px 20px;
    }
`;

export const FutureReviewsContainer = styled.div`
    padding: 0 50px 100px 20px;

    @media (max-width: 1360px) {
        padding: 0 50px 100px 20px;
    }
`;