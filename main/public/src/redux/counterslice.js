import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    log: "",
    
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state,action) => {
            state.log =action.payload ;
        },
        decrement: (state) => {
            state.log -= 1;
        },
        // reset: (state) => {
        //     state.count = 0;
        // },
        // incrementByAmount: (state, action) => {
        //     state.count += action.payload;
        // }
    }
});

export const { increment, decrement} = counterSlice.actions;

export default counterSlice.reducer;