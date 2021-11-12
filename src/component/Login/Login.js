import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser } = useAuth()

    const location = useLocation();
    const history = useHistory()

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e =>{
        loginUser(loginData.email, loginData.password, location, history)
        console.log(loginUser)
        e.preventDefault()
    }
    return (
<Container>
  <Row style={{marginTop:"60px", marginBottom:"100px"}}>
    <Col className="col-lg-6 col-sm-12" style={{marginTop:"130px"}}>
    <Form onSubmit={handleLoginSubmit}>
            <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                 type="email"
                 name= "email"
                 onChange={handleOnChange}
                 placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 w-100" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                type="password" 
                name = "password"
                onChange={handleOnChange}
                placeholder="Password" />
            </Form.Group>
            <p>Already Have An Account? <Link to="register">login</Link></p>
            <Button style={{backgroundColor:"#94b3fd"}} variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </Col>
    <Col className="col-lg-6 col-sm-12 mt-5">
    <img src="https://i.ibb.co/GHbSwNJ/undraw-authentication-fsn5-3.png" className="w-100" alt="" />
    </Col>
  </Row>
</Container>

        
    );
};

export default Login;