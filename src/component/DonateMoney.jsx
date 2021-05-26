import React from 'react'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function DonateMoney() {
    return (
        <div>
            <div class="container-fluid w-25 mt-5">
                <li>
                    <Link className="nav-link btn btn-outline-dark" aria-current="page" to="/paynow"><Button variant="contained">PayPal</Button></Link>
                </li>
                <li>
                    <Link className="nav-link btn btn-outline-dark" aria-current="page" to="/paynow"><Button variant="contained">GooglePay</Button></Link>
                </li>
                <li>
                    <Link className="nav-link btn btn-outline-dark" aria-current="page" to="/paynow"><Button variant="contained">Stripe</Button></Link>
                </li>
            </div>

        </div>
    )
}
