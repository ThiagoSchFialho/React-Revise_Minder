import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
    MainContainer,
    FormContainer,
    FormTitle,
    InputContainer,
    Label,
    Input,
    Error,
    SubmitButton
} from './styles';

interface FormValues {
    topic: string
    qnt_reviews: number
    study_date: string
    user_id: number
}

const validations = Yup.object({ 
    topic: Yup.string()
      .required('Por favor, informe o tópico do estudo'),
  
    qnt_reviews: Yup.number()
      .typeError('Informe um número válido')
      .positive('A quantidade de revisões deve ser maior que zero')
      .integer('A quantidade de revisões deve ser um número inteiro')
      .required('Por favor, informe a quantidade de revisões'),

    study_date: Yup.string()
      .required('Por favor, informe a data do estudo'),
});

const StudyForm: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [initialValues, setInitialValues] = useState<FormValues>({
        topic: '',
        qnt_reviews: 0,
        study_date: '',
        user_id: Number(localStorage.getItem('userId'))
    })

    useEffect(() => {
        if (id) {
            setInitialValues({
                topic: '',
                qnt_reviews: 0,
                study_date: '',
                user_id: Number(localStorage.getItem('userId'))
            })
        }

    }, [id])

    const handleSubmit = async (values: FormValues) => {
        const token = localStorage.getItem('token');

        try {
            const response = await fetch('http://localhost:3000/study', {
                method: 'POST',
                headers: {
                    'Authorization': `${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });
            const data = await response.json();
      
            if (response.ok) {
                navigate('/myStudies');
            } else {
                console.error('Erro criação do estudo:', data.error);
            }
          } catch (error) {
              console.error('Erro na requisição:', error);
          }
    }

    return (
        <>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <MainContainer isMenuOpen={isMenuOpen}>
                <FormTitle>{id ? 'Editar' : 'Adicionar'} estudo</FormTitle>
                <FormContainer>
                    <Formik
                        initialValues={initialValues}
                        enableReinitialize={true}
                        validationSchema={validations}
                        onSubmit={(values) => handleSubmit(values)}
                    >
                    {({values, handleChange, touched, errors }) => (
                        <Form>
                            <InputContainer>
                                <Label htmlFor='topic'>Tópico</Label>
                                <Input 
                                    type="text"
                                    name="topic"
                                    id="topic"
                                    onChange={handleChange}
                                    value={values.topic}
                                />
                                {touched.topic && errors.topic && <Error>{errors.topic}</Error>}
                            </InputContainer>
    
                            <InputContainer>
                                <Label htmlFor='qnt_reviews'>Quantidade de revisões</Label>
                                <Input 
                                    type="number"
                                    min='0'
                                    name="qnt_reviews"
                                    id="qnt_reviews"
                                    onChange={handleChange}
                                    value={values.qnt_reviews}
                                />
                                {touched.qnt_reviews && errors.qnt_reviews && <Error>{errors.qnt_reviews}</Error>}
                            </InputContainer>

                            <InputContainer>
                                <Label htmlFor='study_date'>Data do estudo</Label>
                                <Input 
                                    type="date"
                                    name="study_date"
                                    id="study_date"
                                    onChange={handleChange}
                                    value={values.study_date}
                                />
                                {touched.study_date && errors.study_date && <Error>{errors.study_date}</Error>}
                            </InputContainer>

                            <SubmitButton type='submit'>{id ? 'Salvar' : 'Adicionar'}</SubmitButton>
                        </Form>
                    )}
                        
                    </Formik>
                </FormContainer>
            </MainContainer>
        </>
    )
}

export default StudyForm;
;