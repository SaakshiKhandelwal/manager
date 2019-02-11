// responsible for everything related to authentication side of the app
import { EMAIL_CHANGED ,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER} from '../actions/types';

const INITIAL_STATE ={ email: '', password: '', user: null, error: '', loading: false};


export default (state= INITIAL_STATE, action) => {
    console.log(action);
    console.log(state);
    switch(action.type){
        case EMAIL_CHANGED:
            console.log('in here');
            return { ...state, email: action.payload };
            //make a new object which has all properties of state and an additional property
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload};
        case LOGIN_USER:
            return { ...state, loading: true, error: ''};
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload, error: ''};
            //RESET ALL THE INITIAL PROPERTIES OF THE STATE AFTER TAKING THE INITIAL STATE
        case LOGIN_USER_FAIL:
            return { ...state, error: 'AUTHENTICATION FAILED', password: '', loading: false};
        default:
            console.log('default');
            return state;
    }
};