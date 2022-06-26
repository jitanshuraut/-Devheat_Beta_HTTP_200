import { configureStore } from "@reduxjs/toolkit";
import counterReducer from  "../src/redux/counterslice"
import testReducer from "../src/redux/testslice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        tester:testReducer,
    }
})