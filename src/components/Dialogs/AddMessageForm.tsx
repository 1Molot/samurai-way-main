import React, {useMemo} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

export type MessageFormDataType = {
    newMessageBody:string
}

export const AddMessageForm:React.FC<InjectedFormProps<MessageFormDataType>> = (props) => {

    const maxLengthCreatorWrapper = useMemo(() =>
            maxLengthCreator(50)
        , []);

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    validate={[required,maxLengthCreatorWrapper]}
                    name={"newMessageBody"}
                    placeholder={"Enter your message"}/>
            </div>
            <div>
                <button >Send</button>
            </div>
        </form>
    )
}
export const AddMessageFormRedux = reduxForm<MessageFormDataType>({form:"dialogAddMessageForm"})(AddMessageForm)

