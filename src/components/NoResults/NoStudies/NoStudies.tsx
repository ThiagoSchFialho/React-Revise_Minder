import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Message,
    Container,
    AddStudy
} from './styles';

const NoStudies: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Message>Nenhum estudo ainda.</Message>
            <AddStudy onClick={() => navigate('/studyForm')}>Adicionar estudo</AddStudy>
        </Container>
    )
}

export default NoStudies;