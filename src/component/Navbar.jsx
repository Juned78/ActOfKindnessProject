import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutAuthAction } from '../Redux/Action/AuthAction';
import '../nav.css';
export default function Navbar(props) {
    const userSignIn = useSelector(state => state.userSignIn);
    const { user } = userSignIn;
    const dispatch = useDispatch();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky">
            <div className="container-fluid">
                <img src="/images/log.jpg"></img>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent"  >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/home#footer">Contact Us</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/admim"></Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/aboutus">About Us</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-dark" type="submit">Search</button>
                    </form>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-auto md-col-1 ">
                        {user ? (
                            <li className="nav-item">
                                <Link className="nav-link" to="#logout" onClick={() => { dispatch(LogoutAuthAction()) }}>SignOut</Link>
                            </li>
                        ) : (<>

                            <li className="nav-item mr-2">
                                <Link className="nav-link btn btn-outline-dark" aria-current="page" to="/donarsList">List Of Donars</Link>
                            </li>
                            <li className="nav-item mr-2">
                                <Link className="nav-link btn btn-outline-dark" aria-current="page" to="/login">SignIn</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link btn btn-outline-dark" aria-current="page" to="/register">SignUp</Link>
                            </li>
                        </>)}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
