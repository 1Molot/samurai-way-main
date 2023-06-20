import React, {useMemo} from "react";
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

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newPostText"} placeholder={"Post Message"}
                       validate={[required, maxLengthCreatorWrapper]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

export const AddNewPostFormRedux = reduxForm<PostFormDataType>({form: "ProfileAddNewPostForm"})(AddNewPostForm)