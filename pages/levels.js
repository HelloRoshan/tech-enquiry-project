// import Background from "./img/HomeBackground.jpg"
// import Image from 'next/image'
import React from 'react';
import {Button} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';


function Levels() {
  return (
    
      <Container className='d-flex align-items-center justify-content-center text-center min-vh-100 m-auto p-auto'>
        <h1>Select Level</h1>
        <br></br>
        <div className="d-grid gap-4">
            <Button variant="primary" size="lg">
                1
            </Button>
            <Button variant="primary" size="lg">
                2
            </Button>
            <Button variant="primary" size="lg">
                3
            </Button>
            <Button variant="primary" size="lg">
                4
            </Button>
        </div>
     
      </Container>
  );
}

export default Levels;

