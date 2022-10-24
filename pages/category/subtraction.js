import React, { useEffect, useState } from 'react'
import {connect} from "react-redux"
import PropTypes from "prop-types";
import { Container, Button, Card} from 'react-bootstrap';
import {setQues} from "../../src/actions/questionActions"
import Question from '../../components/Question';
import category from '.';

function subtraction(props) {
    const {question, level} = props
    const [quesList, setQuesList]= useState([])
    // const [count,setCount]=useState(1) 
    useEffect(()=>{
      console.log(level)
    //  const quesParams={
    //   level=
    //  }

        // setQues()
    },[])

    useEffect(()=>{
        console.log(question)
        setQuesList(question?.question?.results)
    },[question])

  

    // const onClickNext=()=>{
    //   let lenQues = quesList.length
    //   if(count < lenQues){
    //     setCount(count+1)
    //   }else{
    //     setCount(0)
    //   }
    // }
  return (
    <Container className='d-flex align-items-center justify-content-center text-center min-vh-100 m-auto p-auto'>
    
        <Card className='p-4 rounded shadow-lg w-75 d-flex align-items-center'>
            <h1 className='mb-4'>Subtraction</h1>
            {/* {quesList? 
            (<h1>{quesList[count]?.question}</h1>) :[]
            }
             */}
             <Question
             quesList={quesList ? quesList:{}}
             setQuesList={setQuesList}
             level={level}
             category={category}
            //  questionNumber={count}
            //  totalQuestions={quesList?.length}
             />
             
             
            
            {/* {quesList?.map(
            (item, i) => (
              // <BasicTableCard>
              <h1>{item.question}</h1>
              // </BasicTableCard>
            )
          )} */}
          {/* {quesList?.map((item) => 
          
            {<h1>{item}<h1/>})
          } */}
            
            
            </Card>
        
            </Container>
  )
}
subtraction.getInitialProps = async ({ query }) => {
  const {level, category} = query

  return {level, category}
}
subtraction.propTypes = {
    setQues: PropTypes.func.isRequired,
    
  };
const mapStateToProps = (state) => 
   ( {
    question:state.question
})
   
   const mapDispatchToProps = {
    setQues
   }

   
   

export default  connect(mapStateToProps, mapDispatchToProps)(subtraction)