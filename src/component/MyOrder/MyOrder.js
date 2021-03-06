import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import useAuth from './../../hooks/useAuth';

const MyOrder = () => {
    const {user} = useAuth()
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
    const matchedUser=users.filter(u=>u.email=== user.email)
    console.log(matchedUser)
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
                    matchedUser.map(match=>(
                        <tr key={match._id}>
                            <td>{match.Bike}</td>
                            <td>{match.Phone}</td>
                            <td>Address: {match.address },{ match.city}</td>
                            <td><Button className="bg-danger" onClick={()=>handleDelete(match._id)}>Delete</Button></td>
                        </tr>
                    ))
                }
                
            </tbody>
        </Table>
        </div>
    );
};

export default MyOrder;