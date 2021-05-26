import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RegisterAuthAction } from '../Redux/Action/AuthAction';

export default function SignUp(props) {

    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [mobileNo, setMobile] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmpassword] = useState('');
    const [area, setArea] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');

    const history = useHistory();
    const userSignUp = useSelector(state => state.userSignUp);
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();


    useEffect(() => {
        if (userSignUp)
            props.history.push("/login");

    }, [userSignUp])

    const registerClickHandler = async (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            console.log(auth.user)
            dispatch(RegisterAuthAction(
                {
                    firstName, lastName, mobileNo, gender, email, password,
                    area, city, state, zip
                }, history));

        } else {
            alert("Both password not match please re-enter...");
        }

    }

    return (
        <div>
            <div className="mt-10">
                <div className="row jumbotron justify-content-md-center mx-1 ">
                    <div className="col-md-6">
                        <div className="card shadow-lg">
                            <div className="card-header bg-dark">
                                <h3 className="text-center text-white font-italic"  >Registration</h3>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlfor="firstName">First Name</label>
                                        <input type="text" className="form-control" name="fName" id="fName" placeholder="Enter first name" value={firstName} onChange={e => { setFirstname(e.target.value) }} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlfor="lastName">Last Name</label>
                                        <input type="text" className="form-control" name="lName" id="lName" placeholder="Enter last Name" onChange={e => setLastname(e.target.value)} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlfor="mobile">Mobile No</label> <input type="text" className="form-control" name="mob" id="mob" placeholder="Enter mobile number" onChange={e => setMobile(e.target.value)} />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlfor="inputState">Gender</label>
                                        <select id="inputState" className="form-control" onChange={e => setGender(e.target.value)}>
                                            <option selected>Choose...</option>
                                            <option>Female</option>
                                            <option>Male</option>
                                            <option>Other</option>

                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlfor="email1">Email Id</label> <input
                                            type="email" className="form-control" name="email" id="email"
                                            placeholder="Enter email" onChange={e => setEmail(e.target.value)} />

                                    </div>
                                    <div className="form-group">
                                        <label htmlfor="password">Password</label> <input
                                            type="password" name="password" className="form-control" id="password"
                                            placeholder="Password" onChange={e => setPassword(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlfor="password">Confirm Password</label> <input
                                            type="password" name="confirmPassword" className="form-control" id="confirmPassword"
                                            placeholder="Password" onChange={e => setConfirmpassword(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlfor="inputAddress2">Area</label>
                                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" onChange={e => setArea(e.target.value)} />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlfor="inputCity">City</label>
                                            <input type="text" className="form-control" id="inputCity" onChange={e => setCity(e.target.value)} />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlfor="inputState">State</label>
                                            <select id="inputState" className="form-control" onChange={e => setState(e.target.value)}>
                                                <option selected>Choose...</option>
                                                <option>Punjab</option>
                                                <option>Delhi</option>
                                                <option>Pune</option>
                                                <option>Maharashtra</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-2">
                                            <label htmlfor="inputZip">Zip</label>
                                            <input type="text" className="form-control" id="inputZip" onChange={e => setZip(e.target.value)} />
                                        </div>
                                    </div>


                                    <button type="submit" className="btn btn-dark btn-block h-10" onClick={registerClickHandler}>Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
