import React from 'react';
import { Container, Nav, Navbar, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Headers = () => {
  const {user, logout} = useAuth()

//   const handleLogOut = () =>{
//     logout()
// }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container className="d-flex justify-content-between">
  <Link to="/home">
  <Navbar.Brand >
  <img
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Royal_Enfield_logo_new.svg"
          width="150"
          height="30"
          className="d-inline-block align-top"
        /></Navbar.Brand>
  </Link>
  <div>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav>
    <Link to="/home" className="text-decoration-none me-4">
    <Nav.Link eventKey={2} href="#memes" >
              Home
            </Nav.Link>
      </Link>
    <Link to="/bikes" className="text-decoration-none me-4">
            <Nav.Link eventKey={2} href="#memes" >
              Bikes
            </Nav.Link>
      </Link>
    {user.email ?<Link to="/dashboard" className="text-decoration-none me-4">
            <Nav.Link eventKey={2} href="#memes" >
              Dashboard
            </Nav.Link>
      </Link>
    : ""  
    }
      {user.email ?
      <Button className="bg-danger" onClick={logout}>Logout</Button>
      :
        <Link to="/login" className="text-decoration-none">
            <Nav.Link eventKey={2} href="#memes" >
              Login
            </Nav.Link>
      </Link>
      }
      {user.email ?
        <p className="text-light mt-0 ms-3">{user.displayName}</p>
      : ''
      }
    </Nav>
  </Navbar.Collapse>
  </div>
  </Container>
</Navbar>
        </div>
    );
};

export default Headers;