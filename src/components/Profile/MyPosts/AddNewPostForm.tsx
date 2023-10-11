import React, {FormEvent, useMemo} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

export type PostFormDataType = {
    newPostText: string
}
export const AddNewPostForm: React.FC<InjectedFormProps<PostFormDataType>> = (props) => {

    const maxLengthCreatorWrapper = useMemo(() =>
            maxLengthCreator(10)
        , []);

    const handleSubmit = (formData: FormEvent) => {

        props.handleSubmit(formData);
        props.reset();
    };

    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            event.preventDefault();
            handleSubmit(event);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name={"newPostText"}
                    placeholder={"Post Message"}
                    validate={[required, maxLengthCreatorWrapper]}
                    onKeyPress={handleKeyPress}/>
            </div>
            <div>
                <button type={"submit"}>Add post</button>
            </div>
        </form>
    )
}

export const AddNewPostFormRedux = reduxForm<PostFormDataType>({form: "ProfileAddNewPostForm"})(AddNewPostForm)