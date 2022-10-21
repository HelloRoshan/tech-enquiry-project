import React, { useState, useRef, useEffect } from 'react';

import { Card, Form, Button, ProgressBar, Tooltip, Overlay } from 'react-bootstrap';

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
    const { questionNumber, totalQuestions, question } = props
    const [inputAnswer, setInputAnswer] = useState("");
    const [selectedAnswer, setSelectedAnswer] = useState("null");
    const [showHint, setShowHint] = useState(false);
    const [correctAns, setCorrectAns] = useState(false);
    const [count,setCount]=useState(1)
    const target = useRef(null);

    const handleSubmitAnswer = (inputAnswer) => {
        console.log(question?.options[question?.correct_answer])
        if (parseInt(inputAnswer) === question?.options[question?.correct_answer]) {
            
            setCorrectAns(true)
        } else {
            console.log("fail")
        }
    }

    const onClickNext=()=>{
        let lenQues = quesList.length
        if(count < lenQues){
          setCount(count+1)
        }else{
          setCount(0)
        }
      }

    useEffect(() => {
        console.log(question)
    }, [question])

    return (
        <Card className="p-5 w-75">
            <div className="mb-3 d-flex justify-content-between">
                <div className="w-75">
                    <ProgressBar variant="success" now={(questionNumber / totalQuestions) * 100} />
                    <h5 class="text-warning fs-6">Question {questionNumber}/{totalQuestions}</h5>
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
            <Card.Title className="mb-4 d-flex">
                <div>
                    {question?.question}
                </div>
            </Card.Title>
            {/* TODO: Add Button with tooltip for Hint */}
            <Card.Body className="p-0">
                {/* TODO: Show input and options based on question type */}
                {
                    question?.question_type
                        ?
                        <Form.Control
                            type="text"
                            className="mb-4"
                            placeholder="Enter Your Answer Here..."
                            onChange={(e) => setInputAnswer(e.target.value)}
                        />
                        :
                        <div className="d-flex flex-wrap flex-row justify-content-between mb-4">
                            {
                                question?.options?.map((option) =>
                                    <Button
                                        variant={selectedAnswer == option ? "info" : "light"}
                                        className={"rounded mb-4 pt-4 pb-4 border " + (selectedAnswer == option ? 'shadow' : '')}
                                        style={{ width: "45%" }}
                                        onClick={() => setSelectedAnswer(option)}>
                                        <Form.Check
                                            varrant
                                            inline
                                            label={option}
                                            name={`question-${questionNumber}`}
                                            checked={selectedAnswer == option}
                                            type="radio"
                                            id={`inline-radio-${questionNumber}`}
                                        />
                                    </Button>
                                )
                            }
                        </div>
                }
            </Card.Body>
            <Button variant="warning" onClick={() => handleSubmitAnswer(inputAnswer)}>Submit</Button>
            
            {correctAns ?
                (
                <>
                <h2>Congratulation !!! </h2>
            <h3>Click next to go to next question.</h3>
                
                <Button variant="primary" size="lg" className='mb-3' onClick={() => onClickNext(count)

                }>
                    <h4>
                        Next
                    </h4>
                </Button>
                </>):[]    
        }
        </Card>
    )
}

export default Question;