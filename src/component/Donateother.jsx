import React from 'react'
import { DonateAuthAction } from '../Redux/Action/DonationAction';
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

export default function Donateother(props) {

    const [email, setEmail] = useState('')
    const [catagory, setCatagory] = useState('');
    const [other, setOther] = useState('');
    const [qty, setQty] = useState('');
    const [houseno, setHouseNo] = useState('');
    const [zip, setPinNo] = useState('');
    const [area, setArea] = useState('');
    const [landmark, setLandmark] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    const donation = useSelector(state => state.donation);
    const userSignIn = useSelector((state) => state.userSignIn);
    const { user } = userSignIn;
    const dispatch = useDispatch();

    useEffect(() => {
        setEmail(user.email);
        if (!donation)
            props.history.push("/");

    }, [donation])

    const donationClickHandler = (e) => {
        e.preventDefault();
        dispatch(DonateAuthAction({
            email, catagory, other, qty, houseno, area, zip, landmark, city, state
        }))
    }


    return (
        <div>

            <div className="mt-10">
                <div className="row jumbotron justify-content-md-center mx-1 ">
                    <div className="col-md-6">
                        <div className="card shadow-lg">
                            <div className="card-header bg-dark">
                                <h3 className="text-center text-white font-italic"  >Donate</h3>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlfor="email1">Email Id</label> <input
                                            type="email" className="form-control" name="email" id="email"
                                            placeholder="Enter email" value={user.email} readOnly />

                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlfor="inputState">Select Catagory</label>
                                        <select id="inputState" className="form-control" onChange={e => setCatagory(e.target.value)}>
                                            <option selected>Choose...</option>
                                            <option>Food</option>
                                            <option>Cloths</option>
                                            <option>Furniture</option>
                                            <option>Devices</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlfor="inputAddress2">Other</label>
                                        <input type="text" className="form-control" placeholder="Please insert other then catagory" onChange={e => setOther(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlfor="inputAddress2">Quantity</label>
                                        <input type="text" className="form-control" placeholder="Enter quantity if any" onChange={e => setQty(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlfor="inputAddress2">House No</label>
                                        <input type="text" className="form-control" id="inputAddress2" placeholder="House No" onChange={e => setHouseNo(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlfor="inputAddress2">Landmak</label>
                                        <input type="text" className="form-control" id="inputAddress2" placeholder="Near by" onChange={e => setLandmark(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlfor="inputAddress2">Area</label>
                                        <input type="text" className="form-control" id="inputAddress2" placeholder="Name of area" onChange={e => setArea(e.target.value)} />
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
                                            <label htmlfor="inputZip">Pincode</label>
                                            <input type="text" className="form-control" id="inputZip" onChange={e => setPinNo(e.target.value)} />
                                        </div>
                                    </div>


                                    <button type="submit" className="btn btn-dark btn-block h-10" onClick={donationClickHandler}>Donate Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
