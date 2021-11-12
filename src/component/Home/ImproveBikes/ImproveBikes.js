import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const ImproveBikes = () => {
    return (
        <Container>
            <Row>
                <Col className="text-start">
                <p className="font-monospace" style={{color:"#FF5151"}}>PERFORMANCE</p>
                <h1>IMPROVE GENERAL <span className="text-danger">RIDEABILITY</span>  </h1>
                <img className="py-5 rounded-circle" style={{width:"90%"}} src="https://kickstart.bikeexif.com/wp-content/uploads/2014/04/royal-enfield-bullet-1-870x870.jpg" alt="" />
                </Col>
                <Col className="text-start mt-5">
                <div className="text-dark d-flex my-4">
                    <img  style={{height:"100px"}} src="https://templatekit.kotakkuning.com/gastros-garage/wp-content/uploads/sites/5/2021/07/Icon-4.png" alt="" />
                    <div className="ms-3">
                        <h4>Building on the legendary Bullet</h4>
                        <p>Taking its inspiration from the mechanical beauty of luxury timepieces...</p>
                    </div>
                </div>
                <div className="text-dark d-flex my-4">
                    <img  style={{height:"100px"}} src="https://templatekit.kotakkuning.com/gastros-garage/wp-content/uploads/sites/5/2021/07/Icon-2.png" alt="" />
                    <div className="ms-3">
                        <h4>'Neelkantha' by TNT Motorcycles</h4>
                        <p>Baggers were first introduced in the 1980s and were intended to be motorcycles capable of gobbling up serious touring miles...</p>
                    </div>
                </div>
                <div className="text-dark d-flex my-4">
                    <img  style={{height:"100px"}} src="https://templatekit.kotakkuning.com/gastros-garage/wp-content/uploads/sites/5/2021/07/Icon-3.png" alt="" />
                    <div className="ms-3">
                        <h4>'T_XX Interceptor' by Thrive Motorcycles</h4>
                        <p>Thrive Motorcycles is all about family. Founded by a group of friends who couldn't find the bikes that they wanted and decided to go their own way...</p>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ImproveBikes;