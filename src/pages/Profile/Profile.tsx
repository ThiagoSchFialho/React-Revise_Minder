import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { Formik, Form } from 'formik';
import { useDb } from '../../hooks/useDb';
import { useAuth } from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import ConfirmDeleteAccountModal from '../../components/ConfirmDeleteAccountModal/ConfirmDeleteAccountModal';
import Alert from '../../components/Alert/Alert';
import { useAlert } from '../../hooks/useAlert';
import {
    MainContainer,
    Title,
    Label,
    Input,
    SaveButton,
    ChangePasswordButton,
    Separator,
    DeleteAccountContainer,
    TextContainer,
    DeleteTitle,
    DeleteText,
    DeleteButton
} from './styles';

const Profile: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { alert, showAlert } = useAlert();
    const { getUserEmail, sendVerificationEmailUpdate } = useDb();
    const { deleteAccount } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [initialValues, setIntialValues] = useState<{email: string}>({email: ''});
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (location.state?.alertMessage) {
            showAlert(location.state.alertType, location.state.alertMessage);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.state]);

    useEffect(() => {
        const fetchEmail = async () => {
            const email = await getUserEmail();
            setIntialValues(email);
        }
        fetchEmail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleUpdateEmail = async (values: {email: string}) => {
        const response = await sendVerificationEmailUpdate(initialValues.email, values.email);

        if (response?.error == 'Email indisponivel') {
            showAlert("bad", "Este e-mail já está em uso.", 4000);
            
        } else if (response?.error) {
            showAlert("bad", "Erro inesperado", 4000);

        } else {
            showAlert("good", `Link de verificação enviado para o email ${values.email}!`, 10000);
        }
    }

    const handleConfirm = async () => {
        setShowModal(false);
        await deleteAccount();
    };

    return (
        <>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            {alert && <Alert type={alert.type} message={alert.message} />}
            <MainContainer $isMenuOpen={isMenuOpen}>
                <Title>Meu perfil</Title>
                <Formik
                    initialValues={initialValues}
                    enableReinitialize={true}
                    onSubmit={(values) => handleUpdateEmail(values)}
                >
                    {({ values, handleChange }) => (
                        <Form>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                type='email'
                                name="email"
                                id="email"
                                onChange={handleChange}
                                value={values.email}
                            />
                            <SaveButton type="submit">Salvar</SaveButton>
                        </Form>
                    )}
                </Formik>
                <ChangePasswordButton onClick={() => navigate('/changePassword')}>Alterar Senha</ChangePasswordButton>

                <Separator />

                <DeleteAccountContainer>
                    <TextContainer>
                        <DeleteTitle>Se essa conta for excluida todos os dados serão excluidos.</DeleteTitle>
                        <DeleteText>Essa operação não pode ser desfeita.</DeleteText>
                    </TextContainer>
                    <DeleteButton onClick={() => setShowModal(true)}>Excluir conta</DeleteButton>
                    {showModal && (
                        <ConfirmDeleteAccountModal
                            title="Tem certeza que deseja excluir sua conta e todos os seus dados?"
                            message="Essa operação não pode ser desfeita!"
                            onConfirm={handleConfirm}
                            onCancel={() => setShowModal(false)}
                        />
                    )}
                </DeleteAccountContainer>
            </MainContainer>
        </>
    )
}

export default Profile;