import React, { useState, useRef, useEffect } from 'react';

import { Card, Form, Button, ProgressBar, Tooltip, Overlay } from 'react-bootstrap';
import Link from 'next/link';
import {setQues} from "./../src/actions/questionActions"
/* Sample data for use of component */
{/* <Question question={{
id: 1,
quiz_id: 1,
question: "1+2",
question_image: null,
options: [1,2,3,4],
options_image: null,
correct_answer: 2,
level: 1,
question_type: null
}}
questionNumber="10"
totalQuestions="20" /> */}

function Question(props) {
    const { questionNumber, totalQuestions, quesList, level, category} = props
    const [inputAnswer, setInputAnswer] = useState("");
    const [selectedAnswer, setSelectedAnswer] = useState("null");
    const [showHint, setShowHint] = useState(false);
    const [correctAns, setCorrectAns] = useState();
    const [levelComplete, setLevelComplete] = useState();
    const [count, setCount] = useState(0)
    const target = useRef(null);

    const handleSubmitAnswer = (inputAnswer) => {
        console.log(quesList[count]?.options[quesList[count]?.correct_answer])
        if (parseInt(inputAnswer) === quesList[count]?.options[quesList[count]?.correct_answer]) {
            if (count + 1 === quesList.length) {
                setLevelComplete(true)
            } else {
                setCorrectAns(true)
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
        <Card className="p-3 w-75">
            

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
                        <div className='pb-2'><h4 className='text-success'>Level {level}</h4></div>
                            <div className="mb-3 d-flex justify-content-between">

                                <div className="w-75">
                                    <ProgressBar variant="success" now={(count + 1 / quesList.length) * 100} />
                                    <h5 class="text-warning fs-6">Question {count + 1}/{quesList.length}</h5>
                                </div>
                                <Button variant="info" ref={target} className="text-white" onClick={() => setShowHint(!showHint)}>Hint?</Button>
                                <Overlay target={target.current} show={showHint} placement="right">
                                    {(props) => (
                                        <Tooltip id="overlay-example" {...props}>
                                            Here we will add hint specific to each question
                                        </Tooltip>
                                    )}
                                </Overlay>
                            </div>
                            <Card.Title className="mb-4 d-flex justify-content-center" style={{fontSize:100}}>
                               
                                    <div >{quesList[count]?.question}</div>
                                
                            </Card.Title>
                            {/* TODO: Add Button with tooltip for Hint */}
                            <Card.Body className="p-0">
                                {/* TODO: Show input and options based on question type */}
                                {
                                    quesList[count]?.question_type
                                        ?
                                        <Form.Control
                                            type="text"
                                            className="mb-4"
                                            placeholder="Enter Your Answer Here..."
                                            onChange={(e) => setInputAnswer(e.target.value)}
                                            value={inputAnswer}
                                        />
                                        :
                                        <div className="d-flex flex-wrap flex-row justify-content-between mb-4">
                                            {
                                                quesList[count]?.options?.map((option) =>
                                                    <Button
                                                        variant={selectedAnswer == option ? "info" : "light"}
                                                        className={"rounded mb-4 pt-4 pb-4 border " + (selectedAnswer == option ? 'shadow' : '')}
                                                        style={{ width: "45%" }}
                                                        onClick={() => setSelectedAnswer(option)}>
                                                        <Form.Check
                                                            varrant
                                                            inline
                                                            label={option}
                                                            name={`question-${count}`}
                                                            checked={selectedAnswer == option}
                                                            type="radio"
                                                            id={`inline-radio-${count}`}
                                                        />
                                                    </Button>
                                                )
                                            }
                                        </div>
                                }
                            </Card.Body>
                            <Button variant="warning" onClick={() => handleSubmitAnswer(inputAnswer)} disabled={(correctAns === true || correctAns === false) ? true : false}>Submit</Button>

                            {correctAns ?
                                (
                                    <>
                                        <h2>Congratulation !!! </h2>
                                        <h3>Click on next for next question.</h3>

                                        <Button variant="primary" size="lg" className='mb-3' onClick={() => onClickNext(count)

                                        }>
                                            <h4>
                                                Next
                                            </h4>
                                        </Button>
                                    </>) : (
                                    correctAns === false ?
                                        (<>
                                            <h2>Wrong !!</h2>
                                            <Button variant="primary" size="lg" className='mb-3' onClick={() => onClickTryAgain(count)

                                            }>
                                                <h4>
                                                    Try Again
                                                </h4>
                                            </Button>


                                        </>)

                                        : [])
                            }
                        </>
                    )
            }

        </Card>
    )
}

export default Question;