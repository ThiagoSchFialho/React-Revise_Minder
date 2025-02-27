import styled from 'styled-components';

export const Container = styled.div`
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Message = styled.h1`
    color: ${({theme}) => theme.text};
    font-size: 16pt;
    font-weight: 500;
    text-align: center;
`;