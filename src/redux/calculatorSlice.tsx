import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CalculatorState{
    history: string[];
    expression: string;
}

const initialState: CalculatorState = {
    history: [],
    expression: "",
};

const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: initialState,
    reducers: {
        updateHistory: (state, action: PayloadAction<string[]>) => {
            state.history = action.payload;
        },

        updateExpression: (state, action: PayloadAction<string>) => {
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