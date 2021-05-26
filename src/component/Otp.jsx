import React from 'react'
import { useState } from 'react'
import { sendOtpAction } from '../Redux/Action/AuthAction';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Otp() {
    const [loginState, setloginState] = useState('')
    const dispatch = useDispatch();

    const sendOtpClickHandler = async (e) => {
        e.preventDefault();
        dispatch(sendOtpAction(loginState));

    }
    return (
        <div>
            <section className="form my-3 mx-5 m-0 p-0 mt-5">
                <div className="container border-darken-1 justify-content-center m-auto">
                    <div className="row no-gutters w-50 justify-content-center">
                        <div className="col-lg-8 px-8 pt-5">
                            <h1 className="font-weight-bold py-1 mr-5">Enter Otp</h1>
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
                                <div className="form-row ">
                                    <div className="col-lg-8 px-8">
                                        <input type="email" placeholder="Enter Otp" className="form-control ml-4 my-1 p-1 "
                                            onChange={e => {
                                                const otp = e.target.value;
                                                setloginState({ ...loginState, ...{ otp } })
                                            }} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-lg-8 mb-5">
                                        <button type="button" className="btn1 mt-1 ml-4" onClick={sendOtpClickHandler}>Login</button>
                                    </div>
                                    <Link className="ml-5" to="/changePassword">Next</Link>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}
