import { createSlice } from '@reduxjs/toolkit'

const userDataSlice = createSlice({
    name: 'user',
    initialState: [],

    reducers: {
        setUser(state, action) {
            state.push(action.payload);
        }
    },
})

export const { setUser } = userDataSlice.actions;
export default userDataSlice.reducer;