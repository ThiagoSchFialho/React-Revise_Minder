import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useTheme } from '../../../contexts/ThemeContext';
import { useDb } from '../../../hooks/useDb';
import { FaArrowRight } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";
import {
    Error,
    DateInputContainer,
    TodayButton,
    BegginerFormContainer,
    BegginerInputsContainer,
    ProgressContainer,
    ProgressItem,
    BegginerInputWrapper,
    BegginerInputContainer,
    BegginerLabel,
    BegginerInput,
    BegginerNumberInputContainer,
    BegginerNumberInput,
    ButtonsContainer,
    BackButton,
    NextButton,
    BegginerSubmitButton
} from './styles';

const validations = Yup.object({ 
    topic: Yup.string()
      .required('Por favor, informe o tópico do estudo'),
  
    qnt_reviews: Yup.number()
      .typeError('Informe um número válido')
      .min(0, 'A quantidade de revisões deve ser pelo menos 0')
      .max(10, 'A quantidade de revisões não pode ser maior que 10')
      .integer('A quantidade de revisões deve ser um número inteiro')
      .required('Por favor, informe a quantidade de revisões'),

    study_date: Yup.string()
      .required('Por favor, informe a data do estudo'),
});

const BegginerForm: React.FC = () => {
    const { theme } = useTheme();
    const { createStudy } = useDb();
    const [isToday, setIsToday] = useState<boolean>(false);
    const [index, setIndex] = useState(0);
    const initialValues = {
        topic: '',
        qnt_reviews: 3,
        study_date: '',
        user_id: Number(localStorage.getItem('userId'))
    }

    const formatDate = (date: string) => {
        const d = new Date(date);
        const day = String(d.getDate()).padStart(2, '0');
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const year = String(d.getFullYear());
        return `${year}-${month}-${day}`;
    };

    const handleTodayClick = (setFieldValue: (field: string, value: any) => void) => {
        const today = new Date();
        const formattedDate = formatDate(today.toISOString());
        setFieldValue('study_date', formattedDate);
    };
    
    const handleSubtract = (setFieldValue: (field: string, value: number) => void, value: number) => {
        if (value > 0) {
            setFieldValue('qnt_reviews', value - 1);
        }
    }
    
    const handleAdd = (setFieldValue: (field: string, value: number) => void, value: number) => {
        if (value < 10) {
            setFieldValue('qnt_reviews', value + 1);
        }
    }

    return (
        <BegginerFormContainer>
            <Formik
                initialValues={initialValues}
                enableReinitialize={true}
                validationSchema={validations}
                onSubmit={(values) => createStudy(values)}
            >
            {({values, handleChange, touched, errors, setFieldValue, setFieldTouched, validateForm }) => (
                <Form>
                    <BegginerInputsContainer>
                        <ProgressContainer>
                            <ProgressItem $status={index >= 0 ? 'done' : 'notDone'} >1</ProgressItem>
                            <ProgressItem $status={index >= 1 ? 'done' : 'notDone'}>2</ProgressItem>
                            <ProgressItem $status={index >= 2 ? 'done' : 'notDone'}>3</ProgressItem>
                        </ProgressContainer>
                        <BegginerInputWrapper $activeIndex={index}>
                            <BegginerInputContainer>
                                <BegginerLabel htmlFor='topic'>O que você estudou?</BegginerLabel>
                                <BegginerInput
                                    type="text"
                                    name="topic"
                                    id="topic"
                                    onChange={handleChange}
                                    value={values.topic}
                                />
                                {touched.topic && errors.topic && <Error>{errors.topic}</Error>}
                                <ButtonsContainer>
                                    <div></div>
                                    <NextButton onClick={async () => {
                                        setFieldTouched("topic", true);
                                        const validationErrors = await validateForm();
                                        if (!validationErrors.topic) {
                                            setIndex((prev) => Math.min(prev + 1, 2));
                                        }}}>
                                        Proximo
                                        <FaArrowRight size={20}/>
                                    </NextButton>
                                </ButtonsContainer>
                            </BegginerInputContainer>

                            <BegginerInputContainer>
                                <BegginerLabel htmlFor='qnt_reviews'>Quantas revisões você quer fazer?</BegginerLabel>
                                <BegginerNumberInputContainer>
                                    <FaMinus
                                        size={24}
                                        color={theme == 'light' ? '#171823' : 'white'}
                                        style={{cursor: 'pointer'}}
                                        onClick={() => handleSubtract(setFieldValue, values.qnt_reviews)}
                                    />
                                    <BegginerNumberInput
                                        type="number"
                                        min={0}
                                        max={10}
                                        name="qnt_reviews"
                                        id="qnt_reviews"
                                        onChange={handleChange}
                                        value={values.qnt_reviews}
                                    />
                                    <FaPlus
                                        size={24}
                                        color={theme == 'light' ? '#171823' : 'white'}
                                        style={{cursor: 'pointer'}}
                                        onClick={() => handleAdd(setFieldValue, values.qnt_reviews)}
                                    />
                                </BegginerNumberInputContainer>
                                {touched.qnt_reviews && errors.qnt_reviews && <Error>{errors.qnt_reviews}</Error>}
                                <ButtonsContainer>
                                    <BackButton onClick={() => setIndex((prev) => Math.max(prev - 1, 0))}>Voltar</BackButton>
                                    <NextButton onClick={async () => {
                                        setFieldTouched("qnt_reviews", true);
                                        const validationErrors = await validateForm();
                                        if (!validationErrors.qnt_reviews) {
                                            setIndex((prev) => Math.min(prev + 1, 2));
                                        }}}>
                                        Proximo
                                        <FaArrowRight size={20}/>
                                    </NextButton>
                                </ButtonsContainer>
                            </BegginerInputContainer>
                            
                            <BegginerInputContainer>
                                <BegginerLabel htmlFor='study_date'>Quando você estudou?</BegginerLabel>
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
                                    <BegginerInput
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
                                <ButtonsContainer>
                                    <BackButton onClick={() => setIndex((prev) => Math.max(prev - 1, 0))}>Voltar</BackButton>
                                    <BegginerSubmitButton type="submit">Adicionar</BegginerSubmitButton>
                                </ButtonsContainer>
                            </BegginerInputContainer>
                        </BegginerInputWrapper>
                    </BegginerInputsContainer>
                </Form>
            )}
            </Formik>
        </BegginerFormContainer>
    )
}

export default BegginerForm