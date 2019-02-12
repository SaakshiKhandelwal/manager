//email, phone, shift
//one action creator to handle all 3 kinds of updates
import {
    EMPLOYEE_UPDATE
} from './types';

export const employeeUpdate = ( { prop, value } ) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }     //object with prop and value key
    };
};