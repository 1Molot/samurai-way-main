import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {MyPostsContainerProps} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


const MyPosts = (props: MyPostsContainerProps) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCont}/>)

    let newPostElement: React.RefObject<HTMLTextAreaElement> = React.createRef();

    let onAddPost = (values:any) => { //xz
        props.addPost(values.newPostText); //
    }

    // let onPostChange = () => {
    //     let text = newPostElement.current?.value as string;
    //     props.updateNewPostText(text);
    // }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

type FormDataType = {
    newPostText:string

}

const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={"newPostText"}/>
                {/*<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>*/}
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm<FormDataType>({form:"ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;