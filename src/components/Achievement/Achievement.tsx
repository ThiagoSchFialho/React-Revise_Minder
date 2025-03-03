import React from 'react';
import achievementIcon from '../../assets/achivement.svg';
import {
    ModalOverlay,
    ModalContainer,
    AchievementIcon,
    Title,
    AchievementText,
    Separator,
    Text,
    Button
} from './styles';

interface AchievementProps {
    achievement: string
    reward: string
    onClose: () => void;
}

const Achievement: React.FC<AchievementProps> = ({ achievement, reward, onClose }) => {
    return (
        <ModalOverlay>
            <ModalContainer>
                <AchievementIcon src={achievementIcon} alt="conquista" />
                <Title>Conquista</Title>
                <AchievementText>{achievement}</AchievementText>
                
                <Separator/>

                <Title>Recompensas</Title>
                <Text>{reward}</Text>
                <Button onClick={onClose}>Ok</Button>
            </ModalContainer>
        </ModalOverlay>
    )
}

export default Achievement;