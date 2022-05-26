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
        toggleLogin(state, action) { state.isLogged = !state.isLogged },
        addUser(state, {payload}) {
            state.user.name = payload.name;
            state.user.email = payload.email;
        }
    }
})
export const { toggleLogin, addUser } = authSlice.actions;
export default authSlice.reducer; 