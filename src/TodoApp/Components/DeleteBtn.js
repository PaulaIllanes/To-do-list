import React from "react"

const DeleteBtn = ({handleDelete}) => (
    <button onClick={handleDelete} className="btn btn-danger">Delete</button>
)

export default DeleteBtn