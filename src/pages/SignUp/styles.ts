import styled from 'styled-components'

export const MainContainer = styled.div`
    min-height: 100vh;
    padding: 150px 0 20px 0;
    background-color: ${({theme}) => theme.background};

    @media (max-width: 1360px) {
        padding-top: 20px ;
    }
`;

export const FormContainer = styled.div`
    width: 430px;
    margin: 0 auto;
    padding: 10px 30px 30px 30px;
    background-color: ${({theme}) => theme.secondBackground};
    border: 1px solid ${({theme}) => theme.border};
    border-radius: 20px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);

    @media (max-width: 768px) {
        width: 80%;
    }
`;

export const FormTitle = styled.h1`
    color: ${({theme}) => theme.text};
    text-align: center;
    margin-bottom: 25px;

    @media (max-width: 1360px) {
        margin-bottom: 15px ;
    }
`;

export const InputContainer = styled.div``;

export const Label = styled.label`
    display: block;
    font-size: 13pt;
    color: ${({theme}) => theme.text};
    margin: 20px 0 8px 0;
`;

export const CheckboxLabel = styled.label`
    font-size: 13pt;
    color: ${({theme}) => theme.text};
    margin: 20px 0 8px 0;

    u {
        color: ${({theme}) => theme.mainColor};;
        cursor: pointer;
    }
`;

export const Input = styled.input`
    width: 100%;
    background-color: ${({theme}) => theme.background};
    border: 1px solid ${({theme}) => theme.inputBorder};
    border-radius: 5px;
    font-size: 13pt;
    padding: 10px 15px;
    outline: none;
    color: ${({theme}) => theme.text};
`;

export const CheckboxInput = styled.input`
    margin: 20px 10px 0 5px;
`;

export const Error = styled.div`
    color: red
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
        margin-top: 30px;
    }
`;

export const RedirectContainer = styled.div`
    width: 300px;
    margin: 35px auto 0 auto;
    background-color: ${({theme}) => theme.secondBackground};
    border: 1px solid ${({theme}) => theme.border};
    border-radius: 5px;
    padding: 15px 30px;
    border: 1px solid ${({theme}) => theme.inputBorder};

    @media (max-width: 1360px) {
        margin: 20px auto 0 auto;
    }
`;

export const RedirectText = styled.p`
    color: ${({theme}) => theme.text};
    text-align: center;

    u {
        color: ${({theme}) => theme.mainColor};;
        cursor: pointer;
    }
`;