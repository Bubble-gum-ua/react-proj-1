import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FromsControls";
import {maxLengthCreator, required} from "../../Utils/Validators/validators";
import styles from "./Login.module.css"
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router";


const maxLength30 = maxLengthCreator(30);
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.loginForm}>
            <div>
                <div>
                    <Field placeholder={"Email"} name={"email"} validate={[required, maxLength30]} component={Input}
                           type={"text"}/>
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} validate={[required, maxLength30]}
                           component={Input} type={"password"}/>
                </div>
                <div>
                    <Field type={"checkbox"} name={"rememberMe"} component={Input} validate={[required]}/> remember me,
                    bitch
                </div>
                <div>
                    <button>
                        Login
                    </button>
                </div>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: "login"
})(LoginForm);


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    };
    if (props.isAuth) {
        return <Redirect to={"profile"}/>
    }
    return <div className={styles.mainFormwrapp}>
        <h1>LOgIN BRO</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});
export default connect(mapStateToProps,{login})(Login);