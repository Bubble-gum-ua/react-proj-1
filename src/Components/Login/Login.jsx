import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input} from "../Common/FormsControls/FromsControls";
import {maxLengthCreator, required} from "../../Utils/Validators/validators";
import styles from "./Login.module.css"
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router";


const maxLength30 = maxLengthCreator(30);
const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit} className={styles.loginForm}>
            <div>
                {createField("Email", "email", [required, maxLength30], Input, {type: "text"})}
                {createField("Password", "password", [required, maxLength30], Input, {type: "password"})}
                {createField(null, "rememberMe", null, "Input", {type: "checkbox"}, "remember me")}
                {error &&
                <div className={styles.formSummaryError}>
                    {error}
                </div>
                }
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
export default connect(mapStateToProps, {login})(Login);