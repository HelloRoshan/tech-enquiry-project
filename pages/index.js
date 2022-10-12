// import Background from "./img/HomeBackground.jpg"
// import Image from 'next/image'
import React from 'react';
import {Button} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';

function App() {
  return (
      <Container className='d-flex align-items-center justify-content-center text-center min-vh-100 m-auto p-auto'>
        <div className="d-grid gap-4">
          <Link href='/levels' variant="primary">
            <Button variant="primary" size="lg">
              Play
            </Button>
          </Link>
          <Button variant="primary" size="lg">
            Leader Board
          </Button>
          <Button variant="primary" size="lg">
            Hints
          </Button>
          <Button variant="primary" size="lg">
            Feedbacks
          </Button>
        </div>
      </Container>
  );
}

export default App;

