import React from 'react';
import checklist from '../../../assets/checklist.svg';
import {
    Message,
    Container,
    NoReviewsImg
} from './styles';

const NoReviews: React.FC = () => {
    return (
        <Container>
            <Message>Nenhuma revisão feita ainda.</Message>
            <NoReviewsImg src={checklist} alt='Sem revisões' />
        </Container>
    )
}

export default NoReviews;