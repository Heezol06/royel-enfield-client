import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const ManageAllOrder = () => {
    const [users, setUsers] = useState([])
    const [deleteCount, setDeleteCount] = useState(false);

    useEffect(()=>{
        fetch(`https://limitless-woodland-93842.herokuapp.com/orders`)
        .then(res => res.json())
        .then(result => setUsers(result))
    },[deleteCount])
    const handleDelete = (id) =>{
        fetch(`https://limitless-woodland-93842.herokuapp.com/orders/${id}`,{
            method: "DELETE",
            headers: {'content-type': 'application/json'},
        })
        .then(res => res.json())
        .then(result => setDeleteCount(result))
        console.log(id);
        window.confirm("Are you sure you want to delete this Order!")
        // location.reload();
    }
    return (
        <div>
            <h2>manage alll order</h2>
            <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>Bike Name</th>
                <th>Phone Number</th>
                <th>Address</th>
                <th>Email</th>
                <th>Username</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user=>(
                        <tr key={user._id}>
                            <td>{user.Bike}</td>
                            <td>{user.Phone}</td>
                            <td>Address: {user.address },{ user.city}</td>
                            <td>{user.email}</td>
                            <td><Button className="bg-danger" onClick={()=>handleDelete(user._id)}>Delete</Button></td>
                        </tr>
                    ))
                }
                
            </tbody>
        </Table>
        </div>
    );
};

export default ManageAllOrder;