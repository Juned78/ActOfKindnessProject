import { Button } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';

export default function User() {
    return (
        <div>
            <div class="container-fluid w-25 mt-5">
                <li>
                    <Link className="nav-link btn btn-outline-dark" aria-current="page" to="/donatemoney"><Button variant="contained">Donate Money</Button></Link>
                </li>
                <li>
                    <Link className="nav-link btn btn-outline-dark" aria-current="page" to="/donateother"><Button variant="contained">Donate Other</Button></Link>
                </li>
            </div>

        </div>
    )
}
