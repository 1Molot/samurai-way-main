import store, {StateType} from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

// let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
                <Provider store={store}>
            <App />
                {/*state={state} dispatch={store.dispatch.bind(store)} store={store}*/}
                    </Provider>
        </BrowserRouter>,
        document.getElementById('root'));
// }

// rerenderEntireTree(store.getState());
// store.subscribe(rerenderEntireTree);
// store.subscribe(() => {
//     let state = store.getState()
//     rerenderEntireTree(state)
// })
// serviceWorker.unregister();    //nado!?