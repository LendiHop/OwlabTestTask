import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/components/FormsControls/FormsControls";
import {required} from "../../common/utils/validators/validators";
import {Redirect} from "react-router-dom";
import s from '../../common/components/FormsControls/FormsControls.module.css';
import l from './Login.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {setLoggedIn} from "../../../n1-main/m2-bll/reducers/auth-reducer";
import {Title} from "../../common/components/Title/Title";
import {Button} from "../../common/components/Button/Button";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Username"} name={"username"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} type="password" component={Input}
                       validate={[required]}/>
            </div>
            {props.error && <div className={s.formSummaryError}/>}

            <div>
                <Button text="Login"/>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export const Login = () => {
    const isAuth = useSelector(state => state.auth.isAuth);
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        if (formData.username === "Admin" && formData.password === "12345") {
            dispatch(setLoggedIn());
        } else {
            alert("Wrong login or password");
        }
    }

    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div className={l.loginPage}>
            <div className={l.container}>
                <Title text="Login"/>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    );
}