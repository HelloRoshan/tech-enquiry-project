import { GET_ERROR,GET_QUESTION } from "../actions/types";
const initialState = {
    question:[],
    error:[],
}
export default function(state=initialState,action){
    switch(action.type){
        case GET_QUESTION:
            return{
                ...state, 
                question:action.payload,
            }
            default:
      return state;
    }
}