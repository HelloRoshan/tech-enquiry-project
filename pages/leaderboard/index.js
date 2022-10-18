import React, {useState} from 'react';
import { Container, Button, Card, ListGroup } from 'react-bootstrap';
import Link from 'next/link';

function level() {
    const [leaderboardList, setLeaderboardList] = useState([
        /* TODO: REMOVE and add real leaderboard */
        {
            name: 'Joseph Collin',
            score: 27
        },
        {
            name: 'Michael Burry',
            score: 25
        },
        {
            name: 'Suzanne Philip',
            score: 21
        },
        {
            name: 'Jonas Grum',
            score: 13
        },
        {
            name: 'Bridget Johns',
            score: 13
        },
    ]);

    return (
        <Container className="pt-5 pb-5 d-flex align-items-center justify-content-center">
                <Card className="shadow-lg rounded-3 p-5 w-75">
                    <h1 className='mb-5'>Leaderboard</h1>
                    <ListGroup as="ol" numbered>
                        {
                            leaderboardList.map((leaderboardItem) => 
                                <ListGroup.Item as="li" className="d-flex"><span className="ms-2">{leaderboardItem.name} </span><span className="ms-auto">{leaderboardItem.score}</span></ListGroup.Item>
                            )
                        }
                    </ListGroup>
                    <Link href="/" variant="primary">
                        <Button variant="primary" size="lg" className="mt-5 w-25 ms-auto me-auto">Back</Button>
                    </Link>
                </Card>
        </Container>
    )
}

export default level