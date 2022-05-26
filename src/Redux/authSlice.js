import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    user: { name: "shit", email: "" },
    token: "",
    isLogged: false
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        toggleLogin(state) { state.auth.isLogged = true },
        addUser(state, action) {state.auth.user = action.payload}
    }
})
export const { toggleLogin, addUser } = authSlice.actions;
export default authSlice.reducer; 