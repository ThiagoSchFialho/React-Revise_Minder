import styled from 'styled-components';

export const Container = styled.div<{ $type: string }>`
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${(props) => props.$type === 'bad' ? '#FF8080' : '#80FFD1'};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    padding: 10px 20px;
    width: fit-content;
    border: 1px solid ${(props) => props.$type === 'bad' ? '#A30000' : '#006B45'};
    border-radius: 10px;
`;

export const Message = styled.h2<{ $type: string }>`
    text-align: center;
    font-size: 13pt;
    color: ${(props) => props.$type === 'bad' ? '#A30000' : '#006B45'}
`;