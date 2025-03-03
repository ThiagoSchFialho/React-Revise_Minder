import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background-color: ${({ theme }) => theme.border};
  border-radius: 20px;
  padding: 0px 60px 30px 60px;
  box-shadow: ${({theme}) => theme.strongShadow};
  text-align: center;
`;

export const AchievementIcon = styled.img`
  width: 170px;
`;

export const Title = styled.h1`
  font-size: 20pt;
  color: ${({theme}) => theme.text};
  margin-bottom: 25px;
`;

export const AchievementText = styled.p`
  font-size: 16pt;
  font-weight: 500;
  color: ${({theme}) => theme.text};
  margin-bottom: 50px;
`;

export const Separator = styled.hr`
  color: ${({theme}) => theme.text};
  margin-bottom: 30px;
`;

export const Text = styled.p`
  font-size: 12pt;
  color: ${({theme}) => theme.text};
  margin-bottom: 50px;
`;

export const Button = styled.button`
  background-color: ${({theme}) => theme.mainColor};
  color: white;
  padding: 10px 20px;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  font-size: 14pt;
  cursor: pointer;
`;