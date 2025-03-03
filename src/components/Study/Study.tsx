import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { IoIosMore } from "react-icons/io";
import { useTheme } from '../../contexts/ThemeContext';
import { useDb } from '../../hooks/useDb';
import {
    StudyContainer,
    StudyTitle,
    StudyInfoContainer,
    StudyInfo,
    StudyMore,
    ToggleMenu,
    ToggleMenuList,
    ToggleMenuItem
} from './styles';

interface StudyProps {
    id: number;
    topic: string;
    qnt_reviews: number;
    date: string;
    user_id: number;
    refresh: () => void;
    showAlert: (type: "good" | "bad", message: string, timeout?: number) => void;
}

const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: '2-digit' });
};


const Study: React.FC<StudyProps> = ({ id, topic, qnt_reviews, date, refresh, showAlert }) => {
    const { deleteStudy } = useDb();
    const { theme } = useTheme();
    const menuRef = useRef<HTMLDivElement | null>(null);
    const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
    const navigate = useNavigate();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const toggleMenu = (id: number | null) => {
        setOpenMenuIndex(openMenuIndex === id ? null : id);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                toggleMenu(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [toggleMenu]);

    const handleDelete = (id: number) => {
        const confirmation = confirm('Tem certeza que deseja excluir este estudo?')
        if (!id || !confirmation) return;

        try {
            showAlert("good", "Estudo removido com sucesso!");
            deleteStudy(id);
            refresh();

        } catch (error: unknown) {
            console.error('Erro ao remover estudo', error);
        }
    }

    return (
        <StudyContainer>
            <StudyTitle>{topic}</StudyTitle>
            <StudyInfoContainer>
                <StudyInfo>{qnt_reviews} Revisões</StudyInfo>
                <StudyInfo>{formatDate(date)}</StudyInfo>
                <StudyMore onClick={() => toggleMenu(id)}>
                    <IoIosMore color={theme == 'light' ? '#171823' : 'white'} size={32} />
                </StudyMore>
                {openMenuIndex === id && (
                    <ToggleMenu ref={menuRef}>
                        <ToggleMenuList>
                            <ToggleMenuItem onClick={() => navigate(`/studyform/${id}`)}>Editar</ToggleMenuItem>
                            <ToggleMenuItem onClick={() => handleDelete(id)}>Excluir</ToggleMenuItem>
                        </ToggleMenuList>
                    </ToggleMenu>
                )}
            </StudyInfoContainer>
        </StudyContainer>
    );
};

export default Study;