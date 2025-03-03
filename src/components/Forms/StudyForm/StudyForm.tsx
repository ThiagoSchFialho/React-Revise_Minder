import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDb } from '../../../hooks/useDb';
import { useTheme } from '../../../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';
import {
    FormContainer,
    InputContainer,
    Label,
    Input,
    Error,
    DateInputContainer,
    TodayButton,
    SubmitButton,
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
      .min(1, 'A quantidade de revisões deve ser pelo menos 1')
      .max(10, 'A quantidade de revisões não pode ser maior que 10')
      .integer('A quantidade de revisões deve ser um número inteiro')
      .required('Por favor, informe a quantidade de revisões'),

    study_date: Yup.string()
      .required('Por favor, informe a data do estudo'),
});

const StudyFormc: React.FC<{ id?: string }> = ({ id }) => {
    const navigate = useNavigate();
    const { theme } = useTheme();
    const { createStudy, getStudy, updateStudy } = useDb();
    const [isToday, setIsToday] = useState<boolean>(false);
    const [initialValues, setInitialValues] = useState<FormValues>({
        topic: '',
        qnt_reviews: 3,
        study_date: '',
        user_id: Number(localStorage.getItem('userId'))
    })

    const formatDate = (date: string) => {
        const d = new Date(date);
        const day = String(d.getDate()).padStart(2, '0');
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const year = String(d.getFullYear());
        return `${year}-${month}-${day}`;
    };

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
        } else {
            setInitialValues({
                topic: '',
                qnt_reviews: 3,
                study_date: '',
                user_id: Number(localStorage.getItem('userId'))
            })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    const handleSubmit = async (values: FormValues) => {
        if (id) {
            const success = await updateStudy(values, id);
            if (success) {
                navigate('/myStudies', { state: { alertType: "good", alertMessage: 'Estudo atualizado!' } });
            }
        } else {
            const success = await createStudy(values);
            if (success) {
                navigate('/myStudies', { state: { alertType: "good", alertMessage: 'Estudo adicionado!' } });
            }
        }
    }

    const handleTodayClick = (setFieldValue: (field: string, value: unknown) => void) => {
        const today = new Date();
        const formattedDate = formatDate(today.toISOString());
        setFieldValue('study_date', formattedDate);
    };

    return (
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
                            min={1}
                            max={10}
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
                                $selected={isToday}
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
                                $scheme={theme}
                            />
                        </DateInputContainer>
                        {touched.study_date && errors.study_date && <Error>{errors.study_date}</Error>}
                    </InputContainer>

                    <SubmitButton type='submit'>{id ? 'Salvar' : 'Adicionar'}</SubmitButton>
                </Form>
            )}
                
            </Formik>
        </FormContainer>
    )
}

export default StudyFormc;