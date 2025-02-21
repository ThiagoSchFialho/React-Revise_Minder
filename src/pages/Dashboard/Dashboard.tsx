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


const FutureReview: React.FC<FutureReviewProps> = ({ review }) => (
    <ReviewContainer>
    <ReviewTitle>{review.title}</ReviewTitle>
    <ReviewInfoContainer>
        <ReviewStatus>Pendente</ReviewStatus>
        <ReviewDate>{review.date}</ReviewDate>
    </ReviewInfoContainer>
    </ReviewContainer>
)

interface FutureReviewProps {
    review: { id: string; title: string; date: string }
}

const mockReviews = [
    { id: '1', title: 'Aprendendo TypeScript do Zero', status: 'todo' },
    { id: '2', title: 'Interfaces e Tipagens Avançadas', status: 'todo' },
    { id: '3', title: 'Refatorando Código JavaScript para TypeScript', status: 'doing' },
    { id: '4', title: 'Criando Tipos Dinâmicos', status: 'doing' },
    { id: '5', title: 'Testes Unitários com Jest e TypeScript', status: 'done' },
];

const mockFutureReviews = [
    { id: '1', title: 'Aprendendo TypeScript do Zero', date: '14/05/2025' },
    { id: '2', title: 'Interfaces e Tipagens Avançadas', date: '17/05/2025' },
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
                    {mockFutureReviews.map((review) => (
                        <FutureReview review={review} />
                    ))}
                </FutureReviewsContainer>
            </MainContainer>
        </>
    )
}

export default Dashboard