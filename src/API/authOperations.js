// https://connections-api.herokuapp.com/

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { addUser, toggleLogin } from 'Redux/authSlice';
const baseUrl = 'https://connections-api.herokuapp.com/users/';
    
export const register = (user) => {
    axios.post(`${baseUrl}signup`, user);
}
export const login = (user) => dispatch => {
    axios.post(`${baseUrl}login`, { email: user.email, password: user.password })
        .then(resp => {
            dispatch(addUser(resp.data));
            dispatch(toggleLogin(true));
        })
    ;
}
