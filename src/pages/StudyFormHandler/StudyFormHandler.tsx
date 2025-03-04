import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header'
import { PiLightningFill } from "react-icons/pi";
import StudyForm from '../../components/Forms/StudyForm/StudyForm';
import BegginerForm from '../../components/Forms/BegginerStudyForm/BegginerStudyForm';
import { useDb } from '../../hooks/useDb';
import {
    MainContainer,
    FastFormbutton,
    FormTitle,
} from './styles';

const StudyFormHandler: React.FC = () => {
    const { id } = useParams<{ id?: string }>();
    const { getUser } = useDb();
    const [isFastFormSelected, setIsFastFormSelected] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [qntStudiesAdded, setQntStudiesAdded] = useState<number>(0);

    useEffect(() => {
        const fetchUser = async () => {
            const user = await getUser();
            console.log(user);
            setQntStudiesAdded(user.qnt_studies_added);
        }
        fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <MainContainer>
                <FormTitle>{id ? 'Editar' : 'Adicionar'} estudo</FormTitle>
                {!id && qntStudiesAdded > 0 && (
                    <FastFormbutton
                        selected={isFastFormSelected}
                        onClick={() => setIsFastFormSelected(!isFastFormSelected)}
                    >
                        <PiLightningFill size={24} />
                        Formulário rápido
                    </FastFormbutton>
                )}

                {isFastFormSelected || id ? (
                    <StudyForm id={id} />
                ) : (
                    <BegginerForm /> 
                )}
            </MainContainer>
        </>
    )
}

export default StudyFormHandler;