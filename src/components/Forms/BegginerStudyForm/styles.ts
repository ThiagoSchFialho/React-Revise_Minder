import styled from 'styled-components';

export const Error = styled.div`
    margin: 5px 0 -24px 0;
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

export const BegginerFormContainer = styled.div<{ $isLoading: boolean }>`
    width: 550px;
    margin: 0 auto;
    padding: 30px 50px 45px 50px;
    background-color: ${({ theme }) => theme.secondBackground};
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 20px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
    cursor: ${(props) => props.$isLoading ? 'progress' : 'default'};

    @media (max-width: 1360px) {
        width: 480px;
        padding: 20px 50px 30px 50px;
    }
`;

export const BegginerInputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 100%;
`;

export const ProgressContainer = styled.div`
    width: 85%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ProgressItem = styled.div<{ $status: string }>`
    position: relative;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background-color: ${(props) => props.$status === 'done' ? ({theme}) => theme.mainColor : ''};
    border: 1px solid ${({theme}) => theme.mainColor};
    font-weight: 600;
    font-size: 14pt;
    color: ${(props) => props.$status === 'done' ? '#FFFFFF' : ({theme}) => theme.text};

    &:not(:first-child):before {
        content: '';
        position: absolute;
        right: 50px;
        top: 20px;
        width: 110px;
        height: 1px;
        background-color: ${(props) => props.$status === 'done' ? ({theme}) => theme.mainColor : ({theme}) => theme.text};
    }

    @media (max-width: 1360px) {
        &:not(:first-child):before {
            width: 80px;
        }
    }
`;

export const BegginerInputWrapper = styled.div<{ $activeIndex: number }>`
    display: flex;
    transition: transform 0.3s ease-in-out;
    transform: translateX(${({ $activeIndex }) => `-${$activeIndex * 100}%`});
    width: 100%;
`;

export const BegginerInputContainer = styled.div`
    flex: 0 0 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: stretch;
`;

export const BegginerLabel = styled.label`
    display: block;
    font-size: 17pt;
    text-align: center;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
    margin: 50px auto 70px auto;
    max-width: 70%;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;

    @media (max-width: 1360px) {
        margin: 40px auto 40px auto;
        max-width: 80%;
    }
`;

export const BegginerInput = styled.input<{ $scheme?: string }>`
    width: 100%;    
    padding: 10px 15px;
    background-color: ${({ theme }) => theme.background};
    border: 1px solid ${({ theme }) => theme.inputBorder};
    border-radius: 5px;
    font-size: 15pt;
    padding: 10px 15px;
    outline: none;
    color: ${({ theme }) => theme.text};
    color-scheme: ${(props) => props.$scheme};
`;

export const BegginerNumberInputContainer = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.background};
    border: 1px solid ${({ theme }) => theme.inputBorder};
    border-radius: 5px;
    font-size: 15pt;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const BegginerNumberInput = styled.input`
    width: 25%;
    background-color: ${({ theme }) => theme.background};
    border: none;
    text-align: center;
    border-radius: 5px;
    font-size: 15pt;
    padding: 0px 15px;
    outline: none;
    color: ${({ theme }) => theme.text};
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 80px;

    @media (max-width: 1360px) {
        margin-top: 60px;
    }
`;

export const BackButton = styled.div`
    width: 40%;
    text-align: center;
    line-height: 40px;
    font-weight: 500;
    color: ${({theme}) => theme.text};
    border: 1px solid ${({theme}) => theme.mainColor};
    border-radius: 5px;
    cursor: pointer;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

export const NextButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 40%;
    text-align: center;
    line-height: 40px;
    font-weight: 500;
    background-color: ${({theme}) => theme.mainColor};
    color: white;
    border-radius: 5px;
    cursor: pointer;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

export const BegginerSubmitButton = styled.button<{ $isLoading: boolean }>`
    width: 170px;
    text-align: center;
    line-height: 40px;
    font-weight: 500;
    background-color: ${(props) => props.$isLoading ? 'rgb(17, 114, 184)' : ({theme}) => theme.mainColor};
    color: white;
    border: none;
    border-radius: 5px;
    cursor: ${(props) => props.$isLoading ? 'progress' : 'pointer'};
    font-size: 13pt;
`;