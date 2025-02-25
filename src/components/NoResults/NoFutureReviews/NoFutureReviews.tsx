import React from 'react';
import {
    Message,
    Container
} from './styles';

const NoFutureReviews: React.FC = () => {
    return (
        <Container>
            <Message>Nenhuma revisão programada ainda.</Message>
        </Container>
    )
}

export default NoFutureReviews;