import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
      <Row className="m-0">
            <Row className="footer-bg text-light text-start">
                <Col sm>
                <img
          alt=""
          src="https://logoeps.com/wp-content/uploads/2013/05/royal-enfield-eps-vector-logo.png"
          width="100"
          height="100"
          className="d-inline-block align-top"
        />
                <p>This is the official page you can come and visit our place and get update info </p>
                <div className="footer-button">
                <i class="fab fa-facebook-f me-3"></i>
                <i class="fab fa-twitter me-3"></i>
                <i class="fab fa-instagram me-3"></i>
                <i class="fab fa-youtube me-3"></i>
                </div>
            </Col>
            <Col sm className="footer-button">
                <h3>Motorcycles</h3>
                <p>Classic 350</p>
                <p>Meteor</p>
                <p>Interceptor 650</p>
                <p>Continental GT</p>
                <p>Himalayan</p>
                <p>Bullet</p>
            </Col>
            <Col sm className="footer-button">
                <h3>Rides & Events</h3>
                <p>Rides</p>
                <p>Events</p>
                <p>Ride Out</p>
            </Col>
            <Col sm className="footer-button">
                <h3>Support</h3>
                <p>Stores</p>
                <p>Contact Us</p>
                <p>Make It Yours</p>
                <p>Owner's Manual</p>
                <p>Become a Dealer</p>
                <p>Service Centres</p>
                <p>Book a Test Ride</p>
            </Col>
            <Col sm className="footer-button">
                <h3>About Us</h3>
                <p>Since 1901</p>
                <p>About Eicher Motors</p>
                </Col>
            <Col sm className="footer-button">
                <h3>News & Media</h3>
                <p>News</p>
                <p>Events</p>
                <p>Media Kit</p>
                <p>Press Releases</p>
                </Col>
            <Col sm className="footer-button">
                <h3>Careers</h3>
                <p>Job Openings</p>
                <p>Our Culture</p>
                </Col>
        </Row>
        <Row className="bg-dark text-light p-0">
            <p>© 2021. Royal Enfield. | *T&C apply. Images shown here may differ from the actual product.</p>
            <p>Private Import PolicyPrivacyTerms & ConditionsCookiesSitemap</p>
        </Row>
      </Row>
        
    );
};

export default Footer;