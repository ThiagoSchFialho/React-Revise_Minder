import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Kanban from '../../components/Kanban/Kanban';
import Review from '../../components/Review/Review';
import {
    MainContainer,
    SeparatorTitle,
    SeparatorLine,
    FutureReviewsContainer
} from './styles';

interface Review {
    id: string
    topic: string
    status: string
    date: string
}

const mockReviews = [
    { id: '1', topic: 'TypeScript', status: 'todo', date: '2025/02/22' },
    { id: '2', topic: 'React', status: 'done', date: '2025/02/20' },
    { id: '3', topic: 'Node.js', status: 'todo', date: '2025/02/24' },
    { id: '4', topic: 'JavaScript Avançado', status: 'todo', date: '2026/02/01' },
    { id: '5', topic: 'GraphQL', status: 'todo', date: '2025/02/21' },
    { id: '6', topic: 'Next.js', status: 'done', date: '2025/02/21' },
    { id: '7', topic: 'Jest', status: 'done', date: '2025/02/21' },
    { id: '8', topic: 'Design Patterns', status: 'done', date: '2024/02/20' },
    { id: '9', topic: 'Docker', status: 'done', date: '2024/02/25' },
    { id: '10', topic: 'TypeORM', status: 'doint', date: '2024/03/01' }
];

const Dashboard: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [todaysReviews, setTodaysReviews] = useState<Review[]>([]);
    const [FutureReviews, setFutureReviews] = useState<Review[]>([]);

    useEffect(() => {    
        const futureReviews = mockReviews.filter((review) => {
            return new Date(review.date).setHours(0, 0, 0, 0) > new Date().setHours(0, 0, 0, 0);
        });

        const todaysReviews = mockReviews.filter((review) => {
            return new Date(review.date).toDateString() == new Date().toDateString();
        });
    
        setTodaysReviews(todaysReviews)
        setFutureReviews(futureReviews);
    }, []);

    return (
        <>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <MainContainer isMenuOpen={isMenuOpen}>

                <Kanban data={todaysReviews}/>

                <SeparatorTitle>Revisões futuras</SeparatorTitle>
                <SeparatorLine/>

                <FutureReviewsContainer>
                    {FutureReviews.map((review) => (
                        <Review key={review.id} {...review} />
                    ))}
                </FutureReviewsContainer>
            </MainContainer>
        </>
    )
}

export default Dashboard