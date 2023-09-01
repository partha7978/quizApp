import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "./questionSlice";
import resultReducer from "./resultSlice";
import userReducer from './userDataSlice';
import timerReducer from './timerSlice';

export default configureStore({
    reducer: {
        question: questionReducer,
        result: resultReducer,
        user: userReducer,
        timer: timerReducer
    },
})