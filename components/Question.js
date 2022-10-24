import React, { useState, useRef, useEffect } from 'react';

import { Card, Form, Button, ProgressBar, Tooltip, Overlay, Collapse} from 'react-bootstrap';
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
                        <div className='pb-2'><h4 className='text-success'>Level {level}</h4></div>
                            <div className="mb-3 d-flex justify-content-between">

                                <div className="w-75">
                                    <ProgressBar variant="success" now={(count / quesList.length) * 100} />
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
                            <Card.Title className="mb-4 d-flex justify-content-center" style={level === "3" ? {fontSize:36, margin:12}:{fontSize:100}}>
                               
                                    <div >{quesList[count]?.question}</div>
                                
                            </Card.Title>
                            {/* TODO: Add Button with tooltip for Hint */}
                            <Card.Body className="p-0">
                                {/* TODO: Show input and options based on question type */}
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
                                                        disabled={correctAns ===false ? true: false}
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
                                        </div>:
                                      
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

export default Question;