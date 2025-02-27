import React from 'react';
import {
    Message,
    Container
} from './styles';

const NoReviewsToday: React.FC = () => {
    return (
        <Container>
            <Message>Nenhuma revisão para hoje</Message>
        </Container>
    )
}

export default NoReviewsToday;