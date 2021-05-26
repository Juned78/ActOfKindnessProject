
import { MANAGER_REGISTER_SUCCESS, MANAGER_REGISTER_FAIL, MANAGER_UPDATE_SUCCESS, MANAGER_UPDATE_FAIL, MANAGER_DELETE_REQUEST, MANAGER_DELETE_SUCCESS, MANAGER_DELETE_RESET, MANAGER_UPDATE_REQUEST, MANAGER_UPDATE_RESET, MANAGER_DELETE_FAIL, USER_LIST_REQUEST, LIST_FETCH_SUCCESS, LIST_FETCH_FAIL } from './../Constants/Constant';

export const ManagerRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case MANAGER_REGISTER_SUCCESS:
            return { success: action.payload };
        case MANAGER_REGISTER_FAIL:
            return state;

        default:
            return state;

    }
}

export const listOfWorkerReducer = (state = { loading: true, workers: [] }, action) => {
    switch (action.type) {
        case USER_LIST_REQUEST:
            return { loading: true };
        case LIST_FETCH_SUCCESS:
            return { loading: false, workers: action.payload };
        case LIST_FETCH_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const managerUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case MANAGER_UPDATE_REQUEST:
            return { loading: true };
        case MANAGER_UPDATE_SUCCESS:
            return { loading: false, success: true };
        case MANAGER_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case MANAGER_UPDATE_RESET:
            return {};
        default:
            return state;
    }
}

export const managerDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case MANAGER_DELETE_REQUEST:
            return { loading: true };
        case MANAGER_DELETE_SUCCESS:
            return { loading: false, success: true };
        case MANAGER_DELETE_FAIL:
            return { loading: false, error: action.payload };
        case MANAGER_DELETE_RESET:
            return {};
        default:
            return state;
    }
};