import React, { useEffect, useState } from 'react'
import {connect} from "react-redux"
import PropTypes from "prop-types";
import { Container, Button, Card} from 'react-bootstrap';
import {setQues} from "../../src/actions/questionActions"

function multiplication(props) {
    const {question, setQues} = props
    const [quesList, setQuesList]= useState([])
    useEffect(()=>{
        console.log("multi")
        setQues()
    },[])

    useEffect(()=>{
        // console.log(question)
        setQuesList(question)
    },[question])

    useEffect(()=>{
      console.log(quesList)
      
  },[quesList])

    
  return (
    <Container className='d-flex align-items-center justify-content-center text-center min-vh-100 m-auto p-auto'>
    <div className="d-grid gap-4">
        <Card className='p-4 rounded shadow-lg'>
            <h1 className='mb-4'>Multiplication</h1>
            
            {quesList?.question?.map(
            (item, i) => (
              // <BasicTableCard>
              <h1>{item}</h1>
              // </BasicTableCard>
            )
          )}
          {/* {quesList?.map((item) => 
          
            {<h1>{item}<h1/>})
          } */}
            
            
            </Card>
            </div>
            </Container>
  )
}
multiplication.propTypes = {
    setQues: PropTypes.func.isRequired,
    
  };
const mapStateToProps = (state) => 
   ( {
    question:state.question
})
   
   const mapDispatchToProps = {
    setQues
   }

export default  connect(mapStateToProps, mapDispatchToProps)(multiplication)