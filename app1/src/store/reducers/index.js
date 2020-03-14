import Reducer1 from './reducer1';
import UserReducer from './user-reducer';
import AuthReducer from './auth-reducer';
import { combineReducers } from 'redux';


const rootReducuer = combineReducers({
    reducer1: Reducer1,
    reducer2: UserReducer,
    authReducer: AuthReducer
});

export default rootReducuer;