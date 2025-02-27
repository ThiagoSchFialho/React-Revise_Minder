import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Kanban from '../../components/Kanban/Kanban';
import Review from '../../components/Review/Review';
import Loading from '../../components/Loading/Loading';
import NoFutureReviews from '../../components/NoResults/NoFutureReviews/NoFutureReviews';
import NoReviewsToday from '../../components/NoResults/NoReviewsToday/NoReviewsToday';
import { useDb } from '../../hooks/useDb';
import { useNavigate } from 'react-router-dom';
import {
    MainContainer,
    TutorialCotainer,
    TutorialMessage,
    TutorialButton,
    SeparatorTitle,
    SeparatorLine,
    FutureReviewsContainer
} from './styles';

interface Study {
    id: number;
    topic: string;
    qnt_reviews: number;
    date: string;
    user_id: number;
}

interface Review {
    id: number;
    topic: string;
    status: string;
    date: string;
    study_id: number;
    user_id: number;
}

const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    const { getStudies, getReviews } = useDb();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [todaysReviews, setTodaysReviews] = useState<Review[]>([]);
    const [FutureReviews, setFutureReviews] = useState<Review[]>([]);
    const [reviews, setReviews] = useState<Review[]>([]);
    const [studies, setStudies] = useState<Study[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const [studiesData, reviewsData] = await Promise.all([getStudies(), getReviews()]);
            setStudies(studiesData);
            setReviews(reviewsData);
            setLoading(false);
        };

        fetchData();
    }, []);

    useEffect(() => {
        const todaysReviews = reviews.filter((review: Review) => {
            return new Date(review.date).toDateString() == new Date().toDateString();
        });

        const futureReviews = reviews.filter((review) => {
            return new Date(review.date).setHours(0, 0, 0, 0) > new Date().setHours(0, 0, 0, 0);
        });

        setTodaysReviews(todaysReviews);
        setFutureReviews(futureReviews);
    }, [reviews]);

    return (
        <>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <MainContainer isMenuOpen={isMenuOpen}>

                {todaysReviews.length > 0 ? (
                    <Kanban />

                ) : studies.length === 0 ? (
                    <TutorialCotainer>
                        <TutorialMessage>Adicione seu primeiro estudo e deixe nosso algoritmo calcular os momentos ideais para suas revisões.</TutorialMessage>
                        <TutorialButton onClick={() => navigate('/studyForm')}>Adicionar estudo</TutorialButton>
                    </TutorialCotainer>
                    
                ) : (
                    <NoReviewsToday />
                )}

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