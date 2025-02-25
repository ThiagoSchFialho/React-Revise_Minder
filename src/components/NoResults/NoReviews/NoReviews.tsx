import React from 'react';
import {
    Message,
    Container
} from './styles';

const NoReviews: React.FC = () => {
    return (
        <Container>
            <Message>Você ainda não teve revisões para fazer.</Message>
        </Container>
    )
}

export default NoReviews;