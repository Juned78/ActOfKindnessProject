import React from 'react'
import { useState, useEffect } from 'react'
import { LoginAuthAction } from '../Redux/Action/AuthAction'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

export default function SignIn(props) {
    const history = useHistory();
    const userSignIn = useSelector(state => state.userSignIn);
    const { user } = userSignIn;
    const [loginState, setloginState] = useState('')
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(user);
        if (user && user.user)
            props.history.push("/donar");
        else if (user && user.admin)
            props.history.push("/admin");
        else if (user && user.manager) {
            console.log("manager" + user);
            console.log("inside manager ");
            props.history.push("/manager");
        }
        else if (user) {
            console.log("home" + user);
            props.history.push("/");
        }

    }, [user])

    const loginClickHandler = async (e) => {
        e.preventDefault();
        dispatch(LoginAuthAction(loginState, history));

    }

    return (
        <div>
            <div className="mt-10">
                <div className="row jumbotron justify-content-md-center mx-1 ">
                    <div className="col-md-6">
                        <div className="card shadow-lg">
                            <div className="card-header bg-dark">
                                <h3 className="text-center text-white font-italic">Login In</h3>
                            </div>
                            <div className="card-body">
                                <form method="post">
                                    <div className="form-group ">
                                        <label htmlfor="email1">Email Id</label> <input
                                            type="email" className="form-control" name="email" id="email"
                                            placeholder="Enter email" onChange={e => {
                                                const email = e.target.value;
                                                setloginState({ ...loginState, ...{ email } })
                                            }} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlfor="passwords">Password</label> <input
                                            type="password" name="password" className="form-control" id="password"
                                            placeholder="Password" onChange={e => {
                                                const password = e.target.value;
                                                setloginState({ ...loginState, ...{ password } })
                                            }} />
                                        <Link className="nav-link " aria-current="page" to="/forgetPassword">Forget Password</Link>
                                    </div>
                                    <button type="submit" className="btn btn-dark btn-block h-10" onClick={loginClickHandler}>Login Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
