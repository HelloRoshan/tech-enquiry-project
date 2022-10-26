import React, { useEffect, useState } from 'react'
import { connect } from "react-redux"
import PropTypes from "prop-types";
import { Container, Button, Card, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { setQues } from "../../src/actions/questionActions"
import Question from '../../components/Question';
import category from '.';

function subtraction(props) {
  const { question, level } = props
  const [quesList, setQuesList] = useState([])
  const [username, setUsername]=useState("")
  

  useEffect(() => {
    // console.log(question)
    setQuesList(question?.question?.results)
  }, [question])

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('username'));
    if (items) {
     setUsername(items);
    }
  }, []);




 
  return (
    <Container className='d-flex align-items-center justify-content-center text-center min-vh-100 m-auto p-auto'>


      <Card className='p-4 rounded shadow-lg w-75 d-flex align-items-center'>
      <Row className="mb-3 w-100">

<Col>
<Link href='/' className='w-75'><Button variant="info" size="lg" className="text-white" >Home</Button></Link></Col>
<Col><h1 className='mb-4'>Subtraction</h1></Col>
<Col><Link href='/levels'><Button variant="info" size="lg" className="text-white" >Level</Button></Link></Col>
</Row>
        
        <Question
          quesList={quesList ? quesList : {}}
          setQuesList={setQuesList}
          level={level}
          category={category}
        username={username}
        />

      </Card>

    </Container>
  )
}
subtraction.getInitialProps = async ({ query }) => {
  const { level, category } = query

  return { level, category }
}
subtraction.propTypes = {
  setQues: PropTypes.func.isRequired,

};
const mapStateToProps = (state) =>
({
  question: state.question
})

const mapDispatchToProps = {
  setQues
}




export default connect(mapStateToProps, mapDispatchToProps)(subtraction)