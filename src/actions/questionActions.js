// import axios from "../utils/baseAPI"
import axios from "axios";
import {
    GET_QUESTION, GET_ERROR
} from "./types"

export const getQues = ()=>(dispatch)=>{
    console.log("hello")
    axios
    .get("https://634658cf745bd0dbd37b638e.mockapi.io/api/v1/questions")
    .then((res) =>
      dispatch({
        type: GET_QUESTION,
        payload: res.data,
        
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