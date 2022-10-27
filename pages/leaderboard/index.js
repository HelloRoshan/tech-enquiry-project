import React, { useEffect, useState } from 'react';
import { connect } from "react-redux"
import PropTypes from "prop-types";
import { Container, Button, Card, ListGroup } from 'react-bootstrap';
import Link from 'next/link';
import { BsFillTrophyFill } from "react-icons/bs";
import { setLeaderboard } from '../../src/actions/leaderBoardAction';

function leaderboard(props) {
    const { highScoreList, setLeaderboard } = props
    const [leaderboardList, setLeaderboardList] = useState([

    ]);

    useEffect(() => {
        setLeaderboard()
    }, [])

    useEffect(() => {
      
        setLeaderboardList(highScoreList?.highScoreList)
    }, [highScoreList])

    return (
        <Container className="pt-5 pb-5 d-flex align-items-center justify-content-center">
            <Card className="shadow-lg rounded-3 p-5 w-75">
                <h1 className='mb-5 text-prime-2'>Leaderboard</h1>
                <ListGroup as="ol" numbered>
                    {
                        leaderboardList?.results?.map((leaderboardItem, index) =>
                            <ListGroup.Item as="li" className="d-flex">
                                <span className="ms-2">{leaderboardItem.user_name} </span>
                                {
                                    index == 0 &&
                                        <BsFillTrophyFill className='fs-4 ms-2' fill={'#FFD700'} />
                                }
                                <span className="ms-auto">{leaderboardItem.score}</span>
                            </ListGroup.Item>
                        )
                    }
                </ListGroup>
                <Link href="/" variant="primary">
                    <Button variant="primary" size="lg" className="mt-5 ms-auto me-auto">Back</Button>
                </Link>
            </Card>
        </Container>
    )
}
leaderboard.propTypes = {
    setLeaderboard: PropTypes.func.isRequired,

};
const mapStateToProps = (state) =>
({
    highScoreList: state.highScoreList
})

const mapDispatchToProps = {
    setLeaderboard
}

export default connect(mapStateToProps, mapDispatchToProps)(leaderboard)