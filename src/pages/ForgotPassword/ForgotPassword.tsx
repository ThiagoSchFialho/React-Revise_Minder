import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { useAlert } from '../../hooks/useAlert';
import Alert from '../../components/Alert/Alert';
import { Formik, Form } from 'formik';
import { useDb } from '../../hooks/useDb';
import {
    MainContainer,
    TextContainer,
    Title,
    Text,
    InputContainer,
    Label,
    Input,
    SubmitButton
} from './styles';

const ForgotPassword: React.FC = () => {
    const navigate = useNavigate();
    const { theme } = useTheme();
    const { sendResetPasswordEmail } = useDb();
    const { alert, showAlert } = useAlert();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [initialValues, setInitialValues] = useState<{ email: string}>({ email: '' });

    useEffect(() => {
        setInitialValues({ email: ''});
    }, [])
    
    const handleSubmit = async (values: { email: string }) => {
        setIsLoading(true);
        const response = await sendResetPasswordEmail(values);
        if (response) {
            setIsLoading(false);
        }

        if (response?.message === 'Password reset email sent') {
            showAlert("good", `Email enviado para ${values.email}!`, 4000);
        } 

        if (response?.error === 'Usuário indefinido') {
            showAlert("bad", "Email não cadastrado!", 4000);

        } else if (response?.error) {
            showAlert("bad", "Erro inesperado", 4000);
            
        }
    }

    return (
        <>
            {alert && <Alert type={alert.type} message={alert.message} />}
            <MainContainer $isLoading={isLoading}>
                <TextContainer>
                    <Title>Esqueci minha senha</Title>
                    <Text>Você receberá um link no seu e-mail para redefinir a sua senha.</Text>
                </TextContainer>
                <Formik
                    initialValues={initialValues}
                    enableReinitialize={true}
                    onSubmit={(values) => handleSubmit(values)}
                >
                    {({ values, handleChange }) => (
                        <Form>
                            <InputContainer>
                                <Label htmlFor="email">Email</Label>
                                <Input 
                                    type="email"  
                                    name="email"
                                    id="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    required
                                />
                            </InputContainer>

                            <SubmitButton type='submit' disabled={isLoading} $isLoading={isLoading}>Enviar</SubmitButton>
                        </Form>
                    )}
                </Formik>
            </MainContainer>
        </>
    )
}

export default ForgotPassword;