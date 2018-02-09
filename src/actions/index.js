import { EMAIL_CHANGED } from './types';

export default emailChanged = (text) => {
    return{
        type: EMAIL_CHANGED,
        payload: text
    };
}
