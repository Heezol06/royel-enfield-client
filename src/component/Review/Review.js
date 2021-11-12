import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';

const Review = () => {
    return (
        <div >
            <div className="d-flex justify-content-center">
                <h2>Review</h2>

            </div>
            <div>
                <div className="row ">
                <h2 className="text-center">Share Your Review</h2>
                <p className="text-center  ">Please type your email.</p>
                </div>
                <div>
                <Form.Control style={{marginLeft:"120px"}} className="w-75" size="sm" type="text" placeholder="Small text" />
                <br/>
                <p className="text-center  ">Share your opinion with us</p>
                <FloatingLabel style={{marginLeft:"120px"}} className="w-75   mb-5" controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px' }}
                    />
                </FloatingLabel>
                <button style={{marginLeft:"570px"}} className="button mb-4">Submit</button>
                </div>
            </div>
            </div>
    );
};

export default Review;