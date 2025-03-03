import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  width: 600px;
  background-color: ${({ theme }) => theme.secondBackground};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  text-align: center;
`;

export const ModalTitle = styled.h2`
  color: ${({ theme }) => theme.text};
  font-size: 16pt;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const ModalMessage = styled.p`
  color:rgb(204, 47, 47);
  font-size: 16pt;
  font-weight: 600;
  margin-bottom: 50px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
`;

export const CancelButton = styled.button`
  margin: 0 5px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 14pt;
  font-weight: bold;
  cursor: pointer;
  background-color: ${({theme}) => theme.mainColor};
  color: white;
`;

export const Button = styled.button`
  margin: 0 5px;
  padding: 10px 20px;
  border: 1px solid ${({theme}) => theme.mainColor};
  border-radius: 5px;
  font-size: 14pt;
  font-weight: bold;
  cursor: pointer;
  background-color: unset;
  color: ${({theme}) => theme.text};
`;