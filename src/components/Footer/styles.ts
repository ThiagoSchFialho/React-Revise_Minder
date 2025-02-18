import styled from 'styled-components'

export const FooterContainer = styled.div`
    background-color: ${({theme}) => theme.secondBackground};
    border-top: 1px solid ${({theme}) => theme.border};
    padding: 40px;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3)
`;

export const Title = styled.h1`
    text-align: center;
    color: ${({theme}) => theme.text};
    font-size: 16pt;
    margin-bottom: 40px;
`;

export const SocialIcons = styled.div`
    width: fit-content;
    display: flex;
    margin: 0 auto;
    gap: 20px;
`;