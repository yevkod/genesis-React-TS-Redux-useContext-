import { combineReducers } from "redux";
import mainReducer from "./mainReducer";

const reducers = combineReducers({
    reducer: mainReducer
})

export default reducers;