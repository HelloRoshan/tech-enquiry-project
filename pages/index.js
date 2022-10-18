import React from 'react';
import {Button} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
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
          <Link href='/leaderboard' variant="primary">
            <Button variant="primary" size="lg">
              Leader Board
            </Button>
          </Link>
          <Button variant="primary" size="lg">
            Feedbacks
          </Button>
        </div>
      </Container>
  );
}

export default App;

