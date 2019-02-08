// responsible for everything related to authentication side of the app
import { EMAIL_CHANGED } from '../actions/types';

const INITIAL_STATE ={ email: ' '};

export default (state= INITIAL_STATE, action) => {
    console.log(state);
    switch(action.type){
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
            //make a new object which has all properties of state and an additional property
        default:
            return state;
    }
}