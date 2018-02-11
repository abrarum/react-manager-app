import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer'

export default combineReducers({
    auth: AuthReducer //AuthReducer will bring the final state calculated by it and assign it to property 'auth'
    
});
