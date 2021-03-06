import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input} from "../Common/FormsControls/FromsControls";
import {maxLengthCreator, required} from "../../Utils/Validators/validators";
import styles from "./Login.module.css"
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router";


const maxLength30 = maxLengthCreator(30);
const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit} className={styles.loginForm}>
            <div>
                {createField("Email", "email", [required, maxLength30], Input, {type: "text"})}
                {createField("Password", "password", [required, maxLength30], Input, {type: "password"})}
                {createField(null, "rememberMe", null, Input, {type: "checkbox"}, "remember me")}

                {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
                {captchaUrl && createField("Symbols from image", "captcha",[required], Input, {})}

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
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };
    if (props.isAuth) {
        return <Redirect to={"profile"}/>
    }
    return <div className={styles.mainFormwrapp}>
        <h1>LOgIN BRO</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
};
const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
});
export default connect(mapStateToProps, {login})(Login);