import styled from 'styled-components'

export const MainContainer = styled.div<{ isMenuOpen?: boolean }>`
    background-color: ${({theme}) => theme.background};
    min-height: 100vh;
    padding-left: ${(props) => props.isMenuOpen ? '260px' : '88px'};
`;

export const SeparatorTitle = styled.h1`
    margin: 100px 0 0 20px;
    color: ${({theme}) => theme.text};
    font-size: 18pt;
    font-weight: 600
`;

export const SeparatorLine = styled.hr`
    margin: 5px 50px 70px 20px;
`;

export const FutureReviewsContainer = styled.div`
    padding: 0 50px 100px 20px;
`;

export const ReviewContainer = styled.div`
    background-color: ${({theme}) => theme.secondBackground};
    border: 1px solid ${({theme}) => theme.border};
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto 30px auto;
    box-shadow: ${({theme}) => theme.shadow};
`;

export const ReviewTitle = styled.div`
    color: ${({theme}) => theme.text};
    padding: 20px;
`;

export const ReviewInfoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const ReviewStatus = styled.div`
    padding: 5px 10px;
    margin: 0px 15px;
    background-color: #80D1FF;
    color: #0069A3;
    font-weight: 600;
    border-radius: 5px;
`;

export const ReviewDate = styled.div`
    border-left: 1px solid ${({theme}) => theme.border};
    color: ${({theme}) => theme.text};
    padding: 20px;
`;