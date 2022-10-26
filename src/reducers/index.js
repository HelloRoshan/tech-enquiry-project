import { combineReducers } from "redux";
import leaderBoardReducer from "./leaderBoardReducer";
import questionReducer from "./questionReducer";
import scoreReducer from "./scoreReducer";

export default combineReducers({
    question: questionReducer,
    highScoreList: leaderBoardReducer,
    score:scoreReducer
})