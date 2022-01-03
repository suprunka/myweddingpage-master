import { combineReducers } from "redux";
import page from "./pageReducer"
import { createStore } from "redux";

export const appReducer = combineReducers({
    page
});

export const rootReducer = (state, action) => {
    return appReducer(state, action);
};



const store = createStore(rootReducer);

export default store;
