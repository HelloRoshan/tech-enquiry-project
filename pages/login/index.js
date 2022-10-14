import React, { useState } from 'react';
import { Card, Button, Form, Container } from 'react-bootstrap';
import Link from 'next/link';
function login() {
    const [role, setRole] = useState(null);

    
    return(
        <Container className="d-flex justify-content-center align-items-center">
            <Card className="rounded py-4 px-5  mt-5" style={{width: "max-content"}}>
            { role &&
                    <Form>
                        <h3 className="mb-3">{ role } Login</h3>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <div>
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                            <span className="mx-4">
                                <Link href='/registration' variant="primary">
                                    Register
                                </Link>
                            </span>
                        </div>
                    </Form>
            }
            { !role && 
                <div>
                        <h3 className="mb-5">Select Role</h3>
                        <div>
                            <Button onClick={event => setRole('Teacher')}>Teacher</Button>
                            <p>or</p>
                            <Button onClick={event => setRole('Student')}>Student</Button>
                        </div>
                    </div>

            }
                
            </Card>
        </Container>
    );
}
export default login;
