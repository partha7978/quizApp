import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "./questionSlice";
import resultReducer from "./resultSlice";

export default configureStore({
    reducer: {
        question: questionReducer,
        result: resultReducer,
    },
})