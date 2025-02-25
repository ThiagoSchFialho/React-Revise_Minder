import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Kanban from '../../components/Kanban/Kanban';
import Review from '../../components/Review/Review';
import { useDb } from '../../hooks/useDb';
import {
    MainContainer,
    SeparatorTitle,
    SeparatorLine,
    FutureReviewsContainer
} from './styles';

interface Review {
    id: number;
    topic: string;
    status: string;
    date: string;
    study_id: number;
    user_id: number;
}

const Dashboard: React.FC = () => {
    const { getReviews } = useDb();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [todaysReviews, setTodaysReviews] = useState<Review[]>([]);
    const [FutureReviews, setFutureReviews] = useState<Review[]>([]);
    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        const fetchReviews = async () => {
            setReviews(await getReviews());
        }
        fetchReviews();
    }, [])

    useEffect(() => {
        const futureReviews = reviews.filter((review) => {
            return new Date(review.date).setHours(0, 0, 0, 0) > new Date().setHours(0, 0, 0, 0);
        });

        const todaysReviews = reviews.filter((review) => {
            return new Date(review.date).toDateString() == new Date().toDateString();
        });
    
        setTodaysReviews(todaysReviews)
        setFutureReviews(futureReviews);
    }, [reviews]);

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