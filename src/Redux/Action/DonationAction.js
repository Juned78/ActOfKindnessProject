import Axios from 'axios'
import { Redirect } from 'react-router';
import { DONATION_FAIL, DONATION_SUCCESS, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_DETSILS_FAIL, USER_LIST_REQUEST, LIST_FETCH_SUCCESS, LIST_FETCH_FAIL } from './../Constants/Constant';

const DonateAuthAction = (donate) => async (dispatch) => {
    try {
        const { data } = await Axios.post("http://localhost:8080/api/donation/donate", donate)
        dispatch({ type: DONATION_SUCCESS, payload: data })
        console.log(data);
        alert(data);
        <Redirect to="/" />
    } catch (error) {
        console.log(error);
        alert(error);
        dispatch({ type: DONATION_FAIL, payload: error.message })
    }
}

export const listOfDonars = () => async (dispatch) => {
    dispatch({ type: USER_LIST_REQUEST });
    try {
        const { data } = await Axios.get('http://localhost:8080/api/userList');
        dispatch({ type: LIST_FETCH_SUCCESS, payload: data });
        console.log(data);
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        console.log(message);
        dispatch({ type: LIST_FETCH_FAIL, payload: message });
    }
};

export const userDetails = (userId) => async (dispatch, getState) => {
    dispatch({ type: USER_DETAILS_REQUEST });
    try {
        const { userSignUp: { userInfo } } = getState();
        const { data } = await Axios.get(`/api/users/${userId}`, {
            headers: { Authorization: `Bearer ${userInfo.token}` }
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
export { DonateAuthAction }