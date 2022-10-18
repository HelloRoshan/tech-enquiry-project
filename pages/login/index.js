import React, { useState } from 'react';
import { Card, Button, Form, Container } from 'react-bootstrap';
import Link from 'next/link';
function login() {
    const [role, setRole] = useState("1");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("Error");

    const handleSubmit = (event) => {
        event.preventDefault();
        /* TODO: Add API Call for login and redirect */
    };

    
    return(
        <Container className="d-flex justify-content-center align-items-center">
            <Card className="shadow-lg rounded-3 py-4 px-5  mt-5 w-75">
                <Form onSubmit={handleSubmit}>
                    <h3 className="mb-5 fw-bold">Login</h3>
                    <Form.Group className="mb-3">
                        <Form.Label>Select Role</Form.Label>
                        <Form.Select aria-label="Select Role" className="mb-3" value={role} onChange={(e) => setRole(e.target.value)}>
                            <option style={{color: '#888'}} disabled>Select Role</option>
                            <option value="1">Teacher</option>
                            <option value="2">Student</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            required
                            placeholder="Enter email address"
                            onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            required
                            placeholder="Password" 
                            onChange={(e) => setPassword(e.target.value)}  />
                    </Form.Group>

                    {/* Error Message Section */}
                    { error &&
                        <div  class="alert alert-danger fs-6 p-2" role="alert">{errorMessage}</div>
                    }

                    <div className="d-flex justify-content-center align-items-center">
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
            </Card>
        </Container>
    );
}
export default login;
