import React from "react";
import s from './ProfileInfo.module.css';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input, Textarea} from "../../common/FormsControls/FormsControls";
import {ProfileType} from "../Profile";
import styles from "../../common/FormsControls/FormsControls.module.css";


export type ProfileFormData =  {
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string | null
}
type PropsType = {
    profile: ProfileType
}

const ProfileDataForm: React.FC<InjectedFormProps<ProfileFormData, PropsType> & PropsType> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <button>save</button>
            </div>
            {props.error && <div className={styles.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <b>Full name</b>: {<Field placeholder={"Full name"} name={"fullName"}
                                          validate={[]}
                                          component={Input}/>}
            </div>
            <div>
                <b>Looking for a job</b>: {<Field placeholder={""} name={"lookingForAJob"}
                                                  validate={[]}
                                                  component={Input} type="checkbox"

            />}
            </div>
            <div>
                <b>My professional skills</b>: {<Field placeholder={"My professional skills"}
                                                       name={"lookingForAJobDescription"}
                                                       validate={[]}
                                                       component={Textarea}/>}
            </div>

            <div>
                <b>About me</b>: {<Field placeholder={"About me"} name={"aboutMe"}
                                         validate={[]}
                                         component={Textarea}/>}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    <b>{key}:{<Field placeholder={key} name={"contacts." + key}
                                     validate={[]}
                                     component={Input}/>}</b>
                </div>
            })}
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm<ProfileFormData, PropsType>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;