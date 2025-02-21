import React, { useState } from 'react';
import {
    KanbanContainer,
    KanbanColumn,
    KanbanTitleContainer,
    KanbanTitle,
    KanbanContent,
    KanbanItem,
} from './styles';

interface Review {
    id: string;
    title: string;
    status: 'todo' | 'doing' | 'done';
}

interface KanbanProps {
    data: Review[];
}

const Kanban: React.FC<KanbanProps> = ({ data }) => {
    const [reviews, setReviews] = useState<Review[]>(data);

    const onDragStart = (e: React.DragEvent<HTMLDivElement>, id: string) => {
        e.dataTransfer.setData('id', id);
        e.currentTarget.style.opacity = '0.5';
    };

    const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const onDrop = (e: React.DragEvent<HTMLDivElement>, status: 'todo' | 'doing' | 'done') => {
        const id = e.dataTransfer.getData('id');

        const updatedReviews = reviews.map((review) => {
            if (review.id === id) {
                return { ...review, status };
            }
            return review;
        });

        setReviews(updatedReviews);
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
                        >
                            {review.title}
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
