import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Study from '../../components/Study/Study';
import NoStudies from '../../components/NoResults/NoStudies/NoStudies';
import Loading from '../../components/Loading/Loading';
import { useDb } from '../../hooks/useDb';
import Alert from '../../components/Alert/Alert';
import { useAlert } from '../../hooks/useAlert';
import { useLocation } from 'react-router-dom';
import Achievement from '../../components/Achievement/Achievement';
import {
    MainContainer,
    Title
} from './styles';

interface Study {
    id: number;
    topic: string;
    qnt_reviews: number;
    date: string;
    user_id: number;
}

const MyStudies: React.FC = () => {
    const location = useLocation();
    const { alert, showAlert } = useAlert();
    const { getStudies, getUser, addAchievement } = useDb();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [studies, setStudies] = useState<Study[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [achievementVisible, setAchievementVisible] = useState<boolean>(false);
    const [achievement, setAchievement] = useState<string | null>(null);
    const [reward, setReward] = useState<string | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            const user = await getUser();
            const achievementKey = 'first_study_achievement';
            const hasAchieved = localStorage.getItem(achievementKey);

            if (user.qnt_studies_added === 1 && !hasAchieved) {
                setAchievementVisible(true);
                setAchievement('Adicione seu primeiro estudo');
                setReward('Você desbloqueou o formulário rápido');
                await addAchievement('Adicione seu primeiro estudo', 'Você desbloqueou o formulário rápido');
                
                localStorage.setItem(achievementKey, 'true');
            }
        }
        fetchUser();
    }, []);

    const fetchStudies = async () => {
        setLoading(true);
        const data = await getStudies();
        setStudies(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchStudies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (location.state?.alertMessage) {
            showAlert(location.state.alertType, location.state.alertMessage);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.state]);

    return (
        <>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            {alert && <Alert type={alert.type} message={alert.message} />}
            {achievementVisible && (
                <Achievement
                    achievement={achievement ?? ''}
                    reward={reward ?? ''}
                    onClose={() => setAchievementVisible(false)}
                />
            )}
            <MainContainer $isMenuOpen={isMenuOpen}>
                <Title>Meus Estudos</Title>
                {loading ? (
                    <Loading />
                ) : studies && studies.length > 0 ? (
                    <>
                        {studies.map((study) => (
                            <Study
                                key={study.id}
                                {...study}
                                refresh={fetchStudies}
                                showAlert={showAlert}
                            />
                        ))}
                    </>
                ) : (
                    <NoStudies />
                )}
                
            </MainContainer>
        </>
    );
};

export default MyStudies;
