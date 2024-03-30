import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: "",
        email: "",
        isLoggedIn: false,
    },
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.username = action.payload.username;
            state.email = action.payload.email;
        },

        logout: () => {
            return {...userSlice.getInitialState};
        },
    }
});

export const userActions = userSlice.actions;
export default userSlice.reducer;