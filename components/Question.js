import React, { useState, useRef, useEffect } from 'react';
import { connect } from "react-redux"
import PropTypes from "prop-types";
import { Card, Form, Button, ProgressBar, Tooltip, Overlay, Collapse, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import { setQues } from "./../src/actions/questionActions"
import { getScore, setScore } from '../src/actions/scoreActions';

import { GiTrophyCup } from "react-icons/gi"

function Question(props) {
    const { questionNumber, totalQuestions, quesList, level, category, setScore, getScore, score } = props
    const [inputAnswer, setInputAnswer] = useState("");
    const [selectedAnswer, setSelectedAnswer] = useState("null");
    const [showHint, setShowHint] = useState(false);
    const [correctAns, setCorrectAns] = useState();
    const [levelComplete, setLevelComplete] = useState();
    const [count, setCount] = useState(0);

    // const [username, setUsername]=useState("")
    const target = useRef(null);
    const username = JSON.parse(localStorage.getItem('user'))?.username;

    useEffect(() => {
        getScore(username);
    }, [])
    const [newScore, setNewScore] = useState(0);

    useEffect(() => {
        if (score?.userScore?.results[0]) {
            setNewScore(score?.userScore?.results[0]?.score)
        }else{
            setNewScore(0)
        }
    }, [score])

    const handleSubmitAnswer = (inputAnswer) => {
        console.log(quesList[count]?.options[quesList[count]?.correct_answer])
        if (parseInt(inputAnswer) === quesList[count]?.options[quesList[count]?.correct_answer]) {
            if (count + 1 === quesList.length) {
                setLevelComplete(true)
            } else {
                setCorrectAns(true)
                // setNewScore(newScore+1)
                let parameter = {
                    username: username,
                    score: newScore + 1
                }

                setScore(parameter)
                setTimeout(() => {
                    getScore(username)
                }, 1000)

            }
        } else {
            setCorrectAns(false)
        }
    }

    const onClickNext = () => {
        let lenQues = quesList.length
        if (count < lenQues) {
            setCount(count + 1)
            setCorrectAns()
            setInputAnswer("")
        } else {
            setCount(0)
        }
    }
    const onClickTryAgain = () => {
        setInputAnswer("")
        setCorrectAns()
    }


    // useEffect(() => {
    //     console.log(question)
    // }, [question])

    return (

        <Card className="p-4 mb-4 w-75">



            {
                levelComplete ?
                    (
                        <Card.Body>
                            <h4>Congratulation !!!</h4>
                            <h5>You have successful completed level {level}</h5>
                            <Link href='/levels' variant="primary">
                                <Button variant="primary" size="lg" className='mb-3' >
                                    Go to next level
                                </Button>
                            </Link>
                        </Card.Body>
                    ) : (
                        <>
                            <div className='d-flex justify-content-between align-items-center pb-2'>
                                <h2 className='text-success'><strong>Level {level}</strong></h2>
                                <div className='d-flex'>
                                    <GiTrophyCup
                                        size="70px"
                                        color="#FFD400"
                                    />
                                    <div className='d-flex align-items-bottom justify-content-left' style={{ fontSize: 54, color: "orange" }}><strong>{newScore}</strong></div>
                                </div>
                            </div>

                            <div className="mb-3 d-flex justify-content-between">

                                <div className="w-100">
                                    <ProgressBar variant="success" now={(count / quesList.length) * 100} />
                                    <h5 class="text-warning fs-6">Question {count + 1}/{quesList.length}</h5>
                                </div>
                                {/* <Button variant="info" ref={target} className="text-white" onClick={() => setShowHint(!showHint)}>Hint?</Button>
                                <Overlay target={target.current} show={showHint} placement="right">
                                    {(props) => (
                                        <Tooltip id="overlay-example" {...props}>
                                            Here we will add hint specific to each question
                                        </Tooltip>
                                    )}
                                </Overlay> */}
                            </div>
                            <Card.Title className="mb-4 d-flex justify-content-center" style={level === "3" ? { fontSize: 36, margin: 12 } : { fontSize: 100 }}>
                                {
                                    level === "2" ?
                                        <img
                                            src={quesList[count]?.question_image}
                                            // alt="Picture of the author"
                                            // width={500}
                                            // height={500}
                                            className="w-50 h-50"
                                        /> :
                                        <div >{quesList[count]?.question}</div>
                                }


                            </Card.Title>
                            <Card.Body className="p-0">
                                {
                                    level === "1" ?
                                        <div className="d-flex flex-wrap flex-row justify-content-between mb-4">
                                            {
                                                quesList[count]?.options?.map((option) =>
                                                    <Button
                                                        variant={inputAnswer == option ? "warning" : "light"}
                                                        className={"rounded mb-3 pt-3 pb-3 border " + (inputAnswer == option ? 'shadow' : '')}
                                                        style={{ width: "45%" }}
                                                        onClick={() => setInputAnswer(option)}
                                                        disabled={correctAns === false ? true : false}
                                                    >
                                                        <Form.Check
                                                            varrant
                                                            inline
                                                            label={option}
                                                            name={`question-${count}`}
                                                            checked={inputAnswer == option}
                                                            type="radio"
                                                            id={`inline-radio-${count}`}
                                                        />
                                                    </Button>
                                                )
                                            }
                                        </div> :

                                        <Form.Control
                                            type="text"
                                            className="mb-4"
                                            placeholder="Enter Your Answer Here..."
                                            onChange={(e) => setInputAnswer(e.target.value)}
                                            value={inputAnswer}
                                            size="lg"
                                        />
                                }
                            </Card.Body>


                            {correctAns ?
                                (
                                    <>

                                        <h2 className='text-success'> Correct Answer </h2>


                                        <Button variant="info" size="lg" className='mb-3' onClick={() => onClickNext(count)

                                        }>
                                            <h4 className='text-white'>
                                                Next
                                            </h4>
                                        </Button>
                                    </>) : (
                                    correctAns === false ?
                                        (<>
                                            <h2 className='text-danger'>Wrong Answer</h2>
                                            <Button variant="info" size="lg" className='mb-3 text-white' onClick={() => onClickTryAgain(count)

                                            }>
                                                <h4>
                                                    Try Again
                                                </h4>
                                            </Button>


                                        </>)

                                        : <Button variant="warning" onClick={() => handleSubmitAnswer(inputAnswer)} disabled={(correctAns === true || correctAns === false) ? true : false}>Submit</Button>)
                            }
                        </>
                    )
            }

        </Card>
    )
}
Question.propTypes = {
    setScore: PropTypes.func.isRequired,
    getScore: PropTypes.func.isRequired

};
const mapStateToProps = (state) =>
({
    score: state.score
})

const mapDispatchToProps = {
    setScore,
    getScore
}
export default connect(mapStateToProps, mapDispatchToProps)(Question);