import React, { useState } from 'react';
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

const validations = Yup.object({ 
    topic: Yup.string()
      .required('Por favor, informe o tópico do estudo'),
  
    qntReviews: Yup.number()
      .typeError('Informe um número válido')
      .positive('A quantidade de revisões deve ser maior que zero')
      .integer('A quantidade de revisões deve ser um número inteiro')
      .required('Por favor, informe a quantidade de revisões'),

    studyDate: Yup.string()
      .required('Por favor, informe a data do estudo'),
});

const StudyForm: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        console.log(values);
        navigate('/dashboard');
    }

    return (
        <>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <MainContainer isMenuOpen={isMenuOpen}>
                <FormTitle>{id ? 'Editar' : 'Adicionar'} estudo</FormTitle>
                <FormContainer>
                    <Formik
                        initialValues={{topic: '', qntReviews: '', studyDate: ''}}
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
                                <Label htmlFor='qntReviews'>Quantidade de revisões</Label>
                                <Input 
                                    type="number"
                                    min='0'
                                    name="qntReviews"
                                    id="qntReviews"
                                    onChange={handleChange}
                                    value={values.qntReviews}
                                />
                                {touched.qntReviews && errors.qntReviews && <Error>{errors.qntReviews}</Error>}
                            </InputContainer>

                            <InputContainer>
                                <Label htmlFor='studyDate'>Data do estudo</Label>
                                <Input 
                                    type="date"
                                    name="studyDate"
                                    id="studyDate"
                                    onChange={handleChange}
                                    value={values.studyDate}
                                />
                                {touched.studyDate && errors.studyDate && <Error>{errors.studyDate}</Error>}
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