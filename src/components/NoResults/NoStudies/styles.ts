import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
`;

export const Message = styled.h1`
    color: ${({theme}) => theme.text};
    font-size: 20pt;
    text-align: center;
`;

export const AddStudy = styled.button`
    background-color: #1A97F0;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 16pt;
    font-weight: 600;
    cursor: pointer;
`;