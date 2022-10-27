// import axios from "../utils/baseAPI"
import axios from "axios";
import {
    GET_LEADERBOARD, GET_ERROR
} from "./types"

export const setLeaderboard = ()=>(dispatch)=>{
    axios
    .get(`https://api.studyproject.one/gethighscore`)
    .then((res) =>
      dispatch({
        type: GET_LEADERBOARD,
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