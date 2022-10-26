import React, { useState, useEffect } from 'react';
import { Container, Button, Card, ListGroup, Modal, Form, ToastContainer, Toast } from 'react-bootstrap';
import Link from 'next/link';
import StarRating from '../../components/StarComponent/StarRating';

function dashboard() {
    useEffect(() => {

    });

    const [leaderboardList, setLeaderboardList] = useState([
        /* TODO: REMOVE and add real leaderboard */
        {
            user_name: 'Joseph Collin',
            score: 27
        },
        {
            user_name: 'Michael Burry',
            score: 25
        },
        {
            user_name: 'Suzanne Philip',
            score: 21
        },
        {
            user_name: 'Jonas Grum',
            score: 13
        },
        {
            user_name: 'Bridget Johns',
            score: 13
        },
    ]);

    const [showFeedbackSendModal, setShowFeedbackSendModal] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [userRating, setUserRating] = useState(0);
    const [userComment, setUserComment] = useState("");

    const handleClose = () => {
        setCurrentUser(null)
        setShowFeedbackSendModal(false);
    }

    const handleShow = (username) => {
        setCurrentUser(username);
        setShowFeedbackSendModal(true);
    };

    const handleSendFeedback = () => {
        /* code to send feedback with success message */
        console.log(userRating, userComment.trim())
        setShowToast(true);
        setCurrentUser(null);
        setUserComment("");
        setUserRating(0);
        setShowFeedbackSendModal(false);
    }

    return (
        <Container className="pt-5 pb-5 d-flex align-items-center justify-content-center">
                <Card className="shadow-lg rounded-3 p-5 w-75">
                    <h1 className='mb-5'>Student Leaderboard</h1>
                    <ListGroup as="ol" numbered>
                        {
                            leaderboardList.map((leaderboardItem, index) => 
                                <ListGroup.Item
                                    key={index}
                                    as="li"
                                    className="d-flex">
                                    <span className="ms-2">{leaderboardItem.user_name} </span>
                                    <span className="ms-auto pe-4 border-end">{leaderboardItem.score}</span>
                                    <Button
                                        variant="primary"
                                        size="sm"
                                        className="ms-4"
                                        onClick={ () => handleShow(leaderboardItem.user_name) }
                                    >
                                        Send Feedback
                                    </Button>
                                </ListGroup.Item>
                            )
                        }
                    </ListGroup>


                    <Modal show={showFeedbackSendModal} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>
                                Send Feedback to <span className='text-prime-2'>{currentUser}</span>
                                <h5 className="fs-6 fw-light text-secondary">Add Rating and Comment for the Student</h5>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <StarRating clickable={true} className="fs-2 text" onChange={(rating) => setUserRating(rating)} />
                            <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Add comment here..."
                                    rows={4}
                                    value={userComment}
                                    onChange={(e) => setUserComment(e.target.value)}
                                />
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleSendFeedback} disabled={!(userRating && userComment)}>
                                Send Feedback
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    Add a small graph section with quick overview
                    <Link href="/" variant="primary">
                        <Button variant="primary" size="lg" className="mt-5 w-25 ms-auto me-auto">Back</Button>
                    </Link>
                </Card>
                <ToastContainer  position="top-end">
                    <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                        <Toast.Header>
                            <strong className="me-auto text-success">Success</strong>
                        </Toast.Header>
                        <Toast.Body>Feedback Sent Successfully</Toast.Body>
                    </Toast>
                </ToastContainer>
                
        </Container>
    )
}

export default dashboard;