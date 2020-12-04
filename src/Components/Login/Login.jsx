import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FromsControls";
import {maxLengthCreator, required} from "../../Utils/Validators/validators";
import styles from"./Login.module.css"

const maxLength10 = maxLengthCreator(10);
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.loginForm}>
            <div>
                <Field placeholder={"Login"} name={"login"} validate={[required,maxLength10]} component={Input} type={"text"}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} validate={[required,maxLength10]} component={Input} type={"text"}/>
            </div>
            <div className={styles.checkbox}>
                <Field type={"checkbox"} name={"rememberMe"} component={Input} validate={[required]}/> remember me, bitch
            </div>
            <div>
                <button>
                    Login
                </button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: "login"
})(LoginForm);


const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return <div className={styles.loginForm}>
        <h1>LOgIN BRO</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

export default Login;