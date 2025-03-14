import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDb } from '../../hooks/useDb';
import { useNavigate } from 'react-router-dom';
import Alert from '../../components/Alert/Alert';
import { useAlert } from '../../hooks/useAlert';
import { useTheme } from '../../contexts/ThemeContext';
import {
    MainContainer,
    Title,
    FormContainer,
    Label,
    Input,
    Error,
    SubmitButton
} from './styles';

interface FormValues {
    currentPassword: string
    newPassword: string
    confirmPassword: string
}

const validations = Yup.object({ 
    currentPassword: Yup.string()
      .min(8, 'A senha deve possuir pelo menos 8 caracteres!')
      .required('Por favor, informe sua senha!'),
  
    newPassword: Yup.string()
      .min(8, 'A senha deve possuir pelo menos 8 caracteres!')
      .required('Por favor, informe uma nova senha!'),
  
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword')], 'As duas senhas não coincidem')
      .required('Por favor, confirme a nova senha!'),
  })

const ChangePassword: React.FC = () => {
    const navigate = useNavigate();
    const { theme } = useTheme();
    const { alert, showAlert } = useAlert();
    const { checkPassword, updatePassword } = useDb();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [initialValues, setInitialValues] = useState<FormValues>(
        {
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
        }
    );

    useEffect(() => {
        setInitialValues({
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
        })
    }, [])

    const handleUpdatePassword = async (values: FormValues) => {
        setIsLoading(true);
        const { currentPassword, newPassword } = values;

        const passwordMatch = await checkPassword(currentPassword);
        if (!passwordMatch) {
            setIsLoading(false);
            showAlert("bad", "Senha atual incorreta.", 4000);
            return false;
        }

        const response = await updatePassword(newPassword)
        if (response) {
            setIsLoading(false);
            navigate('/profile', { state: { alertType: "good", alertMessage: 'Senha alterada com sucesso' } });
        }
    }

    return (
        <>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            {alert && <Alert type={alert.type} message={alert.message} />}
            <MainContainer $isMenuOpen={isMenuOpen} $isLoading={isLoading}>
                <Title>Alterar senha</Title>
                <FormContainer>
                    <Formik
                        initialValues={initialValues}
                        enableReinitialize={true}
                        validationSchema={validations}
                        onSubmit={(values) => handleUpdatePassword(values)}
                    >
                        {({ values, handleChange, touched, errors }) => (
                            <Form>
                                <Label htmlFor="currentPassword">Senha atual</Label>
                                <Input 
                                    type="password"  
                                    name="currentPassword"
                                    id="currentPassword"
                                    value={values.currentPassword}
                                    onChange={handleChange}
                                    $scheme={theme}
                                />
                                {touched.currentPassword && errors.currentPassword && <Error>{errors.currentPassword}</Error>}

                                <Label htmlFor="newPassword">Nova senha</Label>
                                <Input 
                                    type="password"  
                                    name="newPassword"
                                    id="newPassword"
                                    value={values.newPassword}
                                    onChange={handleChange}
                                    $scheme={theme}
                                />
                                {touched.newPassword && errors.newPassword && <Error>{errors.newPassword}</Error>}

                                <Label htmlFor="confirmPassword">Confirme a nova senha</Label>
                                <Input 
                                    type="password"  
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                    $scheme={theme}
                                />
                                {touched.confirmPassword && errors.confirmPassword && <Error>{errors.confirmPassword}</Error>}
                            
                                <SubmitButton type='submit' disabled={isLoading} $isLoading={isLoading}>Salvar</SubmitButton>
                            </Form>
                        )}
                    </Formik>
                </FormContainer>
            </MainContainer>
        </>
    )
}

export default ChangePassword;