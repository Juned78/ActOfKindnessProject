import {
    ADMIN_REGISTER_FAIL, ADMIN_REGISTER_SUCCESS, ADMIN_UPDATE_REQUEST, ADMIN_UPDATE_SUCCESS,
    ADMIN_UPDATE_FAIL, MANAGER_DELETE_SUCCESS,
    MANAGER_REGISTER_SUCCESS, MANAGER_REGISTER_FAIL, LIST_FETCH_FAIL, LIST_FETCH_SUCCESS, USER_LIST_REQUEST, MANAGER_DELETE_FAIL, MANAGER_DELETE_REQUEST
} from './../Constants/Constant';
import axios from 'axios'
import { Redirect } from 'react-router';

const AdminAuthAction = (adminRegister) => async (dispatch) => {
    try {
        const { data } = await axios.post("http://localhost:8080/api/unauthuser/signUp/admin", adminRegister)
        dispatch({ type: ADMIN_REGISTER_SUCCESS, payload: data })
        console.log(data);
        alert(data);
    } catch (error) {
        console.log(error);
        alert(error);
        dispatch({ type: ADMIN_REGISTER_FAIL, payload: error.message })
    }
}

export const ManagerAuthAction = (managerRegister) => async (dispatch, getState) => {
    try {
        const { userSignIn: { user } } = getState();
        const { data } = await axios.post("http://localhost:8080/api/admin/addManager", managerRegister, {
            headers: { Authorization: `Bearer ${user.token}` }
        })
        dispatch({ type: MANAGER_REGISTER_SUCCESS, payload: data })
        console.log(data);
        alert(data);
    } catch (error) {
        console.log(error);
        alert(error);
        dispatch({ type: MANAGER_REGISTER_FAIL, payload: error.message })
    }
}

export const updateAdmin = (adminUpdate) => async (dispatch, getState) => {
    dispatch({ type: ADMIN_UPDATE_REQUEST });
    try {
        const { userSignIn: { user } } = getState();
        const { data } = await axios.put('/api/updateAdmin', adminUpdate, {
            headers: { Authorization: `Bearer ${user.token}` }
        });
        dispatch({ type: ADMIN_UPDATE_SUCCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
    }
    catch (error) {
        dispatch({
            type: ADMIN_UPDATE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        });
    }
}

export const listOfManagers = () => async (dispatch, getState) => {
    dispatch({ type: USER_LIST_REQUEST });
    try {
        const { userSignIn: { user }, } = getState();
        const { data } = await axios.get('http://localhost:8080/api/admin/managerList', {
            headers: { Authorization: `Bearer ${user.token}`, },
        });
        dispatch({ type: LIST_FETCH_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({ type: LIST_FETCH_FAIL, payload: message });
    }
};

export const deleteManager = (managerId) => async (dispatch, getState) => {
    dispatch({ type: MANAGER_DELETE_REQUEST });
    try {
        const { userSignIn: { user } } = getState();
        const { data } = await axios.delete(`http://localhost:8080/api/admin/deleteManager/${managerId}`, {
            headers: { Authorization: `Bearer ${user.token}` }
        });
        alert(data);
        dispatch({ type: MANAGER_DELETE_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({
            type: MANAGER_DELETE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        });
    }
}
export { AdminAuthAction }