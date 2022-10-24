import React, { useState } from 'react';
import { Card, Button, Form, Container } from 'react-bootstrap';
import Link from 'next/link';
import axios from "axios";

function registration() {
    const [role, setRole] = useState("0");
    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const errorHandler= (err) => {
        const errorMessage = err || 'Error';
        setErrorMessage(errorMessage);
        setError(true);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setError(false);
        setErrorMessage("");
        setSuccessMessage("");

        axios
            .post(`http://api.studyproject.one/register`, {
                type: parseInt(role, 10),
                fullname: fullName.trim(),
                username: username.trim(),
                password,
            })
            .then((res) => {
                setError(false);
                setErrorMessage("");
                const response = res?.data;

                if (response?.success) {
                    const message = response?.msg;
                    setSuccessMessage(message);
                } else {
                    errorHandler(response?.msg);
                }
            })
            .catch((err) => {
                errorHandler(err?.response?.data?.error)
            });
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
                            <option value="0">Teacher</option>
                            <option value="1">Student</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Full Name"
                            required
                            onChange={(e) => setFullName(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter unique username"
                            required
                            onChange={(e) => setUsername(e.target.value)}  />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            required
                            onChange={(e) => setPassword(e.target.value)}  />
                    </Form.Group>

                    {/* Error Message Section */}
                    { error &&
                        <div  className="alert alert-danger fs-6 p-2" role="alert">{errorMessage}</div>
                    }
                    { successMessage &&
                        <div  className="alert alert-success fs-6 p-2" role="alert">
                            <div>{successMessage}</div>
                            <div>
                                Go to <Link href='/login' variant="primary">Login Page</Link> to Sign In
                            </div>
                        </div>
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
