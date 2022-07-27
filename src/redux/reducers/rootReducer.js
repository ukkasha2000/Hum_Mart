import { combineReducers } from "redux";
import shopReducer from "./Shopping-reducer";
import orderReducer from "./order-reducer";

const rootReducer = combineReducers({
    shopReducer,
    orderReducer
});

export default rootReducer;