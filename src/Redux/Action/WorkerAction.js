

export const updateWorker = (workerUpdate) => async (dispatch, getState) => {
    dispatch({ type: USER_UPDATE_PROFILE_REQUEST });
    try {
        const { userSignin: { userInfo } } = getState();
        const { data } = await Axios.put('/api/editWorker', workerUpdate, {
            headers: { Authorization: `Bearer ${userInfo.token}` }
        });
        dispatch({ type: USER_UPDATE_PROFILE_SUCCESS, payload: data });
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
    }
    catch (error) {
        dispatch({
            type: USER_UPDATE_PROFILE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        });
    }
}