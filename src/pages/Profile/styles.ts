import styled from 'styled-components'

export const MainContainer = styled.div<{ $isMenuOpen?: boolean }>`
    background-color: ${({theme}) => theme.background};
    min-height: 100vh;
    padding-left: ${(props) => props.$isMenuOpen ? 'calc(360px + 10%)' : 'calc(188px + 10%)'};
    padding-right: 10%;
    padding-bottom: 50px;

    @media (max-width: 1360px) {
        padding-left: ${(props) => props.$isMenuOpen ? 'calc(260px + 10%)' : 'calc(88px + 10%)'};
    }
`;

export const Title = styled.h1`
    color: ${({theme}) => theme.text};
    text-align: center;
    margin-bottom: 80px;
`;

export const Label = styled.label`
    display: block;
    font-size: 13pt;
    color: ${({theme}) => theme.text};
    margin: 20px 0 8px 0;
`;

export const Input = styled.input`
    width: calc(100% - 110px);
    background-color: ${({theme}) => theme.secondBackground};
    border: 1px solid ${({theme}) => theme.border};
    font-size: 12pt;
    padding: 10px;
    margin-right: 20px;
    border-radius: 5px;
    outline: none;
    color: ${({theme}) => theme.text};
`;

export const SaveButton = styled.button`
    background-color: ${({theme}) => theme.secondBackground};
    border: 1px solid ${({theme}) => theme.border};
    font-size: 12pt;
    padding: 10px 20px;
    border-radius: 5px;
    color: ${({theme}) => theme.text};
    cursor: pointer;
`;

export const ChangePasswordButton = styled.button`
    background-color: ${({theme}) => theme.secondBackground};
    border: 1px solid ${({theme}) => theme.border};
    font-size: 12pt;
    padding: 10px 20px;
    margin-top: 30px;
    border-radius: 5px;
    color: ${({theme}) => theme.text};
    cursor: pointer;
`;

export const Separator = styled.hr`
    margin: 60px 0 40px 0;
`;

export const DeleteAccountContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: ${({theme}) => theme.secondBackground};
    border: 1px solid ${({theme}) => theme.border};
    padding: 30px 50px;
    margin-right: 20px;
    border-radius: 5px;
    outline: none;
    color: ${({theme}) => theme.text};
`;

export const TextContainer = styled.div`
    width: 70%;
`;

export const DeleteTitle = styled.h2`
    text-align: center;
    font-size: 16pt;
    font-weight: 400;
    color: ${({theme}) => theme.text};
    margin-bottom: 20px;
`;

export const DeleteText = styled.p`
    text-align: center;
    font-size: 14pt;
    font-weight: 600;
    color: ${({theme}) => theme.text};
`;

export const DeleteButton = styled.button`
    padding: 10px 20px;
    margin: 0px 15px;
    background-color: #FF8080;
    color: #A30000;
    border: 2px solid #A30000;
    font-size: 12pt;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
`;