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
      <Container className='p-3'>
      <Row className="justify-content-md-center">
        <Col md lg="2">
      <Button variant="primary p-3">leader board</Button>
      </Col>
      </Row>
      </Container>
     </div>
    // </div>
  );
}

export default App;

