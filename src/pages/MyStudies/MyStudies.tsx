import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Study from '../../components/Study/Study';
import NoStudies from '../../components/NoResults/NoStudies/NoStudies';
import Loading from '../../components/Loading/Loading';
import { useDb } from '../../hooks/useDb';
import {
    MainContainer,
    Title
} from './styles';

interface Study {
    id: number;
    topic: string;
    qnt_reviews: number;
    date: string;
    user_id: number;
}

const MyStudies: React.FC = () => {
    const { getStudies } = useDb();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [studies, setStudies] = useState<Study[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchStudies = async () => {
            setLoading(true);
            const data = await getStudies();
            setStudies(data);
            setLoading(false);
        };
    
        fetchStudies();
    }, []);

    return (
        <>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <MainContainer isMenuOpen={isMenuOpen}>
                <Title>Meus Estudos</Title>
                {loading ? (
                    <Loading />
                ) : studies && studies.length > 0 ? (
                    <>
                        {studies.map((study) => (
                            <Study key={study.id} {...study} />
                        ))}
                    </>
                ) : (
                    <NoStudies />
                )}
                
            </MainContainer>
        </>
    );
};

export default MyStudies;
