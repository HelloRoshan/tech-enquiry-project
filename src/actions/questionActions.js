// import axios from "../utils/baseAPI"
import axios from "axios";
import {
    GET_QUESTION, GET_ERROR
} from "./types"

export const setQues = (param)=>(dispatch)=>{
    axios
    .get(`http://api.studyproject.one/questions?level=${param.level}&question_type=${param.type}`)
    .then((res) =>
      dispatch({
        type: GET_QUESTION,
        payload: res.data,
        
      },
      console.log(res.data)),
      
      
    )
    .catch((err) =>
      dispatch({
        type: GET_ERROR,
        payload: err.response.data,
      }),
      
    );
}