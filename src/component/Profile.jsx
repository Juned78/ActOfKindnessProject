import React from 'react'
import Auth from './../services/Auth';

export default function Profile() {
    useEffect = () => {
        const user = Auth.getCurrentUser();
        setState({ user: user });
    }

    render = () => {
        let userInfo = "";
        const user = this.state.user;

        if (user && user.accessToken) {

            let roles = "";

            user.authorities.forEach(authority => {
                roles = roles + " " + authority.authority
            });

            userInfo = (
                <div style={{ marginTop: "20px" }}>
                    <Alert variant="info">
                        <h2>User Info</h2>
                        <ul>
                            <li>Username: {user.email}</li>
                            <li>Access Token: {user.accessToken}</li>
                            <li>Authorities: {roles}</li>
                        </ul>
                    </Alert>
                </div>
            );
        } else {
            userInfo = <div style={{ marginTop: "20px" }}>
                <Alert variant="primary">
                    <h2>Profile Component</h2>
                    <Button color="success"><Link to="/signin"><span style={{ color: "white" }}>Login</span></Link></Button>
                </Alert>
            </div>
        }
    }
    return (
        <div>
            <div>
            </div>
        </div>
    )
}
