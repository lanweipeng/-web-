import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
//创建存储
function reducer1(state={name:'lwp',age:18},action){
    switch(action.type){
        case 'set_name':
            let newState={
                ...state,
                name:action.name
            } 
            return newState;
        default:
            return state
    }
    return state
}
// 创建存储对象
const store = createStore(reducer1)

ReactDOM.render(
<Provider store={store}>

<App name="hw"/>

</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
