import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userAuthenticated : false
};
  
const UserSlice = createSlice({
    name: "login",
    initialState: initialState,
    reducers: {
        loggedIn(state, action) {
            state.userAuthenticated = action.payload;
        }
    },
});

export default UserSlice;
export const userAction = UserSlice.actions;