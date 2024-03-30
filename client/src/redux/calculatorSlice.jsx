import {createSlice} from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: {
        history: [],
        expression: "",
    },
    reducers: {
        updateHistory: (state, action) => {
            state.history = action.payload;
        },

        updateExpression: (state, action) => {
            state.expression = action.payload;
        },

        resetCalculator: (state) => {
            state.expression = "";
            state.history = [];
        },
    }
});

export const calculatorActions = calculatorSlice.actions;
export default calculatorSlice.reducer;