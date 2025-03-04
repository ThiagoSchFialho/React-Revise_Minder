import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Review from '../../components/Review/Review';
import Loading from '../../components/Loading/Loading';
import NoReviews from '../../components/NoResults/NoReviews/NoReviews';
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
        const pastReviews = reviews?.filter((review) => {
            if (new Date(review.date).toDateString() != new Date().toDateString()) {
                return new Date(review.date) < new Date();
            }
        });

        setPastReviews(pastReviews);
    }, [reviews])

    return (
        <>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <MainContainer $isMenuOpen={isMenuOpen}>
                <Title>Revisões passadas</Title>
                {loading ? (
                    <Loading />
                ) : pastReviews && pastReviews?.length > 0 ? (
                    <>
                        {pastReviews.map((review) => (
                    <Review key={review.id} {...review} />
                ))}
                    </>
                ) : (
                    <NoReviews />
                )}
                
            </MainContainer>
        </>
    );
};

export default PastReviews;
