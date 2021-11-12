import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyOrder = () => {
    const {user} = useAuth()
    const [users, setUsers] = useState([])
    const [deleteCount, setDeleteCount] = useState(false);

    useEffect(()=>{
        fetch(`http://localhost:5000/orders`)
        .then(res => res.json())
        .then(result => setUsers(result))
    },[deleteCount])

    const handleDelete = (id) =>{
        fetch(`http://localhost:5000/deleteOrder/${id}`,{
            method: "DELETE",
            headers: {'content-type': 'application/json'},
        })
        .then(res=> res.json())
        .then(result => setDeleteCount(result))
        window.confirm("Are you sure you want to delete this Order!")
    }
    const matchUser = users.filter(bookingUser => bookingUser.email === user.email)
    // console.log(matchUser);
    return (
        <div>
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>Bike Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Username</th>
                </tr>
            </thead>
            <tbody>
                {
                    matchUser.map(match=>(
                        <tr key={match._id}>
                            <td>{match.Bike}</td>
                            <td>{match.Phone}</td>
                            <td>Address: {match.address },{ match.city}</td>
                            <td><Button className="bg-danger" onclick={()=>handleDelete(match._id)}>Delete</Button></td>
                        </tr>
                    ))
                }
                
            </tbody>
        </Table>
        </div>
    );
};

export default MyOrder;