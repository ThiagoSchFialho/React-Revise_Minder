import styled from 'styled-components'

export const DarkBackground = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    z-index: 10;
`;

export const CloseModalButton = styled.div`
    position: fixed;
    top: 10%;
    right: 15%;
    cursor: pointer;

    @media (max-width: 768px) {
        top: 5%;
        right: 2%;
    }
`;

export const ModalContainer = styled.div`
    width: 60%;
    height: 80%;
    margin: 5% auto;
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    overflow-y: auto;

     &::-webkit-scrollbar {
        width: 13px;
    }

    &::-webkit-scrollbar-track {
        background: #242533;
        border-radius: 0 10px 10px 0;
    }

    &::-webkit-scrollbar-thumb {
        background: ${({theme}) => theme.mainColor};;
        border-radius: 0 10px 10px 0;
    }

    &::-webkit-scrollbar-thumb:hover {
        background:rgb(17, 114, 184);
    }

    @media (max-width: 768px) {
        width: 75%;
        margin: 10% auto 5% auto;
    }
`;

export const Title1 = styled.h1`
    margin-bottom: 20px;

    @media (max-width: 768px) {
        font-size: 1em;
    }
`;

export const Title2 = styled.h2 `
    margin-bottom: 5px;

    @media (max-width: 768px) {
        font-size: 1em;
    }
`;

export const List = styled.ul`
    margin: 0 0 15px 17px;

    @media (max-width: 768px) {
        font-size: 1em;
    }
`;

export const Item = styled.li`
    margin-bottom: 5px;

    @media (max-width: 768px) {
        font-size: 1em;
    }
`;

export const Text = styled.p`
    margin: 0 0 15px 17px;

    @media (max-width: 768px) {
        font-size: 1em;
    }
`;