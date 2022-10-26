import React, { useEffect} from 'react';
import {connect} from "react-redux"
import PropTypes from "prop-types";
import { Container, Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import {setQues} from "../../src/actions/questionActions"

function category(props) {
    const {level, setQues}=props
useEffect(()=>{
console.log(level)
},[])
const handleSetQues=(value)=>{
let param={
    level:level,
    type:value
}
setQues(param)
}
  return (
    <Container className='d-flex align-items-center justify-content-center text-center min-vh-100 m-auto p-auto'>
        <div className="d-grid gap-4">
          
            <Card className='d-flex  justify-content-center p-4 rounded shadow-lg'>
                <h1 className='mb-4'>Select Arithmetic Problem</h1>
                <Link href={{pathname:'/category/addition', query: { level: level, category: 1 }}} variant="primary">
                    <Button variant="primary" size="lg" className='mb-3'onClick={()=>handleSetQues(1)}>
                        <h2>
                            Add +
                        </h2>
                    </Button>
                </Link>
                <Link href={{pathname:'/category/subtraction', query: { level: level, category: 2 }}} variant="primary">
                    <Button variant="primary" size="lg" className='mb-3'onClick={()=>handleSetQues(2)}>
                        <h2>
                            Subtract -
                        </h2>
                    </Button>
                </Link>
                <Link href={{pathname:'/category/multiplication', query: { level: level, category: 3 }}} variant="primary">
                    <Button variant="primary" size="lg" className='mb-3' onClick={()=>handleSetQues(3)}>
                        <h2>
                            Multiply X
                        </h2>
                    </Button>
                </Link>
                <Link href={{pathname:'/category/division', query: { level: level, category: 4 }}} variant="primary">
                    <Button variant="primary" size="lg" className='mb-3'onClick={()=>handleSetQues(4)}>
                        <h2>
                            Divide /
                        </h2>
                    </Button>
                </Link>
            </Card>
            
        </div>
    </Container>
  )
}

category.getInitialProps = async ({ query }) => {
    const {level} = query
  
    return {level}
  }

  category.propTypes = {
    setQues: PropTypes.func.isRequired,
    
  };
const mapStateToProps = (state) => 
   ( {
    question:state.question
})
   
   const mapDispatchToProps = {
    setQues
   }

   
   

export default  connect(mapStateToProps, mapDispatchToProps)(category)

