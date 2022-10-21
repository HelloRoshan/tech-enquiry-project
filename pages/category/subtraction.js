import React, { useEffect, useState } from 'react'
import {connect} from "react-redux"
import PropTypes from "prop-types";
import { Container, Button, Card} from 'react-bootstrap';
import {setQues} from "../../src/actions/questionActions"
import Question from '../../components/Question';

function subtraction(props) {
    const {question, setQues} = props
    const [quesList, setQuesList]= useState([])
    const [count,setCount]=useState(1)
    useEffect(()=>{
    //  const quesParams={
    //   level=
    //  }

        // setQues()
    },[])

    useEffect(()=>{
        console.log(question)
        setQuesList(question?.question?.results)
    },[question])

  

    const onClickNext=()=>{
      let lenQues = quesList.length
      if(count < lenQues){
        setCount(count+1)
      }else{
        setCount(0)
      }
    }
  return (
    <Container className='d-flex align-items-center justify-content-center text-center min-vh-100 m-auto p-auto'>
    
        <Card className='p-4 rounded shadow-lg w-75 d-flex align-items-center'>
            <h1 className='mb-4'>Subtraction</h1>
            {/* {quesList? 
            (<h1>{quesList[count]?.question}</h1>) :[]
            }
             */}
             <Question
             question={quesList ? quesList[count]:{}}
             questionNumber={count}
             totalQuestions={quesList?.length}
             />
             
             
            {count}
            <Button variant="primary" size="lg" className='mb-3' onClick={() => onClickNext(count)
                                             
                                            }>
                        <h4>
                            Next
                        </h4>
                    </Button>
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