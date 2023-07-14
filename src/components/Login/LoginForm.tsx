import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {Input} from "../common/FormsControls/FormsControls";
import styles from "../common/FormsControls/FormsControls.module.css";

export type LoginFormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha:string | null
}

export type LoginFormPropsType = {
    captchaUrl:string | null
}

export const LoginForm: React.FC<InjectedFormProps<LoginFormDataType,LoginFormPropsType> & LoginFormPropsType> = ({handleSubmit,error,captchaUrl}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} type={"password"}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field placeholder={"remember me"} component={Input} name={"rememberMe"} type={"checkbox"}/>
            </div>
            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && <Field placeholder={"Symbols from image"} name={"captcha"} validate={[required]} component={Input} /> }

            {error && <div className={styles.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm<LoginFormDataType,LoginFormPropsType>({form: 'login'})(LoginForm)