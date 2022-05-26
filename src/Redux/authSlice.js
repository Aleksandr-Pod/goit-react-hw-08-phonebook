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
        toggleLogin(state) {state.auth.isLogged=!state.auth.isLogged}
    }
})
export const { toggleLogin } = authSlice.actions;
export default authSlice.reducer; 