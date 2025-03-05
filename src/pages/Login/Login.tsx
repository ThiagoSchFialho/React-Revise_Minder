import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../hooks/useAuth';
import Alert from '../../components/Alert/Alert';
import { useAlert } from '../../hooks/useAlert';
import { useTheme } from '../../contexts/ThemeContext';
import {
    MainContainer,
    FormContainer,
    FormTitle,
    InputContainer,
    Label,
    Input,
    Error,
    ForgotPassword,
    SubmitButton,
    SignUpContainer,
    SignUpText
} from './styles'

interface LoginValues {
    email: string;
    password: string;
  }

const validations = Yup.object({ 
    email: Yup.string()
        .email('Email inválido')
        .required('Por favor, informe o seu email!'),

    password: Yup.string()
        .min(8, 'A senha deve possuir pelo menos 8 caracteres!')
        .required('Por favor, informe uma senha!'),
});

const Login: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { theme } = useTheme();
    const { alert, showAlert } = useAlert();
    const { login } = useAuth();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    useEffect(() => {
        if (location.state?.alertMessage) {
            showAlert(location.state.alertType, location.state.alertMessage, location.state.time);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.state]);

    const handleLogin = async (values: LoginValues) => {
        setIsLoading(true);
        const response = await login(values);
        if (response) {
            setIsLoading(false);
        }

        if (response?.error === 'Authentication failed') {
            showAlert("bad", "Credenciais incorretas", 4000);

        } else if (response?.error === 'User not verified') {
            showAlert("bad", "Usuário não verificado. Verifique seu email para confirmar o cadastro.", 10000);

        } else if  (response?.error) {
            showAlert("bad", "Erro inesperado", 4000);
    
        } else {
            navigate('/dashboard');

        } 
    }

    return (
        <MainContainer $isLoading={isLoading}>
            {alert && <Alert type={alert.type} message={alert.message} />}
            <FormTitle>Login</FormTitle>
            <FormContainer>
                <Formik
                    initialValues={{email: '', password: ''}}
                    enableReinitialize={true}
                    validationSchema={validations}
                    onSubmit={(values) => handleLogin(values)}
                >
                {({values, handleChange, touched, errors }) => (
                    <Form>
                        <InputContainer>
                            <Label htmlFor='email'>Email</Label>
                            <Input 
                                type="email"
                                name="email"
                                id="email"
                                onChange={handleChange}
                                value={values.email}
                            />
                            {touched.email && errors.email && <Error>{errors.email}</Error>}
                        </InputContainer>

                        <InputContainer>
                            <Label htmlFor='password'>Senha</Label>
                            <Input 
                                type="password"
                                name="password"
                                id="password"
                                onChange={handleChange}
                                value={values.password}
                                $scheme={theme}
                            />
                            {touched.password && errors.password && <Error>{errors.password}</Error>}
                        </InputContainer>

                        <ForgotPassword href="">Esqueci minha senha</ForgotPassword>
                        <SubmitButton type='submit' disabled={isLoading} $isLoading={isLoading}>Entrar</SubmitButton>
                    </Form>
                )}
                    
                </Formik>
            </FormContainer>
            <SignUpContainer>
                <SignUpText>Não tem conta? <u onClick={() => navigate('/signUp')}>Cadastre-se</u></SignUpText>
            </SignUpContainer>
        </MainContainer>
    )
}

export default Login