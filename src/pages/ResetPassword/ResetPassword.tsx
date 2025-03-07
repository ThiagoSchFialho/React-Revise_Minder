import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDb } from '../../hooks/useDb';
import { useNavigate, useSearchParams } from 'react-router-dom';
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
    newPassword: string;
    confirmPassword: string;
    resetPasswordToken: string | null;
}

const validations = Yup.object({  
    newPassword: Yup.string()
      .min(8, 'A senha deve possuir pelo menos 8 caracteres!')
      .required('Por favor, informe uma nova senha!'),
  
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword')], 'As duas senhas não coincidem')
      .required('Por favor, confirme a nova senha!'),
  })

const ResetPassword: React.FC = () => {
    const navigate = useNavigate();
    const { theme } = useTheme();
    const { alert, showAlert } = useAlert();
    const { resetPassword } = useDb();
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [initialValues, setInitialValues] = useState<FormValues>(
        {
            newPassword: '',
            confirmPassword: '',
            resetPasswordToken: token
        }
    );

    useEffect(() => {
        setInitialValues({
            newPassword: '',
            confirmPassword: '',
            resetPasswordToken: token
        })
    }, [])

    if (!token) navigate('/');

    const handleUpdatePassword = async (values: FormValues) => {
        setIsLoading(true);
        const { newPassword, resetPasswordToken } = values;

        const response = await resetPassword(newPassword, resetPasswordToken);
        if (response) {
            setIsLoading(false);
        }

        if (response?.message == 'Password reset successfully') {
            navigate('/login', { state: { alertType: "good", alertMessage: 'Senha alterada com sucesso' } });
        }
        
        if (response?.error) {
            showAlert("bad", "Erro inesperado", 4000);
        }
    }

    return (
        <>
            {alert && <Alert type={alert.type} message={alert.message} />}
            <MainContainer $isLoading={isLoading}>
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

export default ResetPassword;