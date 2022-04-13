import { combineReducers } from 'redux';
import {reducerReemplace, reducerListFiles} from './reducer';

//Almacenamiento de los reducers creados
const rootReducer = combineReducers({
    reducerReemplace,
    reducerListFiles
});

export default rootReducer;