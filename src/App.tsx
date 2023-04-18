import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import state, {ActionsType, StateType, StoreType} from "./redux/state";
//state изминили na store

type PropsAppType={
    state:StateType
    store: StoreType;
    dispatch: (action: ActionsType) => void;
}

const App = (props:PropsAppType) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path="/dialogs" render={() => <Dialogs store={props.store} />}/>

                <Route path="/profile" render={() => <Profile
                    profilePage={props.state.profilePage}
                    dispatch={props.dispatch}/>}/>
            </div>
        </div>
    );
}

export default App;
