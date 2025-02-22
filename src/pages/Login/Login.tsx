import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
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

interface FormValues {
    email: string
    password: string
}

const validations = Yup.object({ 
    email: Yup.string()
      .email('Email inválido')
      .required('Por favor, informe o seu email!'),
  
    password: Yup.string()
      .min(8, 'A senha deve possuir pelo menos 8 caracteres!')
      .required('Por favor, informe uma senha!'),
  })

const Login: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleLogin = (values: FormValues) => {
        console.log(values)
        navigate('/dashboard')
    }

    return (
        <MainContainer>            
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
                            />
                            {touched.password && errors.password && <Error>{errors.password}</Error>}
                        </InputContainer>

                        <ForgotPassword href="">Esqueci minha senha</ForgotPassword>
                        <SubmitButton>Entrar</SubmitButton>
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