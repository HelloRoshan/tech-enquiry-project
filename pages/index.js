import React, { useState } from 'react';
import { Button, Modal, Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';
import { useRouter } from 'next/router';

function App() {
  const router = useRouter();

  const [showLogoutModal, setLogoutModal] = useState(false);

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

  return (
      <Container className='d-flex align-items-center justify-content-center text-center min-vh-100 m-auto p-auto'>
        <Card className='d-flex justify-content-center p-4 rounded shadow-lg' style={{width: 400, height:400}}>
          <div className="mb-3">
            <h5 className="mb-0">{ greetings() }</h5>
            <h2 className="text-prime-2">{username}</h2>
          </div>
        <div className="d-grid gap-4">
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
          { userType == 1 &&
            <Link href='/feedbacks' variant="primary">
              <Button variant="primary" size="lg">
                Feedbacks
              </Button>
            </Link>
          }
          { userType == 0 &&
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

export default App;

