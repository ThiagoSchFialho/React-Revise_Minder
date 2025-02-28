import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDb } from '../../hooks/useDb';
import {
    MainContainer,
    FormContainer,
    FormTitle,
    InputContainer,
    Label,
    Input,
    Error,
    DateInputContainer,
    TodayButton,
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

const formatDate = (date: string) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = String(d.getFullYear());
    return `${year}-${month}-${day}`;
};

const StudyForm: React.FC = () => {
    const { createStudy, getStudy, updateStudy } = useDb();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { id } = useParams<{ id: string }>();
    const [isToday, setIsToday] = useState<boolean>(false);
    const [initialValues, setInitialValues] = useState<FormValues>({
        topic: '',
        qnt_reviews: 0,
        study_date: '',
        user_id: Number(localStorage.getItem('userId'))
    })

    useEffect(() => {
        if (id) {
            const fetchStudies = async () => {
                const study = await getStudy(id);

                setInitialValues({
                    topic: study.topic,
                    qnt_reviews: study.qnt_reviews,
                    study_date: formatDate(study.date),
                    user_id: Number(localStorage.getItem('userId'))
                })
            }
            fetchStudies();
        }
    }, [id])

    const handleSubmit = async (values: FormValues) => {
        if (id) {
            updateStudy(values, id);
        } else {
            createStudy(values);
        }
    }

    const handleTodayClick = (setFieldValue: (field: string, value: any) => void) => {
        const today = new Date();
        const formattedDate = formatDate(today.toISOString());
        setFieldValue('study_date', formattedDate);
    };
    

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
                    {({values, handleChange, touched, errors, setFieldValue }) => (
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
                                <DateInputContainer>
                                    <TodayButton
                                        selected={isToday}
                                        onClick={() => {
                                            setIsToday(!isToday);
                                            handleTodayClick(setFieldValue);
                                        }}
                                    >
                                        Hoje
                                    </TodayButton>
                                    <Input
                                        type="date"
                                        name="study_date"
                                        id="study_date"
                                        onChange={handleChange}
                                        value={values.study_date}
                                        disabled={isToday ? true : false}
                                    />
                                </DateInputContainer>
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