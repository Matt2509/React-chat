import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
//import * as serviceWorker from './serviceWorker';
//import Chat from "../src/components/chat.js";

import {createStore} from 'redux';
import allreducer from './reducer/index';
import {Provider} from 'react-redux';

import Routes from "../src/containers/Routes";

const store = createStore(
    allreducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
console.log(store.getState());
ReactDOM.render(
    <Provider store = {store}>
        <Routes />            
    </Provider>, 
    document.getElementById('root')
);

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
