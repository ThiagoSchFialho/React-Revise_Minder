import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDb } from '../../hooks/useDb';
import { PiLightningFill } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useTheme } from '../../contexts/ThemeContext';
import {
    MainContainer,
    FastFormbutton,
    FormContainer,
    FormTitle,
    InputContainer,
    Label,
    Input,
    Error,
    DateInputContainer,
    TodayButton,
    SubmitButton,
    BegginerFormContainer,
    BegginerInputsContainer,
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
    const { theme } = useTheme();
    const { createStudy, getStudy, updateStudy } = useDb();
    const { id } = useParams<{ id: string }>();
    const [isFastFormSelected, setIsFastFormSelected] = useState<boolean>(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isToday, setIsToday] = useState<boolean>(false);
    const [index, setIndex] = useState(0);
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
        } else {
            setInitialValues({
                topic: '',
                qnt_reviews: 0,
                study_date: '',
                user_id: Number(localStorage.getItem('userId'))
            })
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
    
    const handleSubtract = (setFieldValue: (field: string, value: number) => void, value: number) => {
        if (value > 0) {
            setFieldValue('qnt_reviews', value - 1);
        }
    }
    
    const handleAdd = (setFieldValue: (field: string, value: number) => void, value: number) => {
        setFieldValue('qnt_reviews', value + 1);
    }

    return (
        <>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <MainContainer isMenuOpen={isMenuOpen}>
                <FormTitle>{id ? 'Editar' : 'Adicionar'} estudo</FormTitle>
                {!id && (
                    <FastFormbutton
                        selected={isFastFormSelected}
                        onClick={() => setIsFastFormSelected(!isFastFormSelected)}
                    >
                        <PiLightningFill size={24} />
                        Formulário rápido
                    </FastFormbutton>
                )}

                {isFastFormSelected || id ? (
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
                ) : (
                    <BegginerFormContainer>
                        <Formik
                            initialValues={initialValues}
                            enableReinitialize={true}
                            validationSchema={validations}
                            onSubmit={(values) => handleSubmit(values)}
                        >
                        {({values, handleChange, touched, errors, setFieldValue }) => (
                            <Form>
                                <BegginerInputsContainer>
                                <BegginerInputWrapper activeIndex={index}>
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
                                            <NextButton
                                                onClick={() => setIndex((prev) => Math.min(prev + 1, 2))}
                                            >
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
                                                min='0'
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
                                            <BackButton 
                                                onClick={() => setIndex((prev) => Math.max(prev - 1, 0))}
                                            >
                                                Voltar
                                            </BackButton>
                                            <NextButton
                                                onClick={() => setIndex((prev) => Math.min(prev + 1, 2))}
                                            >
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
                                            />
                                        </DateInputContainer>
                                        {touched.study_date && errors.study_date && <Error>{errors.study_date}</Error>}
                                        <ButtonsContainer>
                                            <BackButton onClick={() => setIndex((prev) => Math.max(prev - 1, 0))}>Voltar</BackButton>
                                            <BegginerSubmitButton>Adicionar</BegginerSubmitButton>
                                        </ButtonsContainer>
                                    </BegginerInputContainer>
                                </BegginerInputWrapper>
                                </BegginerInputsContainer>
                            </Form>
                        )}
                        </Formik>
                    </BegginerFormContainer>
                )}
            </MainContainer>
        </>
    )
}

export default StudyForm;
;