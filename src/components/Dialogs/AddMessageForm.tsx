import React, {FormEvent, useMemo} from "react";
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

    const handler = (e:FormEvent) =>{
        props.handleSubmit(e)
        props.reset()
    }

    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            event.preventDefault();
            handler(event);
        }
    };
    return (
        <form onSubmit={handler}>
            <div>
                <Field
                    component={Textarea}
                    validate={[required,maxLengthCreatorWrapper]}
                    name={"newMessageBody"}
                    placeholder={"Enter your message"}
                    onKeyPress={handleKeyPress}/>
            </div>
            <div>
                <button type={"submit"}>Send</button>
            </div>
        </form>
    )
}
export const AddMessageFormRedux = reduxForm<MessageFormDataType>({form:"dialogAddMessageForm"})(AddMessageForm)

