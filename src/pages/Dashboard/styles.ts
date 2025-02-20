import styled from 'styled-components'

export const MainContainer = styled.div<{ isMenuOpen?: boolean }>`
    background-color: ${({theme}) => theme.background};
    min-height: 100vh;
    padding-left: ${(props) => props.isMenuOpen ? '260px' : '88px'};
`;

export const KambanContainer = styled.div`
    padding: 50px 50px 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

export const KambanColumn = styled.div`
    width: calc(33% - 20px);
    background-color: ${({theme}) => theme.secondBackground};
    border: 1px solid ${({theme}) => theme.border};
    border-radius: 20px;
    box-shadow: ${({theme}) => theme.shadow};
`;

export const KambanTitleContainer = styled.div`
    border-bottom: 1px solid ${({theme}) => theme.border};
    padding: 20px 0;
`;

export const KambanTitle = styled.h2`
    text-align: center;
    color: ${({theme}) => theme.text};
    font-size: 14pt;
    font-weight: 500;
`;

export const KanbanContent = styled.div<{ status: string }>`
    padding: 15px 25px 80px 25px;
    min-height: 300px;

    & > div {
        background-color: ${(props) => {
            if (props.status === 'doing') {
                return 'rgba(26, 151, 240)';
            } else if (props.status === 'done') {
                return 'rgba(4, 140, 56)';
            } else {
                return 'rgba(161, 161, 161)';
            }
        }};
    }
`;

export const KanbanItem = styled.div<{ x: number; y: number }>`
    font-size: 12pt;
    font-weight: 400;
    color: #FFFFFF;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 10px;
    cursor: grab;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    
    &:active {
        cursor: grabbing;
        position: absolute;
        top: ${(props) => props.y}px;
        left: ${(props) => props.x}px;
        transform: translate(-50%, -50%);
        box-shadow: ${({theme}) => theme.strongShadow};
    }
`;

export const SeparatorTitle = styled.h1`
    margin: 100px 0 0 20px;
    color: ${({theme}) => theme.text};
    font-size: 18pt;
    font-weight: 600
`;

export const SeparatorLine = styled.hr`
    margin: 5px 50px 70px 20px;
`;

export const FutureReviewsContainer = styled.div`
    padding: 0 50px 100px 20px;
`;

export const ReviewContainer = styled.div`
    background-color: ${({theme}) => theme.secondBackground};
    border: 1px solid ${({theme}) => theme.border};
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto 30px auto;
    box-shadow: ${({theme}) => theme.shadow};
`;

export const ReviewTitle = styled.div`
    color: ${({theme}) => theme.text};
    padding: 20px;
`;

export const ReviewInfoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const ReviewStatus = styled.div`
    padding: 5px 10px;
    margin: 0px 15px;
    background-color: #80D1FF;
    color: #0069A3;
    font-weight: 600;
    border-radius: 5px;
`;

export const ReviewDate = styled.div`
    border-left: 1px solid ${({theme}) => theme.border};
    color: ${({theme}) => theme.text};
    padding: 20px;
`;