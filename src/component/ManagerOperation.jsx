import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

export default function ManagerOperation() {
    return (
        <div>
            <div>
                <div class="container-fluid w-25 mt-30">
                    <li>
                        <Link className="nav-link btn btn-outline-dark" aria-current="page" to="/addWorker"><Button variant="contained">Add Worker</Button></Link>
                    </li>
                    <li>
                        <Link className="nav-link btn btn-outline-dark" aria-current="page" to="/editManager"><Button variant="contained">Edit Manager</Button></Link>
                    </li>
                    <li>
                        <Link className="nav-link btn btn-outline-dark" aria-current="page" to="/deleteWorker"><Button variant="contained">Delete Worker</Button></Link>
                    </li>
                </div>

            </div>
        </div>
    )
}
