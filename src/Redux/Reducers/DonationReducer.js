import { DONATION_FAIL, LIST_FETCH_FAIL } from "../Constants/Constant";
import { DONATION_SUCCESS, LIST_FETCH_SUCCESS, USER_LIST_REQUEST } from './../Constants/Constant';

export const DonationReducer = (state = {}, action) => {
    switch (action.type) {
        case DONATION_SUCCESS:
            return { success: action.payload };
        case DONATION_FAIL:
            return state;

        default:
            return state;

    }
}

export const listOfDonarsReducer = (state = { loading: true, donars: [] }, action) => {
    switch (action.type) {
        case USER_LIST_REQUEST:
            return { loading: true };
        case LIST_FETCH_SUCCESS:
            return { loading: false, donars: action.payload };
        case LIST_FETCH_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};