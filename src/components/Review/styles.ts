import styled from 'styled-components';

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

export const ReviewStatus = styled.div<{ status: string}>`
    padding: 5px 10px;
    margin: 0px 15px;
    background-color: ${(props) => {
        if (props.status === 'Realizada') {
            return '#80FFD1';
        } else if (props.status === 'Não Realizada') {
            return '#FF8080';
        } else {
            return '#80D1FF'
        }
    }};
    color: ${(props) => {
        if (props.status === 'Realizada') {
            return '#005B3B';
        } else if (props.status === 'Não Realizada') {
            return '#A30000';
        } else {
            return '#0069A3'
        }
    }};
    font-weight: 600;
    border-radius: 5px;
`;

export const ReviewDate = styled.div`
    border-left: 1px solid ${({theme}) => theme.border};
    color: ${({theme}) => theme.text};
    padding: 20px;
`;