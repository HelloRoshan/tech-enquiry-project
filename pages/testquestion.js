import React from 'react';
import { Container } from 'react-bootstrap';
import Question from '../components/Question';

function testQuestion() {
    return (
        <Container className="pt-5 pb-5 d-flex align-items-center justify-content-center">
            <Question question={{
                id: 1,
                quiz_id: 1,
                question: "1+2",
                question_image: null,
                options: [1,2,3,4],
                options_image: null,
                correct_answer: 2,
                level: 1,
                question_type: 1
                }}
                questionNumber="10"
                totalQuestions="20"
            />
        </Container>
    );
}

export default testQuestion;