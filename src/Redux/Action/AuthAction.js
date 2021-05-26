import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT_SUCCESS, LOGOUT_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, Email_FAIL } from '../Constants/Constant';
import { Redirect } from 'react-router';
import { Email_SEND } from './../Constants/Constant';


const RegisterAuthAction = (user) => async (dispatch) => {
    try {
        const { data } = await axios.post("http://localhost:8080/api/unauthuser/register", user);
        dispatch({ type: REGISTER_SUCCESS, payload: data });
        console.log(data);
        alert(data);
    } catch (error) {
        console.log(error);
        alert(error);
        dispatch({ type: REGISTER_FAIL, payload: error.message })
    }
}


const LoginAuthAction = (loginState) => async (dispatch) => {
    try {
        const { data } = await axios.post("http://localhost:8080/api/unauthuser/login", loginState);
        dispatch({ type: LOGIN_SUCCESS, payload: data });
        localStorage.setItem("user", data);
    } catch (error) {
        console.log(error);
        alert("Invalid Email / password");
        dispatch({ type: LOGIN_FAIL, payload: error.message })
    }
}

const forgetPasswordAction = (loginState) => async (dispatch) => {
    try {
        const { data } = await axios.post("http://localhost:8080/api/forgot/generateOtp", loginState);
        dispatch({ type: Email_SEND, payload: data });
        console.log(data);
        alert(data.message);
    } catch (error) {
        console.log(error);
        alert(error);
        dispatch({ type: Email_FAIL, payload: error.message })
    }
}

const sendOtpAction = (loginState) => async (dispatch) => {
    try {
        const { data } = await axios.post("http://localhost:8080/api/forgot/verifyOtp", loginState);
        dispatch({ type: Email_SEND, payload: data });
        localStorage.setItem("user", data);
        console.log(data);
        alert(data);
    } catch (error) {
        console.log(error);
        alert(error);
        dispatch({ type: Email_FAIL, payload: error.message })
    }
}

const ChangePasswordAction = (loginState) => async (dispatch) => {
    try {
        const { data } = await axios.post("http://localhost:8080/api/forgot/changePassword", loginState);
        dispatch({ type: Email_SEND, payload: data });
        localStorage.setItem("user", data);
        console.log(data);
        alert(data);
    } catch (error) {
        console.log(error);
        alert("Invalid Email / password");
        dispatch({ type: Email_FAIL, payload: error.message })
    }
}

const LogoutAuthAction = () => async (dispatch) => {
    try {
        dispatch({ type: LOGOUT_SUCCESS });
        localStorage.removeItem("user");
        <Redirect to="/" />
    } catch (error) {
        console.log(error);
        alert(error);
        dispatch({ type: LOGOUT_FAIL, payload: error.message })
    }
}





export { RegisterAuthAction, LoginAuthAction, LogoutAuthAction, forgetPasswordAction, ChangePasswordAction, sendOtpAction };