import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
// import state, {ActionsType, StateType, StoreType} from "./redux/state";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/Users";

//state изминили na store

function UsersContainer() {
    return null;
}

const App = () => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path="/dialogs" render={() => <DialogsContainer />}/>

                <Route path="/profile" render={() => <Profile />}/>
                {/*// profilePage={props.state.profilePage}*/}
                    {/*// dispatch={props.dispatch}*/}
                <Route path="/users" render={() => <UsersContainer/> }/>
            </div>
        </div>
    );
}

export default App;
