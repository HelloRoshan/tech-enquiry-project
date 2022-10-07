// import Background from "./img/HomeBackground.jpg"
// import Image from 'next/image'
import React from 'react';
import {Button} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    
    // <div className="App" >
     <div  style={{ backgroundImage: `url(./img/Homebackground.jpg)`, backgroundSize:"cover", backgroundRepeat:"no-repeat",  minHeight:"100vh", flex:1, backgroundPosition: "center"}}>
      <Container className='d-flex align-items-center justify-content-center text-center min-vh-100 m-auto p-auto'>
      <div className="d-grid gap-4">
      <Button variant="primary" size="lg" style={{width: 300, height:80}}>
        Play
      </Button>
      <Button variant="primary" size="lg" style={{width: 300, height:80}}>
        Leader Board
      </Button>
      <Button variant="primary" size="lg" style={{width: 300, height:80}}>
        Hints
      </Button>
      <Button variant="primary" size="lg" style={{width: 300, height:80}}>
        Feedbacks
      </Button>
    </div>
     
      </Container>
     </div>
    // </div>
  );
}

export default App;

