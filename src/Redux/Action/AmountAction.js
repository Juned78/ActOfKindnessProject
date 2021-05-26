import { AMOUNT_TRANSFER_FAIL } from "../Constants/Constant";
import { AMOUNT_TRANSFER_SUCCESS } from './../Constants/Constant';
import { Axios } from 'axios';
import { Redirect } from 'react-router';
const AmountAuthAction = (amount) => async (dispatch) => {

    try {
        const { data } = await Axios.post("http://localhost:8080/api/donation/amount", amount)
        dispatch({ type: AMOUNT_TRANSFER_SUCCESS, payload: data })
        console.log(data);
        alert(data);
        <Redirect to="/" />
    } catch (error) {
        console.log(error);
        alert(error);
        dispatch({ type: AMOUNT_TRANSFER_FAIL, payload: error.message })
    }
}
export { AmountAuthAction }