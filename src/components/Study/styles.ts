import styled from 'styled-components';

export const StudyContainer = styled.div`
    background-color: ${({theme}) => theme.secondBackground};
    border: 1px solid ${({theme}) => theme.border};
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    margin: 0 auto 30px auto;
    box-shadow: ${({theme}) => theme.shadow};

    @media (max-width: 1366px) {
        width: 80%;
    }
`;

export const StudyTitle = styled.div`
    color: ${({theme}) => theme.text};
    padding: 20px;
`;

export const StudyInfoContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`;

export const StudyInfo = styled.div`
    border-left: 1px solid ${({theme}) => theme.border};
    color: ${({theme}) => theme.text};
    padding: 20px;
`;

export const StudyMore = styled.div`
    border-left: 1px solid ${({theme}) => theme.border};
    color: ${({theme}) => theme.text};
    padding: 13.5px 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const ToggleMenu = styled.div`
  z-index: 100;
  position: absolute;
  top: 80%;
  left: 80%;
  background-color: ${({ theme }) => theme.secondBackground};
  border: 1px solid ${({theme}) => theme.border};
  border-radius: 10px;
  box-shadow: ${({theme}) => theme.bigShadow};
`;

export const ToggleMenuList = styled.ul`
  list-style-type: none;
  padding: 5px 50px 5px 10px;
`;

export const ToggleMenuItem = styled.li`
  padding: 5px;
  margin: 3px;
  text-align: left;
  cursor: pointer;
  color: ${({theme}) => theme.text};
  display: flex;
  align-items: center;
  gap: 10px;
`;