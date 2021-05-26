import React from 'react'
import '../login.css';
import { useState, useEffect } from 'react'
import { LoginAuthAction } from '../Redux/Action/AuthAction'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
export default function Login(props) {
    const history = useHistory();
    const userSignIn = useSelector(state => state.userSignIn);
    const { user } = userSignIn;
    const [loginState, setloginState] = useState('')
    const dispatch = useDispatch();

    useEffect(() => {
        if (user && user.user)
            props.history.push("/donar");
        else if (user && user.admin)
            props.history.push("/admin");
        else if (user && user.manager)
            props.history.push("/manager")
        else if (user)
            props.history.push("/");
    }, [user])

    const loginClickHandler = async (e) => {
        e.preventDefault();
        dispatch(LoginAuthAction(loginState, history));

    }

    return (
        <div>
            <section className="form my-4 mx-5 m-0 p-0 ">
                <div className="container border-darken-1">
                    <div className="row no-gutters">
                        <div className="col-lg-4">
                            <img src="/images/login.jpg" className="img-fluid loginimg" />
                        </div>
                        <div className="col-lg-8 px-8 pt-5">
                            <h1 className="font-weight-bold py-1 mr-5">Login-Now</h1>
                            <form>
                                <div className="form-row ">
                                    <div className="col-lg-8 px-8 ml-5">
                                        <input type="email" placeholder="Enter Email" className="form-control ml-4 my-1 p-1 "
                                            onChange={e => {
                                                const email = e.target.value;
                                                setloginState({ ...loginState, ...{ email } })
                                            }} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-lg-8 px-8 ml-5">
                                        <input type="password" placeholder="Enter password" className="form-control ml-4 my-1 p-1"
                                            onChange={e => {
                                                const password = e.target.value;
                                                setloginState({ ...loginState, ...{ password } })
                                            }} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-lg-8 ml-5">
                                        <button type="button" className="btn1 mt-1 ml-4" onClick={loginClickHandler}>Login</button>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-lg-7 mt-3 ">
                                        <div className="ml-5">
                                            <Link className="ml-5" to="/forgetPassword">Forget Password</Link>
                                            <p className="ml-5">Dont'have Account ?<Link className="ml-2" to="/register">Register Now</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}
