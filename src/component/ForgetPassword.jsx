import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { forgetPasswordAction } from '../Redux/Action/AuthAction';

export default function ForgetPassword() {

    const userSignIn = useSelector(state => state.userSignIn);
    const { user } = userSignIn;
    const [loginState, setloginState] = useState('')
    const dispatch = useDispatch();

    const forgetClickHandler = async (e) => {
        e.preventDefault();
        dispatch(forgetPasswordAction(loginState));

    }
    return (
        <div>
            <section className="form my-3 mx-5 m-0 p-0 mt-5">
                <div className="container border-darken-1 justify-content-center m-auto">
                    <div className="row no-gutters w-50 justify-content-center">
                        <div className="col-lg-8 px-8 pt-5">
                            <h1 className="font-weight-bold py-1 mr-5">Enter Email</h1>
                            <form>
                                <div className="form-row ">
                                    <div className="col-lg-8 px-8">
                                        <input type="email" placeholder="Enter Email" className="form-control ml-4 my-1 p-1 "
                                            onChange={e => {
                                                const email = e.target.value;
                                                setloginState({ ...loginState, ...{ email } })
                                            }} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-lg-8 mb-5">
                                        <button type="button" className="btn1 mt-1 ml-4" onClick={forgetClickHandler}>Send</button>
                                    </div>
                                    <Link className="ml-5" to="/Otp">Next</Link>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}
