import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Review from '../../components/Review/Review';
import { useDb } from '../../hooks/useDb';
import {
    MainContainer,
    Title
} from './styles';

interface Review {
    id: number;
    topic: string;
    status: string;
    date: string;
    study_id: number;
    user_id: number;
}

const PastReviews: React.FC = () => {
    const { getReviews } = useDb();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [pastReviews, setPastReviews] = useState<Review[]>([]);
    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        const fetchReviews = async () => {
            setReviews(await getReviews());
        }
        fetchReviews();
    }, [])

    useEffect(() => {
        const pastReviews = reviews.filter((review) => {
            if (new Date(review.date).toDateString() != new Date().toDateString()) {
                return new Date(review.date) < new Date();
            }
        });

        setPastReviews(pastReviews);
    }, [reviews])

    return (
        <>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <MainContainer isMenuOpen={isMenuOpen}>
                <Title>Revisões passadas</Title>
                {pastReviews.map((review) => (
                    <Review key={review.id} {...review} />
                ))}
            </MainContainer>
        </>
    );
};

export default PastReviews;
