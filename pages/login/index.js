import React, { useState } from 'react';
import axios from "axios";
import { Card, Button, Form, Container } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
function login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [processing, setProcessing] = useState(false);

    const router = useRouter();

    const errorHandler= (err) => {
        const errorMessage = err || 'Error';
        setErrorMessage(errorMessage);
        setError(true);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setError(false);
        setErrorMessage("");
        localStorage.clear();
        setProcessing(true);

        axios
            .post(`http://api.studyproject.one/login`, {
                username: username.trim(),
                password
            })
            .then((res) => {
                setError(false);
                setErrorMessage("");
                const response = res?.data;

                if (response?.success) {
                    localStorage.clear();
                    localStorage.setItem('user', JSON.stringify(response));
                    router.push('/');
                } else {
                    errorHandler(response?.msg)
                }
            })
            .catch((err) => {
                errorHandler(err?.response?.data?.error);
            })
            .finally(() => setProcessing(false));
    };
    
    return(
        <Container className="d-flex justify-content-center align-items-center">
            <Card className="shadow-lg rounded-3 py-4 px-5  mt-5 w-75">
                <Form onSubmit={handleSubmit}>
                    <h3 className="mb-5 fw-bold">Login</h3>
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            required
                            placeholder="Enter Username"
                            onChange={(e) => setUsername(e.target.value)} />
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
                        <div  className="alert alert-danger fs-6 p-2" role="alert">{errorMessage}</div>
                    }

                    <div className="d-flex justify-content-center align-items-center">
                        <Button variant="primary" type="submit" disabled={processing}>
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
