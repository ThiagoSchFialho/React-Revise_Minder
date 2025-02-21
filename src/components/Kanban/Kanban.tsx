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

    return (
        <KanbanContainer>
            <KanbanColumn
                onDragOver={onDragOver}
                onDrop={(e) => onDrop(e, 'todo')}
            >
                <KanbanTitleContainer>
                    <KanbanTitle>Para fazer hoje</KanbanTitle>
                </KanbanTitleContainer>
                <KanbanContent status='todo'>
                    {reviews.filter((review) => review.status === 'todo').map((review) => (
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

            <KanbanColumn
                onDragOver={onDragOver}
                onDrop={(e) => onDrop(e, 'doing')}
            >
                <KanbanTitleContainer>
                    <KanbanTitle>Fazendo</KanbanTitle>
                </KanbanTitleContainer>
                <KanbanContent status='doing'>
                    {reviews.filter((review) => review.status === 'doing').map((review) => (
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

            <KanbanColumn
                onDragOver={onDragOver}
                onDrop={(e) => onDrop(e, 'done')}
            >
                <KanbanTitleContainer>
                    <KanbanTitle>Feitas</KanbanTitle>
                </KanbanTitleContainer>
                <KanbanContent status='done'>
                    {reviews.filter((review) => review.status === 'done').map((review) => (
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
        </KanbanContainer>
    );
};

export default Kanban;
