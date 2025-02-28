import React from 'react';
import { useNavigate } from 'react-router-dom';
import NoStudiesSvg from '../../../assets/notStudies.svg';
import {
    Message,
    Container,
    NoStudiesImg,
    AddStudy
} from './styles';

const NoStudies: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Message>Nenhum estudo ainda.</Message>
            <NoStudiesImg src={NoStudiesSvg} alt="Sem estudos" />
            <AddStudy onClick={() => navigate('/studyForm')}>Adicionar estudo</AddStudy>
        </Container>
    )
}

export default NoStudies;