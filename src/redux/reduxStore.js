import {createStore, combineReducers, applyMiddleware} from "redux";
import photoReducer from './photoReducer';
import thunkMiddlware from 'redux-thunk';



let reducers = combineReducers({
    photoReducer
});
let store = createStore(reducers, applyMiddleware(thunkMiddlware));

window.store = store;

export default store;