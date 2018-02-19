import { EMPLOYEE_UPDATE } from '../actions/types';

const INITIAL_STATE = { name: '', phone: '', shift: '' };

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case EMPLOYEE_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value }
            // getting the raw data of 2 vars into a key-value pair.
        default:
            return state;
    }
};