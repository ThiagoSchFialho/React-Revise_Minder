import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Study from '../../components/Study/Study';
import NoStudies from '../../components/NoResults/NoStudies/NoStudies';
import Loading from '../../components/Loading/Loading';
import { useDb } from '../../hooks/useDb';
import Alert from '../../components/Alert/Alert';
import { useAlert } from '../../hooks/useAlert';
import { useLocation } from 'react-router-dom';
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
    const { getStudies } = useDb();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [studies, setStudies] = useState<Study[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

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
