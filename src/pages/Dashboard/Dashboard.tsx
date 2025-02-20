import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import {
    MainContainer,
    KambanContainer,
    KambanColumn,
    KambanTitleContainer,
    KambanTitle,
    KanbanContent,
    KanbanItem,
    SeparatorTitle,
    SeparatorLine,
    FutureReviewsContainer,
    ReviewContainer,
    ReviewTitle,
    ReviewInfoContainer,
    ReviewStatus,
    ReviewDate
} from './styles'

const Dashboard: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        setCoords({
            x: e.pageX,
            y: e.pageY
        });
    };

    return (
        <>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <MainContainer isMenuOpen={isMenuOpen}>
                <KambanContainer onMouseMove={handleMouseMove}>
                    <KambanColumn>
                        <KambanTitleContainer>
                            <KambanTitle>Para fazer hoje</KambanTitle>
                        </KambanTitleContainer>
                        <KanbanContent status='toDo'>
                            <KanbanItem x={coords.x} y={coords.y}>TypeScript 1</KanbanItem>
                            <KanbanItem x={coords.x} y={coords.y}>TypeScript 2</KanbanItem>
                            <KanbanItem x={coords.x} y={coords.y}>TypeScript 3</KanbanItem>
                            <KanbanItem x={coords.x} y={coords.y}>TypeScript 4</KanbanItem>
                        </KanbanContent>
                    </KambanColumn>

                    <KambanColumn>
                        <KambanTitleContainer>
                            <KambanTitle>Fazendo</KambanTitle>
                        </KambanTitleContainer>
                        <KanbanContent status='doing'>
                            <KanbanItem x={coords.x} y={coords.y}>TypeScript 1</KanbanItem>
                            <KanbanItem x={coords.x} y={coords.y}>TypeScript 2</KanbanItem>
                            <KanbanItem x={coords.x} y={coords.y}>TypeScript 3</KanbanItem>
                            <KanbanItem x={coords.x} y={coords.y}>TypeScript 4</KanbanItem>
                        </KanbanContent>
                    </KambanColumn>

                    <KambanColumn>
                        <KambanTitleContainer>
                            <KambanTitle>Feitas</KambanTitle>
                        </KambanTitleContainer>
                        <KanbanContent status='done'>
                            <KanbanItem x={coords.x} y={coords.y}>TypeScript 1</KanbanItem>
                            <KanbanItem x={coords.x} y={coords.y}>TypeScript 2</KanbanItem>
                            <KanbanItem x={coords.x} y={coords.y}>TypeScript 3</KanbanItem>
                            <KanbanItem x={coords.x} y={coords.y}>TypeScript 4</KanbanItem>
                        </KanbanContent>
                    </KambanColumn>
                </KambanContainer>

                <SeparatorTitle>Revisões futuras</SeparatorTitle>
                <SeparatorLine/>

                <FutureReviewsContainer>
                    <ReviewContainer>
                    <ReviewTitle>TypeScript</ReviewTitle>
                    <ReviewInfoContainer>
                        <ReviewStatus>Pendente</ReviewStatus>
                        <ReviewDate>14/05/2025</ReviewDate>
                    </ReviewInfoContainer>
                    </ReviewContainer>

                    <ReviewContainer>
                    <ReviewTitle>TypeScript</ReviewTitle>
                    <ReviewInfoContainer>
                        <ReviewStatus>Pendente</ReviewStatus>
                        <ReviewDate>14/05/2025</ReviewDate>
                    </ReviewInfoContainer>
                    </ReviewContainer>
                </FutureReviewsContainer>
            </MainContainer>
        </>
    )
}

export default Dashboard