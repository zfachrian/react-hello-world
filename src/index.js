import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Home from './container/Home/Home';

// Import library Redux
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import './index.css';

/*
 * Global State
 * berguna untuk menampung semua value global antar component. Contoh kasus adalah 'totalOrder'
 */
const globalState = {
    totalOrder: 0
}

/* 
 * Reducer
 * Berisi semua function yang digunakan saat Redux bekerja
 * atau bisa dibahasakan seperti task yang harus dikerjakan sesuai dengan 'action.type'
 */
const rootReducer = (state = globalState, action) => {
    
    /*
     * Task PLUS_ORDER
     * berguna untuk menambahkan global value 'totalOrder'
     */    
    if(action.type === 'PLUS_ORDER'){
        return {
            ...state,
            totalOrder: state.totalOrder + 1
        }
    }
    
    /*
     * Task MINUS_ORDER
     * berguna untuk mengurangi global value 'totalOrder'
     */    
    if(action.type === 'MINUS_ORDER'){
        let totalOrder = 0;
        if(state.totalOrder > 0){
            totalOrder = state.totalOrder - 1
        }

        return {
            ...state,
            totalOrder: totalOrder
        }
    }
    
    /*
     * Return state
     */    
    return state;
}

// Store
const storeRedux = createStore(rootReducer);


ReactDOM.render(<Provider store={storeRedux}><Home /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
