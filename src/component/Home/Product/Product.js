import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, img, description, _id } = product
    console.log(product);
    return (
        <div className="col-lg-4 col-md-6 col-sl-12 my-5">
            <Card className='mx-auto' style={{ width: '20rem' }}>
                <Card.Img variant="top" style={{ height: "190px" }} src={img} />
                <Card.Body>
                    <Card.Title>{name?.slice(0, 20)}...</Card.Title>
                    <Card.Text>
                        {description?.slice(0, 100)}
                    </Card.Text>
                    <Link to={`/bikeDetails/${_id}`}>
                        <Button className="btn-danger" style={{ backgroundColor: "#EDEDED", color: "red", border: "0px", padding: "8px 15px", borderRadius: "5px" }}>Details </Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;