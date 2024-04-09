import {configureStore} from "@reduxjs/toolkit";
import calculatorReducer from './calculatorSlice.jsx';
import userReducer from './userSlice.jsx';

const store = configureStore({
    reducer: {
        calculator: calculatorReducer,
        user: userReducer,
    },
});

export default store;