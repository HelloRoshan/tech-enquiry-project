import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Button, Card, ListGroup, Modal, Form, ToastContainer, Toast } from 'react-bootstrap';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Link from 'next/link';
import StarRating from '../../components/StarComponent/StarRating';

function dashboard() {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
    );
    useEffect(() => {
        axios
            .get(`https://api.studyproject.one/gethighscore`)
            .then((res) => {
                const mappedDataSets = res?.data?.results.map((item, index) => {
                    return {
                        x: item.user_name,
                        y: item.score,
                    };
                });
                setLeaderboardList(res?.data?.results);
                setDataSets([
                    {
                        data: mappedDataSets,
                        backgroundColor: '#40c840'
                    }
                ]);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    const [leaderboardList, setLeaderboardList] = useState([]);
    const [datasets, setDataSets] = useState([]);

    const options = {
        responsive: false,
    };


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
                <Card className="shadow-lg rounded-3 p-5 w-100">
                    <h2 className="text-prime-2 mb-4">Teacher Dashboard</h2>
                    <div className="d-flex">
                        <div className="w-50 border p-3">
                            <h4 className='mb-3'>Student Leaderboard List</h4>
                            <ListGroup as="ol" numbered>
                                {
                                    leaderboardList.map((leaderboardItem, index) => 
                                        <ListGroup.Item
                                            key={index}
                                            as="li"
                                            className="d-flex">
                                            <span className="ms-2">{leaderboardItem.full_name} <span className="text-primary">({leaderboardItem.user_name})</span></span>
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
                        </div>
                        <div className="w-50 border p-3">
                            <h4 className='mb-3'>Student Leaderboard Graph</h4>
                            <Bar options={options} data={{datasets}} className="border-1 mt-5 ms-4" />
                        </div>
                    </div>

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
                    <Link href="/" variant="primary">
                        <Button variant="primary" size="lg" className="mt-5 ms-auto me-auto">Back</Button>
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