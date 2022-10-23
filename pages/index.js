import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';

function App() {
  const [showLogoutModal, setLogoutModal] = useState(false);

  const handleClose = () => setLogoutModal(false);
  const handleShow = () => setLogoutModal(true);

  const handleLogout = () => {
    /* clear login */
    window.location.pathname = '/login';
  };

  return (
      <Container className='d-flex align-items-center justify-content-center text-center min-vh-100 m-auto p-auto'>
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
          <Button variant="primary" size="lg">
            Feedbacks
          </Button>
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
              <Button variant="primary" onClick={handleLogout}>
                Logout
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </Container>
  );
}

export default App;

