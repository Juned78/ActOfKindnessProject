import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

export default function AdminOperation() {
    return (
        <div>
            <div class="container-fluid w-25 mt-30">
                <li>
                    <Link className="nav-link btn btn-outline-dark" aria-current="page" to="/addManager"><Button variant="contained">Add Manager</Button></Link>
                </li>
                <li>
                    <Link className="nav-link btn btn-outline-dark" aria-current="page" to="/editAdmin"><Button variant="contained">Edit Admin</Button></Link>
                </li>
                <li>
                    <Link className="nav-link btn btn-outline-dark" aria-current="page" to="/deleteManager"><Button variant="contained">Delete Manager</Button></Link>
                </li>
            </div>

        </div>
    )
}
