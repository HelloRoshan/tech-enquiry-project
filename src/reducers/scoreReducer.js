import { GET_ERROR,SET_SCORE,GET_SCORE } from "../actions/types";
const initialState = {
    score:[],
    userScore:[],
    error:[],
}
export default function(state=initialState,action){
    switch(action.type){
        case SET_SCORE:
            return{
                ...state, 
                score:action.payload,
            }
        case GET_SCORE:
            return{
                ...state,
                userScore:action.payload
            }
            default:
      return state;
    }
}