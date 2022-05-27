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
        toggleLogin (state, {payload}) { state.isLogged = payload },
        addUser(state, {payload}) {
            state.user.name = payload.user.name;
            state.user.email = payload.user.email;
            state.token = payload.token
        }
    }
})
export const { toggleLogin, addUser } = authSlice.actions;
export default authSlice.reducer; 