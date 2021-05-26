import { AMOUNT_TRANSFER_FAIL } from "../Constants/Constant";
import { AMOUNT_TRANSFER_SUCCESS } from './../Constants/Constant';
export const AmountReducer = (state = {}, action) => {
    switch (action.type) {
        case AMOUNT_TRANSFER_SUCCESS:
            return { success: action.payload };
        case AMOUNT_TRANSFER_FAIL:
            return state;

        default:
            return state;

    }
}