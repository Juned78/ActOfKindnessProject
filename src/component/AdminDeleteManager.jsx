import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react'
import { deleteManager, listOfManagers } from '../Redux/Action/AdminAction';

export default function AdminDeleteManager() {
    const managerList = useSelector(state => state.managerList);
    const { managers } = managerList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listOfManagers());
    }, [dispatch])

    const deleteHandeler = (userId) => {
        dispatch(deleteManager(userId))
    }
    return (
        <div>

            <div>
                <div className="row">
                    <h1 className="ml-5">ManagersList</h1>
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Mobile</th>
                            <th>City</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {managers ? managers.map((manager) => (
                            <tr key={manager.userId}>
                                <td>{manager.userId}</td>
                                <td>{manager.firstName}</td>
                                <td>{manager.lastName}</td>
                                <td>{manager.mobileNo}</td>
                                <td>{manager.address.city}</td>
                                <td>
                                    <button className="bg-danger" onClick={() => deleteHandeler(manager.userId)}>Delete</button>
                                </td>
                            </tr>
                        )) : ""}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
