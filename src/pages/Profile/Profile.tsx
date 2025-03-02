import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { Formik, Form } from 'formik';
import { useDb } from '../../hooks/useDb';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import ConfirmModal from '../../components/ConfirmModal/ConfirmModal';
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
    const navigate = useNavigate();
    const { getUserEmail, updateEmail } = useDb();
    const { deleteAccount } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [initialValues, setIntialValues] = useState<{email: string}>({email: ''});
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchEmail = async () => {
            const email = await getUserEmail();
            setIntialValues(email);
        }
        fetchEmail();
    }, [])

    const handleUpdateEmail = async (values: {email: string}) => {
        const response = await updateEmail(values)

        if (response) {
            alert('Email alterado com sucesso');
        }
    }

    // const handleDeleteAccount = async () => {
    //     const confirmation = confirm('Tem certeza que deseja excluir sua conta e todos os seus dados?');

    //     if (!confirmation) return

    //     await deleteAccount();
    // }

    const handleDeleteAccount = async () => {
        setShowModal(true);
    };

    const handleConfirm = async () => {
        setShowModal(false);
        await deleteAccount();
    };

    const handleCancel = () => {
        setShowModal(false);
    };

    return (
        <>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
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
                    <DeleteButton onClick={handleDeleteAccount}>Excluir conta</DeleteButton>
                    {showModal && (
                        <ConfirmModal
                            title="Tem certeza que deseja excluir sua conta e todos os seus dados?"
                            message="Essa operação não pode ser desfeita!"
                            onConfirm={handleConfirm}
                            onCancel={handleCancel}
                        />
                    )}
                </DeleteAccountContainer>
            </MainContainer>
        </>
    )
}

export default Profile;