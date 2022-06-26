import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    test: ""
}

export const testSlice = createSlice({
    name: 'tester',
    initialState,
    reducers: {
     
      
        incrementByAmount: (state, action) => {
            state.test = action.payload;
        }
    }
});

export const { incrementByAmount } = testSlice.actions;

export default testSlice.reducer;