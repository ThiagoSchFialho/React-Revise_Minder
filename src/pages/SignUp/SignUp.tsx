import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TermsAndPrivacyModal from '../../components/Terms/Terms';
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
    CheckboxLabel,
    Input,
    CheckboxInput,
    Error,
    SubmitButton,
    RedirectContainer,
    RedirectText
} from './styles';

interface SignUpValues {
    email: string;
    password: string;
    confirmPassword: string;
    terms: boolean;
}

const validations = Yup.object({ 
    email: Yup.string()
      .required('Por favor, informe o seu email!'),
  
    password: Yup.string()
      .min(8, 'A senha deve possuir pelo menos 8 caracteres!')
      .required('Por favor, informe uma senha!'),
  
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'As duas senhas não coincidem')
      .required('Por favor, confirme a senha!'),

    terms: Yup.boolean()
        .oneOf([true], 'Aceite os termos para continuar')
  })

const SignUp: React.FC = () => {
    const navigate = useNavigate();
    const { theme } = useTheme();
    const { alert, showAlert } = useAlert();
    const { signUp } = useAuth();
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSignUp = async (values: SignUpValues) => {
        setIsLoading(true);
        const response = await signUp(values); 
        if (response) {
            setIsLoading(false);
        }

        if (response?.error === 'User with that email already exists') {
            showAlert("bad", "Email indisponivel.", 4000);
            
        } else if (response?.message) {
            navigate('/login', { state: { alertType: "good", alertMessage: `Link de verificação enviado para ${values.email}`, time: 9999999 } });
        
        } else if (response?.error) {
            showAlert("bad", "Erro inesperado", 4000);

        }
    }

    return (
        <>
            <TermsAndPrivacyModal isVisible={isModalVisible} onClose={() => setIsModalVisible(false)}/>
            <MainContainer $isLoading={isLoading}>
                {alert && <Alert type={alert.type} message={alert.message} />}
                <FormTitle>Cadastro</FormTitle>
                <FormContainer>
                    <Formik
                        initialValues={{email: '', password: '', confirmPassword: '', terms: false}}
                        enableReinitialize={true}
                        validationSchema={validations}
                        onSubmit={(values) => handleSignUp(values)}
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

                            <InputContainer>
                                <Label htmlFor='confirmPassword'>Confirme sua senha</Label>
                                <Input 
                                    type="password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    onChange={handleChange}
                                    value={values.confirmPassword}
                                    $scheme={theme}
                                />
                                {touched.confirmPassword && errors.confirmPassword && <Error>{errors.confirmPassword}</Error>}
                            </InputContainer>

                            <InputContainer>
                                <CheckboxInput 
                                    type="checkbox"
                                    name="terms"
                                    id="terms"
                                    onChange={handleChange}
                                    checked={values.terms}
                                />
                                <CheckboxLabel>Li e aceito os <u onClick={() => setIsModalVisible(true)}>termos de uso</u>.</CheckboxLabel>
                                {touched.terms && errors.terms && <Error>{errors.terms}</Error>}
                            </InputContainer>
                            <SubmitButton  type='submit' disabled={isLoading} $isLoading={isLoading}>Cadastrar</SubmitButton>
                        </Form>
                    )}
                        
                    </Formik>
                </FormContainer>
                <RedirectContainer>
                    <RedirectText>Já tem conta? <u onClick={() => navigate('/login')}>Entre</u></RedirectText>
                </RedirectContainer>
            </MainContainer>
        </>
    )
}

export default SignUp