import styled from 'styled-components';


export const Container = styled.div<{ $type: string }>`
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${(props) => props.$type === 'bad' ? '#FF8080' : '#80FFD1'};
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;
    width: 400px;
    border: 1px solid ${(props) => props.$type === 'bad' ? '#A30000' : '#006B45'};
    border-radius: 10px;
    transition: 3s;
`;

export const Message = styled.h2<{ $type: string }>`
    font-size: 16pt;
    color: ${(props) => props.$type === 'bad' ? '#A30000' : '#006B45'}
`;