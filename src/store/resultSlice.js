
import { createSlice } from '@reduxjs/toolkit'


const questionSlice = createSlice({
    name: 'result',
    initialState: [],

    reducers: {
        setQuestionsPlusAns(state, action) {
            state.push(action.payload);
        },
    },
});

export const {setQuestionsPlusAns} = questionSlice.actions;
export default questionSlice.reducer;
