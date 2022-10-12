import axios from "../utils/baseAPI"
import {
    GET_QUESTION, GET_ERROR
} from "./types"

export const getQues = ()=>(dispatch)=>{
    console.log("hello")
    axios
    .get("/questions")
    .then((res) =>
      dispatch({
        type: GET_QUESTION,
        payload: res,
        
      }),
      console.log("here")
      
    )
    .catch((err) =>
      dispatch({
        type: GET_ERROR,
        payload: err.response.data,
      }),
      console.log("there")
    );
}