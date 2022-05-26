import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    user: { name: "", email: "" },
    token: null,
    isLogged: false
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        toggleLogin(state, action) { state.auth.isLogged = !state.auth.isLogged },
        addUser(state, {payload}) {
            state.auth.user.name = payload.name;
            state.auth.user.email = payload.email;
        }
    }
})
export const { toggleLogin, addUser } = authSlice.actions;
export default authSlice.reducer; 