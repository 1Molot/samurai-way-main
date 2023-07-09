import profileReducer, {addPostActionCreator, deletePostAC} from "./profile-reducer";
import {ProfileType} from "../components/Profile/Profile";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCont: 12},
        {id: 2, message: 'It\'s my first post', likesCont: 11},
        {id: 3, message: 'Blabla', likesCont: 12},
        {id: 4, message: 'Dada', likesCont: 11},
    ],
    profile: null as ProfileType | null,
    friends: [],
    status: "",
    newPostText: ''
};

it ('length of posts should be incremented', () => {

    let action = addPostActionCreator("it-kamasutra.com")

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(5)
})

it ('message of new post should be correct', () => {

    let action = addPostActionCreator("it-kamasutra.com")

    let newState = profileReducer(state, action)

    expect(newState.posts[4].message).toBe("it-kamasutra.com")
})

it ('after deleting length of messages should be decrement', () => {

    let action = deletePostAC(1)

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)
})

it (`after deleting length shouldn't be decrement if id is incorrect`, () => {

    let action = deletePostAC(1000)

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(4)
})