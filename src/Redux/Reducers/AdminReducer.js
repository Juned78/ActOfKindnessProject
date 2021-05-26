
import { ADMIN_REGISTER_FAIL, ADMIN_REGISTER_SUCCESS, ADMIN_UPDATE_REQUEST, ADMIN_UPDATE_SUCCESS, ADMIN_UPDATE_FAIL, ADMIN_UPDATE_RESET, LIST_FETCH_SUCCESS, LIST_FETCH_FAIL, USER_LIST_REQUEST } from './../Constants/Constant';

export const AdminRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case ADMIN_REGISTER_SUCCESS:
            return { success: action.payload };
        case ADMIN_REGISTER_FAIL:
            return state;

        default:
            return state;

    }
}

export const listOfManagerReducer = (state = { loading: true, managers: [] }, action) => {
    switch (action.type) {
        case USER_LIST_REQUEST:
            return { loading: true };
        case LIST_FETCH_SUCCESS:
            return { loading: false, managers: action.payload };
        case LIST_FETCH_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const AdminUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case ADMIN_UPDATE_REQUEST:
            return { loading: true };
        case ADMIN_UPDATE_SUCCESS:
            return { loading: false, success: true };
        case ADMIN_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case ADMIN_UPDATE_RESET:
            return {};
        default:
            return state;
    }
}