import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { Formik, Form } from 'formik';
import { useDb } from '../../hooks/useDb';
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
    const { getUserEmail, updateEmail, updatePassword } = useDb();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [initialValues, setIntialValues] = useState<{email: string}>({email: ''});

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

    const handleUpdatePassword = async (values:{currentPassword: string, newPassword: string}) => {
        const response = await updatePassword(values)

        if (response) {
            alert('Senha alterada com sucesso');
        }
    }

    return (
        <>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <MainContainer isMenuOpen={isMenuOpen}>
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
                <ChangePasswordButton>Alterar Senha</ChangePasswordButton>

                <Separator />

                <DeleteAccountContainer>
                    <TextContainer>
                        <DeleteTitle>Se essa conta for excluida todos os dados serão excluidos.</DeleteTitle>
                        <DeleteText>Essa operação não pode ser desfeita.</DeleteText>
                    </TextContainer>
                    <DeleteButton>Excluir conta</DeleteButton>
                </DeleteAccountContainer>
            </MainContainer>
        </>
    )
}

export default Profile;