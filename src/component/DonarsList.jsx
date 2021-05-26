import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { listOfDonars } from './../Redux/Action/DonationAction';
import { useEffect } from 'react'
export default function DonarsList() {

    const donarsList = useSelector(state => state.donarsList);
    const { donars } = donarsList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listOfDonars());
    }, [dispatch])
    return (
        <div>

            <div>
                <div className="row">
                    <h1 className="ml-5">DonarsList</h1>
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Mobile</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {donars ? donars.map((donar) => (
                            <tr key={donar.userId}>
                                <td>{donar.userId}</td>
                                <td>{donar.firstName}</td>
                                <td>{donar.lastName}</td>
                                <td>{donar.mobileNo}</td>
                                <td>{donar.address.city}</td>
                            </tr>
                        )) : ""}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
