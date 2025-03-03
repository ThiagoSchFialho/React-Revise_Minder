import styled from 'styled-components'

export const MainContainer = styled.div`
    min-height: 100vh;
    padding: 150px 0 20px 0;
    background-color: ${({ theme }) => theme.background};

    @media (max-width: 1360px) {
        padding-top: 40px ;
    }
`;

export const FormContainer = styled.div`
    width: 430px;
    margin: 0 auto;
    padding: 30px 35px;
    background-color: ${({ theme }) => theme.secondBackground};
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 20px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);

    @media (max-width: 1360px) {
        padding: 30px;
    }
    
    @media (max-width: 768px) {
        width: 80%;
    }
`;

export const FormTitle = styled.h1`
    color: ${({ theme }) => theme.text};
    text-align: center;
    margin-bottom: 25px;

`;

export const InputContainer = styled.div``;

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

export const ForgotPassword = styled.a`
    display: block;
    margin-top: 10px;
    margin-left: 5px;
    color: ${({ theme }) => theme.text};
`;

export const SubmitButton = styled.button`
    margin-top: 75px;
    width: 100%;
    background-color: ${({theme}) => theme.mainColor};;
    padding: 10px 0;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 16pt;
    font-weight: 600;
    cursor: pointer;

    @media (max-width: 1360px) {
        margin-top: 50px;
    }
`;

export const SignUpContainer = styled.div`
    width: 300px;
    margin: 35px auto 0 auto;
    background-color: ${({ theme }) => theme.secondBackground};
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 5px;
    padding: 15px 30px;
    border: 1px solid ${({theme}) => theme.inputBorder};

    @media (max-width: 1360px) {
        margin: 20px auto 0 auto;
    }
`;

export const SignUpText = styled.p`
    color: ${({ theme }) => theme.text};
    text-align: center;

    u {
        color: ${({theme}) => theme.mainColor};;
        cursor: pointer;
    }
`;