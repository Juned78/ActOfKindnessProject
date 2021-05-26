import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react'
import { AmountAuthAction } from '../Redux/Action/AmountAction';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function MoneyTransfer(props) {

    const [amountpaid, setAmount] = useState('');
    const amount = useSelector(state => state.amount);
    const userSignIn = useSelector(state => state.userSignIn);
    const dispatch = useDispatch();
    const { user } = userSignIn;
    const email = user.email;

    useEffect(() => {
        if (!amount)
            props.history.push("/");

    }, [amount])

    const transferClickHandler = (e) => {
        e.preventDefault()
        dispatch(AmountAuthAction({
            email, amountpaid
        }))
    }

    return (
        <div>
            <div className="mt-10">
                <div className="row jumbotron justify-content-md-center mx-1 ">
                    <div className="col-md-6">
                        <div className="card shadow-lg">
                            <div className="card-header bg-dark">
                                <h3 className="text-center text-white font-italic">Transfer Now</h3>
                            </div>
                            <div className="card-body">
                                <form method="post">
                                    <div className="form-group">
                                        <label htmlfor="email1">Email Id</label> <input
                                            type="email" className="form-control" name="email" id="email"
                                            placeholder="Enter email" value={user.email} readOnly />

                                    </div>
                                    <div className="form-group">
                                        <label htmlfor="lastName">Enter Amount</label>
                                        <input type="text" className="form-control" placeholder="Enter Amount" onChange={e => setAmount(e.target.value)} />
                                    </div>
                                    <button type="submit" className="btn btn-dark btn-block h-10" onSubmit={transferClickHandler}>Submit</button>
                                </form>
                                <li>
                                    <Link className="nav-link btn btn-outline-dark" aria-current="page" to="/"><Button variant="contained">Chancel</Button></Link >
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
