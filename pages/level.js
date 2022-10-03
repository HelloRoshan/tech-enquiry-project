import React from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import Link from 'next/link';

function level() {
  return (
    <Container className='d-flex align-items-center justify-content-center text-center min-vh-100 m-auto p-auto'>
        <div className="d-grid gap-4">
            <Card className='p-4 rounded shadow-lg'>
                <h1 className='mb-4'>Select Arithmetic Problem</h1>
                <Link href='/' variant="primary">
                    <Button variant="primary" size="lg" className='mb-3'>
                        <h2>
                            Add +
                        </h2>
                    </Button>
                </Link>
                <Link href='/' variant="primary">
                    <Button variant="primary" size="lg" className='mb-3'>
                        <h2>
                            Subtract -
                        </h2>
                    </Button>
                </Link>
                <Link href='/' variant="primary">
                    <Button variant="primary" size="lg" className='mb-3'>
                        <h2>
                            Multiply X
                        </h2>
                    </Button>
                </Link>
                <Link href='/' variant="primary">
                    <Button variant="primary" size="lg" className='mb-3'>
                        <h2>
                            Divide /
                        </h2>
                    </Button>
                </Link>
            </Card>
            
        </div>
    </Container>
  )
}

export default level