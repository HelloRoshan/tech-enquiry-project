// import axios from "../utils/baseAPI"
import axios from "axios";
import {
    SET_SCORE, GET_ERROR
} from "./types"

export const setScore = (param)=>(dispatch)=>{
    axios
    .post(`http://api.studyproject.one/score`,{
        username:param.username,
        score:param.score
    })
    .then((res) =>
      dispatch({
        type: SET_SCORE,
        payload: res.data,
        
      },
      console.log(res.data)),
      
      
    )
    .catch((err) =>
      dispatch({
        type: GET_ERROR,
        payload: err.response?.data,
      }),
      
    );
}