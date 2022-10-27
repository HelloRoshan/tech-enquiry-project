import React, { useEffect, useState } from 'react';
import { Button, Modal, Card, Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';
import { connect } from "react-redux"
import PropTypes from "prop-types";
import { useRouter } from 'next/router';
import { GiTrophyCup } from 'react-icons/gi'
import { getScore } from '../src/actions/scoreActions';

function App(props) {
  const { getScore, score } = props;
  const router = useRouter();

  const [showLogoutModal, setLogoutModal] = useState(false);

  const [userScore, setUserScore] = useState(0);

  const errorHandler = (err) => {
    const errorMessage = err || 'Error';
    setErrorMessage(errorMessage);
    setError(true);
  }


  const handleClose = () => setLogoutModal(false);
  const handleShow = () => setLogoutModal(true);

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.replace('/login');
  };

  const username = JSON.parse(localStorage.getItem('user'))?.username;
  const userType = JSON.parse(localStorage.getItem('user'))?.type;

  const greetings = () => {
    let dateToday = new Date();
    let hrs = dateToday.getHours();
    let greet;

    if (hrs < 12) {
      greet = 'Good Morning';
    } else if (hrs >= 12 && hrs <= 17) {
      greet = 'Good Afternoon';
    } else if (hrs >= 17 && hrs <= 24) {
      greet = 'Good Evening';
    }
    return greet;
  }

  useEffect(() => {
    getScore(username)
    
  }, [])

  useEffect(() => {
    // console.log(score)
    if (score?.userScore?.results[0]) {
      setUserScore(score?.userScore.results[0]?.score)
    }else{
      setUserScore(0)
    }
  }, [score])

  return (
    <Container className='d-flex align-items-center justify-content-center text-center min-vh-100 m-auto p-auto'>
      <Card className='d-flex justify-content-center p-4 rounded shadow-lg' style={{ width: 400, height: 550 }}>
        <div className="mb-3">
          <h5 className="mb-0">{greetings()}</h5>
          <h2 className="text-prime-2">{username}</h2>
        </div>
        {userType == 1 &&
        <Row className="mb-3">
          <Col className='d-flex justify-content-center align-items-center'><GiTrophyCup
            size="70px"
            color="#FFD400"
          /></Col>
          <Col className='d-flex justify-content-center align-items-center' style={{ fontSize: 54, color: "orange" }}><strong>{userScore}</strong></Col>

        </Row>}

        <div className="d-grid gap-4">

          {userType == 1 &&
            <>
              <Link href='/levels' variant="primary">
                <Button variant="primary" size="lg">
                  Play
                </Button>
              </Link>
              <Link href='/leaderboard' variant="primary">
                <Button variant="primary" size="lg">
                  Leader Board
                </Button>
              </Link>
              <Link href='/feedbacks' variant="primary">
                <Button variant="primary" size="lg">
                  Feedbacks
                </Button>
              </Link>
            </>
          }
          {userType == 0 &&

            <Link href='/dashboard' variant="primary">
              <Button variant="primary" size="lg">
                Dashboard
              </Button>
            </Link>
          }
          <Button variant="primary" size="lg" onClick={handleShow}>
            Logout
          </Button>

          <Modal show={showLogoutModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Confirm Action: <span className="text-danger">Logout</span></Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to logout?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="danger" onClick={handleLogout}>
                Logout
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </Card>
    </Container>
  );
}
App.propTypes = {
  getScore: PropTypes.func.isRequired,

};
const mapStateToProps = (state) =>
({
  score: state.score,

})

const mapDispatchToProps = {
  getScore
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

