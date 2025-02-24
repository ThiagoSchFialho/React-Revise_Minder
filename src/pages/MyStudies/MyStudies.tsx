import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Study from '../../components/Study/Study';
import {
    MainContainer,
    Title
} from './styles';

const mockStudies = [
    { id: '1', topic: 'TypeScript', qnt_reviews: 4, date: '23/01/25' },
    { id: '2', topic: 'React', qnt_reviews: 3, date: '24/01/25' },
    { id: '3', topic: 'Node.js', qnt_reviews: 5, date: '25/01/25' }
];

const MyStudies: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <MainContainer isMenuOpen={isMenuOpen}>
                <Title>Meus Estudos</Title>
                {mockStudies.map((study) => (
                    <Study key={study.id} {...study} />
                ))}
            </MainContainer>
        </>
    );
};

export default MyStudies;
