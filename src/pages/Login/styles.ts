import styled from 'styled-components'

export const MainContainer = styled.div`
    min-height: 100vh;
    padding: 150px 0 20px 0;
    background-color: #171823;

    @media (max-width: 1360px) {
        padding-top: 40px ;
    }
`;

export const FormContainer = styled.div`
    width: 430px;
    margin: 0 auto;
    padding: 60px 35px 30px 35px;
    background-color: #242533;
    border: 1px solid #2D2F3D;
    border-radius: 20px;

    @media (max-width: 1360px) {
        padding: 30px;
    }
`;

export const FormTitle = styled.h1`
    color: white;
    text-align: center;
    margin-bottom: 25px;

`;

export const InputContainer = styled.div``;

export const Label = styled.label`
    display: block;
    font-size: 14pt;
    color: white;
    margin: 20px 0 8px 0;
`;

export const Input = styled.input`
    width: 100%;
    background-color: #171823;
    border: 1px solid #2D2F3D;
    border-radius: 5px;
    font-size: 14pt;
    padding: 10px 15px;
    outline: none;
    color: white;
`;

export const Error = styled.div`
    color: red
`;

export const ForgotPassword = styled.a`
    display: block;
    margin-top: 10px;
    margin-left: 5px;
    color: white;
`;

export const SubmitButton = styled.button`
    margin-top: 75px;
    width: 100%;
    background-color: #1A97F0;
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
    background-color: #242533;
    border: 1px solid #2D2F3D;
    border-radius: 5px;
    padding: 15px 30px;

    @media (max-width: 1360px) {
        margin: 20px auto 0 auto;
    }
`;

export const SignUpText = styled.p`
    color: white;

    u {
        color: #1A97F0;
        cursor: pointer;
    }
`;