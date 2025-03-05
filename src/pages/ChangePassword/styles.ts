import styled from 'styled-components'

export const MainContainer = styled.div<{ $isMenuOpen?: boolean, $isLoading: boolean }>`
    background-color: ${({theme}) => theme.background};
    min-height: 100vh;
    padding-left: ${(props) => props.$isMenuOpen ? 'calc(360px + 10%)' : 'calc(188px + 10%)'};
    padding-right: 10%;
    padding-bottom: 50px;
    cursor: ${(props) => props.$isLoading ? 'progress' : 'default'};

    @media (max-width: 1366px) {
        padding-left: ${(props) => props.$isMenuOpen ? 'calc(260px + 10%)' : 'calc(88px + 10%)'};
    }
`;

export const Title = styled.h1`
    color: ${({theme}) => theme.text};
    text-align: center;
    margin-bottom: 40px;
`;

export const FormContainer = styled.div`
    width: 430px;
    margin: 0 auto;
    padding: 30px 35px;
    background-color: ${({ theme }) => theme.secondBackground};
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 20px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);

    @media (max-width: 1366px) {
        padding: 20px 30px;
    }
    
    @media (max-width: 768px) {
        width: 80%;
    }
`;

export const Label = styled.label`
    display: block;
    font-size: 13pt;
    color: ${({ theme }) => theme.text};
    margin: 20px 0 8px 0;
`;

export const Input = styled.input<{ $scheme?: string }>`
    width: 100%;
    background-color: ${({ theme }) => theme.background};
    border: 1px solid ${({ theme }) => theme.inputBorder};
    border-radius: 5px;
    font-size: 13pt;
    padding: 10px 15px;
    outline: none;
    color: ${({ theme }) => theme.text};
    color-scheme: ${(props) => props.$scheme};
`;

export const Error = styled.div`
    color: red
`;

export const SubmitButton = styled.button<{ $isLoading: boolean }>`
    margin-top: 75px;
    width: 100%;
    background-color: ${(props) => props.$isLoading ? 'rgb(17, 114, 184)' : ({theme}) => theme.mainColor};
    padding: 10px 0;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 16pt;
    font-weight: 600;
    cursor: ${(props) => props.$isLoading ? 'progress' : 'pointer'};

    @media (max-width: 1366px) {
        margin-top: 50px;
    }
`;