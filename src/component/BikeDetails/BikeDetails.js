import React, { useEffect, useState } from 'react';
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router';

const BikeDetails = () => {
    const [bikeDetails, setBikeDetails] = useState([]);
    const [bookingInfo , setBookingInfo] = useState({});
    console.log(bikeDetails);
    const {bikeId} = useParams();

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...bookingInfo};
        newInfo[field] = value;
        setBookingInfo(newInfo)
    }
    const handlePurchaseSubmit = e =>{
            const userBookingData = {
               ...bookingInfo};
               console.log(userBookingData);

               fetch('http://localhost:5000/addOrderInfo',{
                   method: "POST",
                   headers: {'content-type': 'application/json'},
                   body: JSON.stringify(userBookingData)
               })
               .then(res=> res.json())
               .then(result => console.log(result))
               window.confirm('Are you sure you want to order')
            window.location.reload()

        e.preventDefault()
    }

    useEffect(()=>{
        fetch(`http://localhost:5000/bikes/${bikeId}`)
        .then(res => res.json())
        .then(data => setBikeDetails(data))
    },[])

   
    return (
        <Container>
        <Row style={{marginTop:"60px", marginBottom:"100px"}}>
        <Col className="col-lg-6 col-sm-12" style={{marginTop:"130px"}}>
             <div className="container w-75 my-5 card mb-3" style={{backgroundColor:""}}>
                <div>
                <img src={bikeDetails?.img} className="card-img-top mt-3" alt="..." />
                 <div className="card-body">
                <h5 className="card-title">{bikeDetails?.name}</h5>
                <p className="card-text">{bikeDetails?.description}</p>
                    <Card.Text className="text-danger">
                       Price: <span>{bikeDetails?.price}</span>
                    </Card.Text>
                </div>
                </div> 
        </div>
        </Col>
        <Col className="col-lg-6 col-sm-12" style={{marginTop:"200px"}}>
            <h3 className="text-start">
                Order Your <span className="text-danger">Bike</span>
            </h3>
        <Form onSubmit={handlePurchaseSubmit} >
        <Form.Group className="mb-3 w-75 text-start" >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" onChange={handleOnChange} name="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3 w-75 text-start" >
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" onChange={handleOnChange} name="Phone" placeholder=" Phone number" />
        </Form.Group>
        <Form.Group className="mb-3 w-75 text-start">
            <Form.Label>Bike Model</Form.Label>
            <Form.Control type="text" onChange={handleOnChange} name="Bike" placeholder="Bike Model" value={bikeDetails.name}/>
        </Form.Group>
        <Form.Group className="mb-3 w-75 text-start">
            <Form.Label>Region</Form.Label>
            <Form.Control type="text" onChange={handleOnChange} name="region" placeholder="Please Choose your region" />
        </Form.Group>
        <Form.Group className="mb-3 w-75 text-start">
            <Form.Label>Your City</Form.Label>
            <Form.Control type="text" onChange={handleOnChange} name="city" placeholder="Please Choose your City" />
        </Form.Group>
        <Form.Group className="mb-3 w-75 text-start">
            <Form.Label>Your address</Form.Label>
            <Form.Control type="text" onChange={handleOnChange} name="address" placeholder="Please Choose your Address" />
        </Form.Group>

        
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
    </Col>
        </Row>
        </Container>
    );
};

export default BikeDetails;