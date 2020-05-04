import { combineReducers } from "redux";
import reducer from "./info";

const globalstate = combineReducers({ reducer });

export default globalstate;
