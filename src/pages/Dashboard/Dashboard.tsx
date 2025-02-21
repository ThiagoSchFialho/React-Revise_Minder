import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Kanban from '../../components/Kanban/Kanban';
import Review from '../../components/Review/Review';
import {
    MainContainer,
    SeparatorTitle,
    SeparatorLine,
    FutureReviewsContainer
} from './styles';

const mockReviews = [
    { id: '1', title: 'Aprendendo TypeScript do Zero', status: 'todo' },
    { id: '2', title: 'Interfaces e Tipagens Avançadas', status: 'todo' },
    { id: '3', title: 'Refatorando Código JavaScript para TypeScript', status: 'doing' },
    { id: '4', title: 'Criando Tipos Dinâmicos', status: 'doing' },
    { id: '5', title: 'Testes Unitários com Jest e TypeScript', status: 'done' },
];

const mockFutureReviews = [
    { id: '1', topic: 'TypeScript', status: 'todo', date: '2026-01-23' },
    { id: '2', topic: 'React', status: 'todo', date: '2026-01-24' },
    { id: '3', topic: 'Node.js', status: 'todo', date: '2026-01-25' },
    { id: '4', topic: 'JavaScript Avançado', status: 'todo', date: '2026-02-01' },
    { id: '5', topic: 'GraphQL', status: 'todo', date: '2026-02-05' },
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
                        <Review key={review.id} {...review} />
                    ))}
                </FutureReviewsContainer>
            </MainContainer>
        </>
    )
}

export default Dashboard