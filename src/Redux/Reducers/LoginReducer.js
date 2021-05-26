
import { Email_FAIL, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_FAIL, LOGOUT_SUCCESS, REGISTER_FAIL, REGISTER_SUCCESS, USER_DETAILS_RESET, USER_DETAILS_SUCCESS } from "../Constants/Constant";
import { USER_DETAILS_REQUEST, USER_DETSILS_FAIL, Email_SEND } from './../Constants/Constant';

export const userSigninReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { user: action.payload };
        case LOGIN_FAIL:
            return { error: action.payload };
        case LOGOUT_SUCCESS:
            return {};
        case LOGOUT_FAIL:
            return {};
        default:
            return state;
    }
}

export const forgetPasswordReducer = (state = {}, action) => {
    switch (action.type) {
        case Email_SEND:
            console.log("in reducer");
            console.log(action.payload);
            return { user: action.payload };

        case Email_FAIL:
            return { error: action.payload };
        default:
            return state;
    }
}
export const changePasswordReducer = (state = {}, action) => {
    switch (action.type) {
        case Email_SEND:
            console.log("in reducer");
            console.log(action.payload);
            return { user: action.payload };

        case Email_FAIL:
            return { error: action.payload };
        default:
            return state;
    }
}

export const userDetailsReducer = (state = { loading: true }, action) => {
    switch (action.type) {
        case USER_DETAILS_REQUEST:
            return { loading: true };
        case USER_DETAILS_SUCCESS:
            return { loading: false, user: action.payload };
        case USER_DETSILS_FAIL:
            return { loading: false, error: action.payload };
        case USER_DETAILS_RESET:
            return { loading: true };
        default:
            return state;
    }
}

export const authreducer = (state = {}, action) => {

    switch (action.type) {
        case REGISTER_SUCCESS:
            return { success: action.payload };
        case REGISTER_FAIL:
            return state;

        default:
            return state;

    }


};
