import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import resume from "../pics/resume.jpg";

class Resume extends React.Component {

    render()  {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">

                    <img src={resume} alt="resume" width='600' height='780'/>
                    
                </Row>
            </Container>

        );
    }
}

export default Resume;