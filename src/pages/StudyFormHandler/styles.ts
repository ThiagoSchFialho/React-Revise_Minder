import styled from 'styled-components'

export const MainContainer = styled.div`
    background-color: ${({theme}) => theme.background};
    min-height: 100vh;
    padding-bottom: 50px;
    padding-top: 50px;

    @media (max-width: 1366px) {
        padding-top: 0;
    }
`;

export const FastFormbutton = styled.div<{ selected: boolean }>`
    position: absolute;
    right: 90px;
    top: 105px;
    display: flex;
    align-items: center;
    gap: 5px;
    border: 1px solid ${({theme}) => theme.mainColor};;
    background-color: ${(props) => props.selected ? ({theme}) => theme.mainColor : ''};
    color: ${(props) => props.selected ? 'white' : ({theme}) => theme.text};
    font-size: 15pt;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 500;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;

    @media (max-width: 1366px) {
        font-size: 13pt;
    }
`;

export const FormTitle = styled.h1`
    color: ${({ theme }) => theme.text};
    text-align: center;
    margin-bottom: 80px;

    @media (max-width: 1366px) {
        margin-bottom: 25px;
    }
`;