import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Container } from './style';
import img from "../../assets/municca-sign-assinatura-digital-e-segura.png"
import { useAuthStore } from '../../store/authSore';

interface LoginFormValues {
    email: string;
    password: string;
}

const initialValues: LoginFormValues = {
    email: '',
    password: '',
};

const validationSchema = Yup.object({
    email: Yup.string()
        .email('Invalid email format')
        .required('Required'),
    password: Yup.string()
        .required('Required')
});

const Login: React.FC = () => {
    const { login, isLoading, error, token } = useAuthStore();


    const handleSubmit = async (values: LoginFormValues) => {
        await login(values.email, values.password)
    };



    return (
        <Container>
            <div className="content-logo">
                <img src={img} alt="Municca Logo" />
                <h2>Municca CMS</h2>
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form className='form'>
                    <div className='input-content'>
                        <label htmlFor="email">Email</label>
                        <Field
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                        />
                        <ErrorMessage name="email" component="div" />
                    </div>

                    <div className='input-content'>
                        <label htmlFor="password">Password</label>
                        <Field
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                        />
                        <ErrorMessage name="password" component="div" />
                    </div>

                    <button className='btn' type="submit" disabled={isLoading} >
                        {isLoading ? 'Logging in...' : 'Enter'}
                    </button>
                </Form>
            </Formik>
        </Container>
    );
};

export default Login;