import { alignProperty } from '@mui/material/styles/cssUtils';
import { createSlice } from '@reduxjs/toolkit'

const STATUSES = Object.freeze( {
    IDLE: 'idle',
    LOADING: 'loading',
    ERROE: 'error'
})

const questionSlice = createSlice({
    name: 'questions',
    initialState: {
        data: [],
        questionWithOption: [],
        status: STATUSES.IDLE,
    },

    reducers: {
        setQuestions(state, action) {
            state.data = action.payload;
        },
        setQuestionWithOption(state, action) {
            state.data = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        }
    },
});

export const {setQuestions,setQuestionWithOption, setStatus} = questionSlice.actions;
export default questionSlice.reducer;

//THUNKS - here fetchQuestion returns a function
