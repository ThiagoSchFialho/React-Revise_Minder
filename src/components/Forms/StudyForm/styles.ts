import styled from "styled-components";

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
`;

export const InputContainer = styled.div``;

export const Label = styled.label`
    display: block;
    font-size: 13pt;
    color: ${({ theme }) => theme.text};
    margin: 20px 0 8px 0;
`;

export const Input = styled.input<{ scheme?: string }>`
    width: 100%;
    background-color: ${({ theme }) => theme.background};
    border: 1px solid ${({ theme }) => theme.inputBorder};
    border-radius: 5px;
    font-size: 13pt;
    padding: 10px 15px;
    outline: none;
    color: ${({ theme }) => theme.text};
    color-scheme: ${(props) => props.scheme};
`;

export const Error = styled.div`
    color: red
`;

export const DateInputContainer = styled.div`
    display: flex;
    gap: 10px;
`;

export const TodayButton = styled.div<{ selected: boolean}>`
    display: inline-block;
    border: 1px solid ${({theme}) => theme.mainColor};;
    background-color: ${(props) => props.selected ? ({theme}) => theme.mainColor : ''};
    color: ${(props) => props.selected ? 'white' : ({theme}) => theme.text};
    font-size: 13pt;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 500;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
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