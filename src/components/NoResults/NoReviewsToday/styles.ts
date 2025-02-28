import styled from 'styled-components';

export const Container = styled.div`
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
`;

export const Message = styled.h1`
    color: ${({theme}) => theme.text};
    font-size: 16pt;
    font-weight: 500;
    text-align: center;
`;

export const NoReviewsImg = styled.img`
    width: 200px;
`;