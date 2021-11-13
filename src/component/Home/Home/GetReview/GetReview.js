import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const GetReview = () => {
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch(`https://limitless-woodland-93842.herokuapp.com/review`)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

    return (
        <div className="container ">
            <h1 className="text-center">Client <span className="text-danger">Review</span></h1>
            <Container>
                <Row className="d-flex m-1 shadow-sm mb-5">
            {
                reviews.map(review=> <Col className="col-lg-4 border border-danger rounded" style={{backgroundColor:"#D7E9F7"}}>
                      <h1 >{review.name}</h1>
                      <h5 className="text-danger">{review.email}</h5>
                      <p>{review.comment}</p>
                      </Col>
                  )
                }
                </Row>
                </Container>
        </div>
    );
};

export default GetReview;

// {/* <div className="col-lg-4 shadow-sm rounded">
//                     <h1>{review.name}</h1>
//                     <p>{review.email}</p>
//                     <p>{review.comment}</p>

//                 </div> */}