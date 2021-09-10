import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SocialMedia from '../components/SocialMedia';


function Footer() {

    return(
        <footer className="footer mt-5 bg-light text-dark">
            <Container fluid={true} >
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        <SocialMedia/>
                    </Col>
                    <Col className="p-0 d-flex justify-content-end">
                        © 2020 Elizabeth Lin
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;