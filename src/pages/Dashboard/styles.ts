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

export const TutorialCotainer = styled.div`
    width: 70%;
    height: 80vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 90px;
`;

export const TutorialMessage = styled.p`
    font-weight: 600;
    font-size: 16pt;
    text-align: center;
    color: ${({theme}) => theme.text};
`;

export const TutorialButton = styled.button`
    background-color: #1A97F0;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 14pt;
    font-weight: 600;
    cursor: pointer;
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