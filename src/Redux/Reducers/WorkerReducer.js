
import { WORKER_REGISTER_FAIL, WORKER_REGISTER_SUCCESS, WORKER_UPDATE_REQUEST, WORKER_UPDATE_SUCCESS, WORKER_UPDATE_FAIL, WORKER_UPDATE_RESET, WORKER_DELETE_REQUEST, WORKER_DELETE_SUCCESS, WORKER_DELETE_RESET, WORKER_DELETE_FAIL } from './../Constants/Constant';


export const workerRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case WORKER_REGISTER_SUCCESS:
            return { success: action.payload };
        case WORKER_REGISTER_FAIL:
            return state;

        default:
            return state;

    }
}

export const workerUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case WORKER_UPDATE_REQUEST:
            return { loading: true };
        case WORKER_UPDATE_SUCCESS:
            return { loading: false, success: true };
        case WORKER_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case WORKER_UPDATE_RESET:
            return {};
        default:
            return state;
    }
}

export const WorkerDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case WORKER_DELETE_REQUEST:
            return { loading: true };
        case WORKER_DELETE_SUCCESS:
            return { loading: false, success: true };
        case WORKER_DELETE_FAIL:
            return { loading: false, error: action.payload };
        case WORKER_DELETE_RESET:
            return {};
        default:
            return state;
    }
};