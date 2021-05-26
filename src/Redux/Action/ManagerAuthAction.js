import { MANAGER_UPDATE_REQUEST, MANAGER_UPDATE_FAIL, WORKER_DELETE_REQUEST, WORKER_DELETE_SUCCESS, MANAGER_REGISTER_SUCCESS, MANAGER_REGISTER_FAIL, WORKER_DELETE_FAIL, MANAGER_UPDATE_SUCCESS, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_DETSILS_FAIL, LIST_FETCH_FAIL, LIST_FETCH_SUCCESS, USER_LIST_REQUEST } from './../Constants/Constant';
import axios from 'axios';

export const WorkerAuthAction = (workerRegister) => async (dispatch) => {
    try {
        const { data } = await axios.post("http://localhost:8080/api/manager/addWorker", workerRegister)
        dispatch({ type: MANAGER_REGISTER_SUCCESS, payload: data })
        console.log(data);
        alert(data);
    } catch (error) {
        console.log(error);
        alert(error);
        dispatch({ type: MANAGER_REGISTER_FAIL, payload: error.message })
    }
}
export const getManagerByemail = (email) => async (dispatch, getState) => {
    dispatch({ type: USER_DETAILS_REQUEST });
    try {
        const { userSignin: { user } } = getState();
        const { data } = await axios.get(`/api/user/${email}`, {
            headers: { Authorization: `Bearer ${user.token}` }
        });
        dispatch({ type: USER_DETAILS_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({
            type: USER_DETSILS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        });
    }
}
export const updateManager = (managerUpdate) => async (dispatch, getState) => {
    dispatch({ type: MANAGER_UPDATE_REQUEST });
    try {
        const { userSignin: { userInfo } } = getState();
        const { data } = await axios.put('/api/admin/editManager', managerUpdate, {
            headers: { Authorization: `Bearer ${userInfo.token}` }
        });
        dispatch({ type: MANAGER_UPDATE_SUCCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
    }
    catch (error) {
        dispatch({
            type: MANAGER_UPDATE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        });
    }
}

export const ListOfWorkers = () => async (dispatch) => {
    dispatch({ type: USER_LIST_REQUEST });
    try {
        const { data } = await axios.get(
            "http://localhost:8080/api/manager/workerList"
        );
        dispatch({ type: LIST_FETCH_SUCCESS, payload: data });
    } catch (err) {
        dispatch({ type: LIST_FETCH_FAIL, payload: err.message });
    }
};

export const deleteWorker = (workerId) => async (dispatch, getState) => {
    dispatch({ type: WORKER_DELETE_REQUEST });
    try {
        const { userSignIn: { user } } = getState();
        const { data } = await axios.delete(`http://localhost:8080/api/manager/deleteWorker/${workerId}`, {
            headers: { Authorization: `Bearer ${user.token}` }
        });
        alert(data);
        dispatch({ type: WORKER_DELETE_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({
            type: WORKER_DELETE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        });
    }
}
