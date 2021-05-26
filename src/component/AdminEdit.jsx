import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ADMIN_UPDATE_RESET } from '../Redux/Constants/Constant';
import { updateAdmin } from './../Redux/Action/AdminAction';
export default function AdminEdit() {

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

    const dispatch = useDispatch();
    const userSignIn = useSelector((state) => state.userSignIn);
    const { user } = userSignIn;
    const userDetail = useSelector((state) => state.userDetails);
    const { user: userDetails } = userDetail;

    useEffect(() => {
        if (!user) {
            dispatch({ type: ADMIN_UPDATE_RESET });
            dispatch(userDetails(user._id));
        }
        else {
            setEmail(user.email);

        }
    }, [dispatch, user._id, user]);

    const adminEditClickHandler = async (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            dispatch(updateAdmin(
                {
                    userId: user._id, firstName, lastName, mobileNo, gender, email, password,
                    area, city, state, zip
                }));

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
                                <h3 className="text-center text-white font-italic" >Edit Admin</h3>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlfor="firstName">First Name</label>
                                        <input type="text" className="form-control" placeholder="Edit first name" value={user.firstName} onChange={e => setFirstname(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlfor="lastName">Last Name</label>
                                        <input type="text" className="form-control" placeholder="Edit last Name" value={user.lastName} onChange={e => setLastname(e.target.value)} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlfor="mobile">Mobile No</label> <input type="text" className="form-control" placeholder="Edit mobile number" value={user.mobileNo} onChange={e => setMobile(e.target.value)} />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlfor="inputState">Gender</label>
                                        <select id="inputState" className="form-control" value={user.gender} onChange={e => setGender(e.target.value)}>
                                            <option selected>Choose...</option>
                                            <option>Female</option>
                                            <option>Male</option>
                                            <option>Other</option>

                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlfor="email1">Email Id</label> <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} readOnly />
                                    </div>
                                    <div className="form-group">
                                        <label htmlfor="password">Password</label> <input
                                            type="password" name="password" className="form-control" id="password"
                                            placeholder="Password" value={user.password} onChange={e => setPassword(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlfor="password">Confirm Password</label> <input
                                            type="password" name="confirmPassword" className="form-control" id="confirmPassword"
                                            placeholder="Password" value={user.confirmPassword} onChange={e => setConfirmpassword(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlfor="inputAddress2">Area</label>
                                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={user.area} onChange={e => setArea(e.target.value)} />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlfor="inputCity">City</label>
                                            <input type="text" className="form-control" id="inputCity" vlaue={user.city} onChange={e => setCity(e.target.value)} />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlfor="inputState">State</label>
                                            <select id="inputState" className="form-control" vlaue={user.state} onChange={e => setState(e.target.value)}>
                                                <option selected>Choose...</option>
                                                <option>Punjab</option>
                                                <option>Delhi</option>
                                                <option>Pune</option>
                                                <option>Maharashtra</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-2">
                                            <label htmlfor="inputZip">Zip</label>
                                            <input type="text" className="form-control" id="inputZip" value={user.zip} onChange={e => setZip(e.target.value)} />
                                        </div>
                                    </div>


                                    <button type="submit" className="btn btn-dark btn-block h-10" onClick={adminEditClickHandler}>Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
