// import Background from "./img/HomeBackground.jpg"
// import Image from 'next/image'
import React from 'react';
import {Button, Card} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';

function Levels() {
  return (
    
    <Container className='d-flex align-items-center justify-content-center text-center min-vh-100 m-auto p-auto'>
    <div className="d-grid gap-4">
        <Card className='p-4 rounded shadow-lg'>
        <h1>Select Level</h1>
        <br></br>
        
        <Link href={{ pathname: '/category', query: { level: '1' } }} variant="primary">
             <Button variant="primary" size="lg" className='mb-3'>
                1
            </Button>
            </Link>
            <Link href={{ pathname: '/category', query: { level: '2' } }} variant="primary">
             <Button variant="primary" size="lg" className='mb-3'>
                2
            </Button>
            </Link>
            <Link href={{ pathname: '/category', query: { level: '3' } }} variant="primary">
             <Button variant="primary" size="lg" className='mb-3'>
                3
            </Button>
            </Link>
            
            </Card>
        </div>
     
      </Container>
  );
}

export default Levels;

