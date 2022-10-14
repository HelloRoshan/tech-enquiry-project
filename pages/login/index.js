import React, { useState } from 'react';
import { Card, Button, Form, Container } from 'react-bootstrap';
function login() {
    const [isRoleSelected, setRole] = useState(null);

    
    return(
        <Container className="d-flex justify-content-center align-items-center">
            <Card className="rounded p-4 mt-5" style={{width: "max-content"}}>
            { isRoleSelected &&
                    <Form>
                        <h3 className="mb-3">Login</h3>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
            }
            {!isRoleSelected && 
                <div>
                        <h3 className="m-5">Select Role</h3>
                        <div>
                            <Button onClick={event => setRole('teacher')}>Teacher</Button>
                            <p>or</p>
                            <Button onClick={event => setRole('student')}>Student</Button>
                        </div>
                    </div>

            }
                
            </Card>
        </Container>
    );
}
export default login;
