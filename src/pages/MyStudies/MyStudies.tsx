import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Study from '../../components/Study/Study';
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

    useEffect(() => {
        const fetchStudies = async () => {
            setStudies(await getStudies());
        }
        fetchStudies();
    }, [])

    return (
        <>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <MainContainer isMenuOpen={isMenuOpen}>
                <Title>Meus Estudos</Title>
                {studies.map((study) => (
                    <Study key={study.id} {...study} />
                ))}
            </MainContainer>
        </>
    );
};

export default MyStudies;
