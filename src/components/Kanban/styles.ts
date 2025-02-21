import styled from 'styled-components'

export const KanbanContainer = styled.div`
    padding: 50px 50px 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

export const KanbanColumn = styled.div`
    width: calc(33% - 20px);
    background-color: ${({theme}) => theme.secondBackground};
    border: 1px solid ${({theme}) => theme.border};
    border-radius: 20px;
    box-shadow: ${({theme}) => theme.shadow};
`;

export const KanbanTitleContainer = styled.div`
    border-bottom: 1px solid ${({theme}) => theme.border};
    padding: 20px 0;
`;

export const KanbanTitle = styled.h2`
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
                return '#1A97F0';
            } else if (props.status === 'done') {
                return '#048C38';
            } else {
                return '#6E6E70';
            }
        }};
    }
`;

export const KanbanItem = styled.div`
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
`;