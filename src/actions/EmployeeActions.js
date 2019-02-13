//email, phone, shift
//one action creator to handle all 3 kinds of updates
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS
} from './types';


export const employeeUpdate = ( { prop, value } ) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }     //object with prop and value key
    };
};

export const employeeCreate = ({name, phone, shift}) => {
    const { currentUser }= firebase.auth();

    return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({name, phone, shift})
        .then(() => {
            dispatch({ type: EMPLOYEE_CREATE });
            Actions.pop();
    });
};
};

export const employeesFetch= () => {
    const { currentUser }= firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => { 
                dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val()});
            })
    };
};