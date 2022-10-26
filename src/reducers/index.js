import { combineReducers } from "redux";
import leaderBoardReducer from "./leaderBoardReducer";
import questionReducer from "./questionReducer";

export default combineReducers({
    question: questionReducer,
    highScoreList: leaderBoardReducer,
})