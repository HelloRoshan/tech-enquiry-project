import React, {useState} from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import StarRating from '../../components/StarComponent/StarRating';
import Link from 'next/link';

function feedbacks() {
    const [feedbackList, setFeedbackList] = useState([
        /* TODO: REMOVE and add real leaderboard */
        {
            comment: 'Good Job on the Progress!!',
            rating: 5,
            rater: 'Trevor Pint'
        },
        {
            comment: 'Well done keep it up',
            rating: 4,
            rater: 'Trevor Pint'
        },
        {
            comment: 'Keep on improving even more',
            rating: 3,
            rater: 'John Stone'
        },
        {
            comment: 'Learn more. You will ace it',
            rating: 2,
            rater: 'John Stone'
        },
        {
            comment: 'Keep up the spirit. Good Job',
            rating: 1,
            rater: 'John Stone'
        },
    ]);

    return (
        <Container className="pt-5 pb-5 d-flex align-items-center justify-content-center">
                <Card className="shadow-lg rounded-3 p-5 w-75">
                    <div className="mb-5 d-flex align-items-center justify-content-between w-100">
                        <h1>Feedbacks</h1>
                        <Link href="/" variant="primary">
                            <Button variant="primary" size="lg">Back</Button>
                        </Link>
                    </div>

                    {
                        feedbackList.map((feedback, index) => 
                            <Card className="shadow rounded-5 p-2 w-75 mb-4" key={index}>
                                <Card.Body>
                                    <Card.Title className="border-bottom pb-2">
                                        <StarRating score={feedback.rating} clickable={false} />
                                    </Card.Title>
                                    <Card.Text>
                                        {feedback.comment} - <span className="text-prime-1">{feedback.rater}</span>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    }
                </Card>
        </Container>
    )
}

export default feedbacks;