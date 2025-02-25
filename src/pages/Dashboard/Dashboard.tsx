import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Kanban from '../../components/Kanban/Kanban';
import Review from '../../components/Review/Review';
import Loading from '../../components/Loading/Loading';
import NoFutureReviews from '../../components/NoResults/NoFutureReviews/NoFutureReviews';
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
    const [FutureReviews, setFutureReviews] = useState<Review[]>([]);
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchStudies = async () => {
            setLoading(true);
            const data = await getReviews();
            setReviews(data);
            setLoading(false);
        };
    
        fetchStudies();
    }, []);

    useEffect(() => {
        const futureReviews = reviews.filter((review) => {
            return new Date(review.date).setHours(0, 0, 0, 0) > new Date().setHours(0, 0, 0, 0);
        });

        setFutureReviews(futureReviews);
    }, [reviews]);

    return (
        <>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <MainContainer isMenuOpen={isMenuOpen}>

                <Kanban/>

                <SeparatorTitle>Revisões futuras</SeparatorTitle>
                <SeparatorLine/>

                <FutureReviewsContainer>
                    {loading ? (
                        <Loading />
                    ) : FutureReviews && FutureReviews.length > 0 ? (
                        <>
                            {FutureReviews.map((review) => (
                                <Review key={review.id} {...review} />
                            ))}
                        </>
                    ) : (
                        <NoFutureReviews />
                    )}
                </FutureReviewsContainer>
            </MainContainer>
        </>
    )
}

export default Dashboard