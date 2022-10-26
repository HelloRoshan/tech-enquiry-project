import { GET_ERROR,SET_SCORE } from "../actions/types";
const initialState = {
    score:[],
    error:[],
}
export default function(state=initialState,action){
    switch(action.type){
        case SET_SCORE:
            return{
                ...state, 
                score:action.payload,
            }
            default:
      return state;
    }
}