// import Background from "./img/HomeBackground.jpg"
// import Image from 'next/image'
import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';

function howtoplay() {
    return (
        <Container className="pt-5 pb-5 d-flex align-items-center justify-content-center">
            <Card className="shadow-lg rounded-3 p-5 w-75">
                {/* <Row className='mb-3 w-100'>
                    <Col>
                <h1 className='mb-5 text-prime-2'>How to Play</h1>
                </Col>
                <Col>
                <Link href="/" variant="primary">
                    <Button variant="primary" size="lg" className="mt-5 ms-auto me-auto">Back</Button>
                </Link>
                </Col>
                </Row> */}
                <div className="mb-5 d-flex align-items-center justify-content-between w-100">
                    <h1 className='text-prime-2'>How to Play</h1>
                    <Link href="/" variant="primary">
                        <Button variant="primary" size="lg">Back</Button>
                    </Link>
                </div>
                <div className='h-75 overflow-auto'>
                    <p className='d-flex align-items-center'><h4><strong className='me-2'>Step 1: </strong></h4>Click Play Button</p>
                    <div className='d-flex justify-content-center'>
                        <img
                            src="./img/ss/home.png"
                            className="w-img"
                        />
                    </div>
                    <p className='d-flex align-items-center'><h4><strong className='me-2'>Step 2: </strong></h4>Select difficulty level</p>
                    <div className='d-flex justify-content-center'>
                        <img
                            src="./img/ss/level.png"
                            className="w-img"
                        />
                    </div>
                    <p className='d-flex align-items-center'><h4><strong className='me-2'>Step 3: </strong></h4>Select category you want to play</p>
                    <div className='d-flex justify-content-center'>
                <img
                src="./img/ss/category.png"
                className="w-img"
                />
                </div>
                    <p className='d-flex align-items-center'><h4><strong className='me-2'>Step 4: </strong></h4>Start Playing</p>
                    <p className='d-flex align-items-center ms-5'><h5><strong className='me-2'>For level 1 </strong></h5>Select correct answers from the <strong className='ms-2'>options</strong></p>
                    <div className='d-flex justify-content-center'>
                <img
                src="./img/ss/level1.png"
                className="w-img"
                />
                </div>
                    <p className='d-flex align-items-center ms-5'><h5><strong className='me-2'>For level 2 </strong></h5>Enter your answer in <strong className='ms-2 me-2'>Input Box</strong></p>
                    <div className='d-flex justify-content-center'>
                <img
                src="./img/ss/level2.png"
                className="w-img"
                />
                </div>
                    <p className='d-flex align-items-center ms-5'><h5><strong className='me-2'>For level 3 </strong></h5>Enter your answer in <strong className='ms-2 me-2'>Input Box</strong></p>
                    <div className='d-flex justify-content-center'>
                <img
                src="./img/ss/level3.png"
                className="w-img"
                />
                </div>
                    <p className='d-flex align-items-center'><h5><strong className='me-2'>Select another level </strong></h5>Click on <strong className='ms-2 me-2'>Level Button</strong> from top right of the page</p>
                    <div className='d-flex justify-content-center'>
                <img
                src="./img/ss/backLevel.png"
                className="w-img"
                />
                </div>
                    <p className='d-flex align-items-center'><h5><strong className='me-2'>Go to Home page </strong></h5>Click on <strong className='ms-2 me-2'>Home Button</strong> from top left of the page</p>
                    <div className='d-flex justify-content-center'>
                <img
                src="./img/ss/backHome.png"
                className="w-img"
                />
                </div>
</div>

            </Card>
        </Container>
    );
}

export default howtoplay;

