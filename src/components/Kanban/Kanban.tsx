import React, { useEffect, useState } from 'react';
import { useDb } from '../../hooks/useDb';
import {
    KanbanContainer,
    KanbanColumn,
    KanbanTitleContainer,
    KanbanTitle,
    KanbanContent,
    KanbanItem,
} from './styles';

interface Review {
    id: number;
    topic: string;
    status: string;
    date: string;
    study_id: number;
    user_id: number;
}

const Kanban: React.FC = () => {
    const { getReviews, updateReviewStatus } = useDb();
    const [reviews, setReviews] = useState<Review[]>([]);

    const fetchReviews = async () => {
        const reviews = await getReviews();

        const todaysReviews = reviews.filter((review: Review) => {
            return new Date(review.date).toDateString() == new Date().toDateString();
        });

        setReviews(todaysReviews);
    }

    useEffect(() => {
        fetchReviews();
    }, [])

    const onDragStart = (e: React.DragEvent<HTMLDivElement>, id: number) => {
        e.dataTransfer.setData('id', String(id));
        e.currentTarget.style.opacity = '0.5';
    };

    const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
        e.currentTarget.style.opacity = '1';
    };

    const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const onDrop = async (e: React.DragEvent<HTMLDivElement>, status: string) => {
        const id = e.dataTransfer.getData('id');

        setReviews((prevReviews) =>
            prevReviews.map((review) =>
                review.id === Number(id) ? { ...review, status } : review
            )
        );

        const review = await updateReviewStatus(Number(id), status);
        if (review) {
            fetchReviews();
        }
        
    };

    const KanbanCell: React.FC<{ title: string; status: 'todo' | 'doing' | 'done' }> = ({ title, status }) => {
        return (
            <KanbanColumn
                onDragOver={onDragOver}
                onDrop={(e) => onDrop(e, status)}
            >
                <KanbanTitleContainer>
                    <KanbanTitle>{title}</KanbanTitle>
                </KanbanTitleContainer>
                <KanbanContent status={status}>
                    {reviews.filter((review) => review.status === status).map((review) => (
                        <KanbanItem
                            key={review.id}
                            draggable
                            onDragStart={(e) => onDragStart(e, review.id)}
                            onDragEnd={onDragEnd}
                        >
                            {review.topic}
                        </KanbanItem>
                    ))}
                </KanbanContent>
            </KanbanColumn>
        )
    }

    return (
        <KanbanContainer>
            <KanbanCell title='Para fazer hoje' status='todo' />
            <KanbanCell title='Fazendo' status='doing' />
            <KanbanCell title='Feitas' status='done' />
        </KanbanContainer>
    );
};

export default Kanban;
