import { EMPLOYEE_UPDATE } from './types';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};

export const employeeCreate = ({ name, phone, shift }) => {
    // return {
        console.log(name, phone, shift);
        // type: EMPLOYEE_CREATE,
        // payload: {name, phone, shift }
    // };
};