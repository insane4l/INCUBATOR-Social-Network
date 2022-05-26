import React from 'react'
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik'
import s from './LoginForm.module.css'
import { useSelector } from 'react-redux'
import { AppStateType } from '../../../redux/store'
import * as authSelectors from '../../../selectors/authSelectors'

const loginFormInitialValues: LoginFormValuesType = {
    email: '',
    password: '',
    captcha: '',
    rememberMe: false
}

const LoginForm: React.FC<LoginFormPropsType> = ({login}) => {

    const validateLoginForm = (values: LoginFormValuesType) => {
        debugger;
        const errors: any = {};
        if (!values.email) {
            errors.login = 'Field required';
        }
        if (!values.password) {
            errors.password = 'Field required';
        }
        return errors
    }

    const onSubmitHandler = (data: LoginFormValuesType, { setSubmitting, resetForm }: FormikHelpers<LoginFormValuesType>) => {
        login(data)
        setSubmitting(false)
        resetForm()
    }

    return (
        <div className={s.loginForm}>
            <Formik
                initialValues={loginFormInitialValues}
                validate={validateLoginForm}
                onSubmit={onSubmitHandler}>


                {({ isSubmitting }) => (
                    <Form>
                        <Field type="email" name="email" component="input" />
                        <ErrorMessage name="email" component="div" className={s.errorMessage} />

                        <Field type="password" name="password" component="input" />
                        <ErrorMessage name="password" component="div" className={s.errorMessage} />

                        <Field type="checkbox" name="rememberMe" component="input" />

                        <CaptchaBlock />

                        <button type="submit" disabled={isSubmitting}>
                            Login
                        </button>
                    </Form>
                )}

            </Formik>
        </div>
    )
}

export default LoginForm



const CaptchaBlock = () => {

    const captchaImg = useSelector(authSelectors.getCaptchaUrl)

    return (
        <>
            {captchaImg &&
                <div>
                    Please input captcha and try again
                    <Field type="text" name="captcha" component="input" />
                    <ErrorMessage name="captcha" component="div" className={s.errorMessage} />
                    <img src={captchaImg} alt="captcha" />
                </div>
            }
        </>
    )
}




type LoginFormPropsType = {
    login: (data: LoginFormValuesType) => void
}

export type LoginFormValuesType = {
    email: string
    password: string
    captcha: string
    rememberMe: boolean
}