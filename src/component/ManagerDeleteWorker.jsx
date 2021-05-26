import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react'
import { ListOfWorkers } from '../Redux/Action/ManagerAuthAction';
import { deleteWorker } from './../Redux/Action/ManagerAuthAction';

export default function ManagerDeleteWorker() {

    const workerList = useSelector(state => state.workerList);
    const { workers } = workerList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ListOfWorkers());
    }, [dispatch])

    const deleteHandeler = (userId) => {
        dispatch(deleteWorker(userId))
    }
    return (
        <div>

            <div>
                <div className="row">
                    <h1 className="ml-5">WorkerList</h1>
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
                        {workers ? workers.map((worker) => (
                            <tr key={worker.userId}>
                                <td>{worker.userId}</td>
                                <td>{worker.firstName}</td>
                                <td>{worker.lastName}</td>
                                <td>{worker.mobileNo}</td>
                                <td>{worker.address.city}</td>
                                <td>
                                    <button className="bg-danger" onClick={() => deleteHandeler(worker.userId)}>Delete</button>
                                </td>
                            </tr>
                        )) : ""}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
