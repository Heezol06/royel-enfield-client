import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

const Register = () => {
    const [registerData, setRegisterData] = useState({});
    const history = useHistory();
    const {user , registerUser, isLoading, authError } = useAuth()

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = {...registerData};
        newRegisterData[field] = value;
        setRegisterData(newRegisterData)
    }
    const handleRegisterSubmit = e =>{
        if (registerData.password !== registerData.password2) {
            alert('Your password did not match');
            return
        }
        console.log(registerData);
        registerUser(registerData.name ,registerData.email, registerData.password, history);

        e.preventDefault();
    }
    return (
        <Container>
  <Row>
    <Col className="col-lg-6 col-sm-12" style={{marginTop:"130px"}}>
    <Form onSubmit={handleRegisterSubmit}>
            <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control 
                type="text" 
                name= "name"
                onBlur={handleOnBlur}
                placeholder="Enter email"
                 />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                type="email" 
                name= "email"
                onBlur={handleOnBlur}
                placeholder="Enter email"
                 />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 w-100" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                type="password"
                name="password"
                onBlur={handleOnBlur}
                placeholder="Password"
                 />
            </Form.Group>
            <Form.Group className="mb-3 w-100" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control 
                type="password"
                name="password2"
                onBlur={handleOnBlur}
                placeholder="Confirm Your Password"
                 />
            </Form.Group>
            <p>Already Have An Account?<Link to="login">login</Link></p>
            <Button style={{backgroundColor:"#94b3fd"}} variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        {isLoading && <Spinner animation="border" variant="danger" />}

        {user?.email && <Alert variant="success">User Created successfully!</Alert>}
        {authError && <Alert severity="error">{authError}</Alert>}
    </Col>
    <Col className="col-lg-6 col-sm-12">
    <img src="https://i.ibb.co/VHYHZdD/4530765.jpg" className="w-100" alt="" />
    </Col>
  </Row>
</Container>
    );
};

export default Register;