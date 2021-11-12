import React from 'react';
import { Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Bike = ({product}) => {
    const {name , img, description, _id, } = product
    return (
       <Card className="g-5">
    <Card.Img variant="top" src={img} />
    <Card.Body>
        <Card.Title>{name}</Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
      <Link to={`/bikeDetails/${_id}`}>
    <Button className="btn-danger" style={{backgroundColor:"#EDEDED", color:"red" ,border:"0px", padding:"8px 15px" , borderRadius:"5px"}}>Details </Button>
    </Link>
    </Card.Body>
  </Card>
    );
};

export default Bike;