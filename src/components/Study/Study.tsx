import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { IoIosMore } from "react-icons/io";
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
    id: string
    topic: string
    qntReviews: number
    date: string
}

const Study: React.FC<StudyProps> = ({ id, topic, qntReviews, date }) => {
    const menuRef = useRef<HTMLDivElement | null>(null);
    const [openMenuIndex, setOpenMenuIndex] = useState<string | null>(null);
    const navigate = useNavigate();

    const toggleMenu = (id: string | null) => {
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

    return (
        <StudyContainer>
            <StudyTitle>{topic}</StudyTitle>
            <StudyInfoContainer>
                <StudyInfo>{qntReviews} Revisões</StudyInfo>
                <StudyInfo>{date}</StudyInfo>
                <StudyMore onClick={() => toggleMenu(id)}>
                    <IoIosMore color="white" size={32} />
                </StudyMore>
                {openMenuIndex === id && (
                    <ToggleMenu ref={menuRef}>
                        <ToggleMenuList>
                            <ToggleMenuItem onClick={() => navigate(`/studyform/${id}`)}>Editar</ToggleMenuItem>
                            <ToggleMenuItem>Excluir</ToggleMenuItem>
                        </ToggleMenuList>
                    </ToggleMenu>
                )}
            </StudyInfoContainer>
        </StudyContainer>
    );
};

export default Study;