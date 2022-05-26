import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    user: { name: "", email: "" },
    token: "",
    isLogged: false
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        toggleLogin(state) { state.auth.isLogged = !state.auth.isLogged },
        addUser(state, action) {state.auth.user = action.payload}
    }
})
export const { toggleLogin, addUser } = authSlice.actions;
export default authSlice.reducer; 