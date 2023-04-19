import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import dataReducer from "./data/reducer";

const rootReducer = combineReducers({
    authState: authReducer,
    dataState: dataReducer
})

export default rootReducer