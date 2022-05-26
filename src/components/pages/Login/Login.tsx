import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/authReducer';
import LoginForm, { LoginFormValuesType } from './LoginForm';

const Login: React.FC = () => {

    const dispatch = useDispatch()

    const onFormSubmit = (data: LoginFormValuesType) => {
        const {email, password, captcha, rememberMe} = data

        dispatch(login(email, password, rememberMe, captcha))
    }

    return (
        <div>
            <LoginForm login={onFormSubmit}/>
        </div>
    )
}


export default Login;