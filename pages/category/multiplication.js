import React, { useEffect } from 'react'
import {connect} from "react-redux"
import { Container, Button, Card} from 'react-bootstrap';
import {getQues} from "../../src/actions/questionActions"

function multiplication(props) {
    const {ques, getQues} = props
    useEffect(()=>{
        console.log("multi")
        getQues()
    },[])
    
  return (
    <Container className='d-flex align-items-center justify-content-center text-center min-vh-100 m-auto p-auto'>
    <div className="d-grid gap-4">
        <Card className='p-4 rounded shadow-lg'>
            <h1 className='mb-4'>Multiplication</h1>
            </Card>
            </div>
            </Container>
  )
}
const mapStateToProps = (state) => ({
    questions:state.questions
})
   
   const mapDispatchToProps = {
    getQues
   }

export default  connect(mapStateToProps, mapDispatchToProps)(multiplication)