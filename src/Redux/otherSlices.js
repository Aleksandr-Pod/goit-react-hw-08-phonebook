import { createSlice } from "@reduxjs/toolkit";

const loggedSlice = createSlice({
    name: 'isLogged',
    initialState: true,
    reducers: {
        toggleLogin(state) {state=!state}
    }
})
export const { toggleLogin } = loggedSlice.actions;
export default loggedSlice.reducer; 