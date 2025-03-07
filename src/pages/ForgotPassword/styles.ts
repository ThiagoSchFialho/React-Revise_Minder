import styled from 'styled-components'

export const MainContainer = styled.div<{ $isLoading: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.background};
    cursor: ${(props) => props.$isLoading ? 'progress' : 'default'};
    min-height: 100vh;
`;

export const TextContainer = styled.div `

`;

export const Title = styled.h1`
    color: ${({theme}) => theme.text};
    text-align: center;
    margin-bottom: 30px;
`;

export const Text = styled.p`
    color: ${({theme}) => theme.secondText};
    text-align: center;
    margin-bottom: 60px;
`;

export const InputContainer = styled.div`
    width: 600px;
`;

export const Label = styled.label`
    display: block;
    font-size: 13pt;
    color: ${({ theme }) => theme.text};
    margin: 20px 0 8px 0;
`;

export const Input = styled.input<{ $scheme?: string }>`
    width: 100%;
    background-color: ${({ theme }) => theme.secondBackground};
    border: 1px solid ${({ theme }) => theme.inputBorder};
    border-radius: 5px;
    font-size: 13pt;
    padding: 10px 15px;
    outline: none;
    color: ${({ theme }) => theme.text};
    color-scheme: ${(props) => props.$scheme};
`;

export const SubmitButton = styled.button<{ $isLoading: boolean }>`
    display: block;
    margin: 0 auto;
    width: 30%;
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