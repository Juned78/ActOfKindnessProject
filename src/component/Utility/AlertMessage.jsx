import React from 'react'

export default function AlertMessage(props) {
    return (
        <div className="alert alert-success">{props.children}
                    <button className="close" onClick={props.onClick}><span>&times;</span></button></div>
    )
}
