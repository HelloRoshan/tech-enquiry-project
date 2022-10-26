import { GET_ERROR,GET_LEADERBOARD } from "../actions/types";
const initialState = {
    highScoreList:[],
    error:[],
}
export default function(state=initialState,action){
    switch(action.type){
        case GET_LEADERBOARD:
            return{
                ...state, 
                highScoreList:action.payload,
            }
            default:
      return state;
    }
}