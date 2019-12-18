import {combineReducers} from 'redux';
import {reducers as list} from 'pages/index.js';

// console.log(list)

export default combineReducers({
    home:list
})