import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {getAuthUserData} from "./redux/auth-reducer";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import store, {AppStateType} from "./redux/redux-store";
import Preloader from "./components/common/preloader/Preloader";


export type AllAppPropsType = AppPropsType & {
    initialized: boolean
}

type AppPropsType = {
    initializeApp:() => void
}

class App extends Component<AllAppPropsType> {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if(!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer getAuthUserData={getAuthUserData}/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>

                    <Route path="/profile/:userId" render={() => <ProfileContainer/>}/>

                    <Route path="/users" render={() => {
                        return <UsersContainer/>
                    }}/>

                    <Route path="/login" render={() => <LoginPage/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state:AppStateType) => ({
    initialized:state.app.initialized
})

// export default compose<React.ComponentType> (
//     withRouter,
//     connect(mapStateToProps,{initializeApp})) (App);

let AppContainer = compose<React.ComponentType> (
    withRouter,
    connect(mapStateToProps,{initializeApp})) (App);

const SamuraiJSApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;