import React from 'react';
import Resting from '../../../assets/resting.svg';
import {
    Message,
    Container,
    NoReviewsImg
} from './styles';

const NoReviewsToday: React.FC = () => {
    return (
        <Container>
            <NoReviewsImg src={Resting} alt="Sem revisões hoje" />
            <Message>Nenhuma revisão para hoje</Message>
        </Container>
    )
}

export default NoReviewsToday;