import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { authreducer, forgetPasswordReducer, userDetailsReducer, userSigninReducer } from "../Reducers/LoginReducer";
import thunk from "redux-thunk";
import { DonationReducer, listOfDonarsReducer } from './../Reducers/DonationReducer';
import { AmountReducer } from './../Reducers/AmountReducer';
import { ManagerRegisterReducer, managerUpdateReducer, managerDeleteReducer, listOfWorkerReducer } from './../Reducers/ManagerReducer';
import { WorkerRegisterReducer, workerUpdateReducer, WorkerDeleteReducer, workerRegisterReducer } from './../Reducers/WorkerReducer';
import { AdminRegisterReducer, AdminUpdateReducer, listOfManagerReducer } from './../Reducers/AdminReducer';
import { changePasswordReducer } from './../Reducers/LoginReducer';

const initState = {
  userSignIn: {

    user: localStorage.getItem("user") ? localStorage.getItem("user") : null
  }
}
const reducer = combineReducers({
  userSignIn: userSigninReducer,
  auth: authreducer,
  forget: forgetPasswordReducer,
  changePassword: changePasswordReducer,
  donation: DonationReducer,
  donarsList: listOfDonarsReducer,
  userDetails: userDetailsReducer,
  amount: AmountReducer,
  adminRegister: AdminRegisterReducer,
  adminUpdate: AdminUpdateReducer,
  managerRegister: ManagerRegisterReducer,
  managerList: listOfManagerReducer,
  managerUpdate: managerUpdateReducer,
  managerDelete: managerDeleteReducer,
  workerRegister: workerRegisterReducer,
  workerList: listOfWorkerReducer,
  workerUpdate: workerUpdateReducer,
  workerDelete: WorkerDeleteReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initState,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;