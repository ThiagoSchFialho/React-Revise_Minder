import React from 'react'
import {
    ReviewContainer,
    ReviewTitle,
    ReviewInfoContainer,
    ReviewStatus,
    ReviewDate
} from './styles';

interface ReviewProps {
    id: number
    topic: string
    status: string
    date: string
    study_id: number
    user_id: number
}

const formatDate = (date: string) => {
    const d = new Date(date);
    const day = d.getDate().toString().padStart(2, "0");
    const month = (d.getMonth() + 1).toString().padStart(2, "0");
    const year = d.getFullYear().toString();

    return `${day}/${month}/${year}`;
}

const Review: React.FC<ReviewProps> = ({ topic, status, date }) => {

    const getStatus = () => {
        const currentDate = new Date();
        const reviewDate = new Date(date);
        
        if (reviewDate < currentDate) {
            if (status === 'done') {
                return 'Realizada';
            } else {
                return 'Não Realizada';
            }
        } else {
            return 'Pendente';
        }
    };

    return (
        <ReviewContainer>
            <ReviewTitle>{topic}</ReviewTitle>
            <ReviewInfoContainer>
                <ReviewStatus $status={getStatus()}>{getStatus()}</ReviewStatus>
                <ReviewDate>{formatDate(date)}</ReviewDate>
            </ReviewInfoContainer>
        </ReviewContainer>
    )
}

export default Review;
