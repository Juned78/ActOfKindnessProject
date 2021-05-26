import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

export default function Admin() {
    return (
        <div>
            <div>
                <div class="container-fluid w-25 mt-5">
                    <li>
                        <Link className="nav-link btn btn-outline-dark" aria-current="page" to="/adminregister"><Button variant="contained">New Registration</Button></Link>
                    </li>
                </div>

            </div>
        </div>
    )
}
