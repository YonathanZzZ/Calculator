import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UserState{
    username: string;
    email: string;
    isLoggedIn: boolean;
}

const initialState: UserState = {
    username: "",
    email: "",
    isLoggedIn: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        login: (state, action: PayloadAction<{username: string; email: string}>) => {
            state.isLoggedIn = true;
            state.username = action.payload.username;
            state.email = action.payload.email;
        },

        logout: () => {
            return initialState;
        },
    }
});

export const userActions = userSlice.actions;
export default userSlice.reducer;