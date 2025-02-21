import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Kanban from '../../components/Kanban/Kanban';
import {
    MainContainer,
    SeparatorTitle,
    SeparatorLine,
    FutureReviewsContainer,
    ReviewContainer,
    ReviewTitle,
    ReviewInfoContainer,
    ReviewStatus,
    ReviewDate
} from './styles';

const mockReviews = [
    { id: '1', title: 'Aprendendo TypeScript do Zero', status: 'todo' },
    { id: '2', title: 'Interfaces e Tipagens Avançadas', status: 'todo' },
    { id: '3', title: 'Refatorando Código JavaScript para TypeScript', status: 'doing' },
    { id: '4', title: 'Criando Tipos Dinâmicos', status: 'doing' },
    { id: '5', title: 'Testes Unitários com Jest e TypeScript', status: 'done' },
];


const Dashboard: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <MainContainer isMenuOpen={isMenuOpen}>

                <Kanban data={mockReviews}/>

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