import store, {StateType} from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import StoreContext from "./StoreContext";
import {Provider} from "react-redux";

let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            {/*<StoreContext>*/}
                <Provider store={store}>
            <App />
                {/*state={state} dispatch={store.dispatch.bind(store)} store={store}*/}
                    </Provider>
            {/*</StoreContextProvider>*/}
        </BrowserRouter>,
        document.getElementById('root')
);
}

rerenderEntireTree(store.getState());
// store.subscribe(rerenderEntireTree);
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})
