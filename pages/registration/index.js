import React, { useState } from 'react';
import { Card, Button, Form, Container } from 'react-bootstrap';
import Link from 'next/link';
function registration() {
    const [role, setRole] = useState("1");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("Error");

    const handleSubmit = (event) => {
        event.preventDefault();
        /* TODO: Add API Call for login and redirect */
    };

    return(
        <Container className="d-flex justify-content-center align-items-center">
            <Card className="shadow-lg rounded py-4 px-5  mt-5 w-75">
                <Form onSubmit={handleSubmit}>
                    <h3 className="mb-5 fw-bold">Register</h3>
                    <Form.Group className="mb-3">
                        <Form.Label>Select Role</Form.Label>
                        <Form.Select aria-label="Select Role" className="mb-3"  value={role} onChange={(e) => setRole(e.target.value)}>
                            <option style={{color: '#888'}} disabled>Select Role</option>
                            <option value="1">Teacher</option>
                            <option value="2">Student</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Full Name"
                            onChange={(e) => setFullName(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}  />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}  />
                    </Form.Group>
                    <Form.Group className="mb-5" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                            onChange={(e) => setConfirmPassword(e.target.value)} />
                    </Form.Group>

                    {/* Error Message Section */}
                    { error &&
                        <div  class="alert alert-danger fs-6 p-2" role="alert">{errorMessage}</div>
                    }

                    <div className="d-flex justify-content-center align-items-center">
                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                        <span className="mx-4">
                            <Link href='/login' variant="primary">
                                Login
                            </Link>
                        </span>
                    </div>
                </Form>
            </Card>
        </Container>
    );
}
export default registration;
