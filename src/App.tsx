import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {HashRouter, Route, withRouter} from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {getAuthUserData} from "./redux/auth-reducer";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import store, {AppStateType} from "./redux/redux-store";
import Preloader from "./components/common/preloader/Preloader";
import {WithSuspense} from "./hoc/WithSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

export type AllAppPropsType = AppPropsType & {
    initialized: boolean
}

type AppPropsType = {
    initializeApp: () => void
}

class App extends Component<AllAppPropsType> {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer getAuthUserData={getAuthUserData}/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path="/dialogs" render={WithSuspense(DialogsContainer)}/>

                    <Route path="/profile/:userId" render={WithSuspense(ProfileContainer)}/>

                    <Route path="/friends" render={() => <UsersContainer friend={true}/>}/>

                    <Route path="/users" render={() => {
                        return <UsersContainer/>
                    }}/>

                    <Route path="/login" render={() => <LoginPage/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})


let AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default SamuraiJSApp;