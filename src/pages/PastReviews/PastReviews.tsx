import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Review from '../../components/Review/Review';
import {
    MainContainer,
    Title
} from './styles';

const mockReviews = [
    { id: '6', topic: 'Next.js', status: 'todo', date: '2024-02-10' },
    { id: '7', topic: 'Jest', status: 'done', date: '2024-02-15' },
    { id: '8', topic: 'Design Patterns', status: 'todo', date: '2024-02-20' },
    { id: '9', topic: 'Docker', status: 'doing', date: '2024-02-25' },
    { id: '10', topic: 'TypeORM', status: 'done', date: '2024-03-01' }
];


const PastReviews: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <MainContainer isMenuOpen={isMenuOpen}>
                <Title>Revisões passadas</Title>
                {mockReviews.map((review) => (
                    <Review key={review.id} {...review} />
                ))}
            </MainContainer>
        </>
    );
};

export default PastReviews;
