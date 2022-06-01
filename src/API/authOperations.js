import axios from 'axios';
import { addUser, toggleLogin, changeLoading, changeError } from 'Redux/authSlice';
import { setFilter } from 'Redux/filterSlice';

const baseUrl = 'https://connections-api.herokuapp.com/users/';
const token = {
    set(token) { axios.defaults.headers.common.Authorization = `Bearer ${token}`;},
    unset() { axios.defaults.headers.common.Authorization = '';}
}
const emptyUser = {
    user: { name: '', email: '' },
    token: null
}
    
export const register = (user) => dispatch => {
    axios.post(`${baseUrl}signup`, user)
        .then(resp => {
            dispatch(addUser(resp.data));
            token.set(resp.data.token);
            dispatch(toggleLogin(true));
        })
        .catch(error => {
            dispatch(changeError(error.response.data.errors));
        })   
        .finally(dispatch(changeLoading(false)));
}
export const login = ({ email, password }) => dispatch => {
    axios.post(`${baseUrl}login`, { email, password })
        .then(resp => {
            dispatch(addUser(resp.data));
            token.set(resp.data.token);
            dispatch(toggleLogin(true));
        })
        .catch(error => {
            dispatch(changeError(error.response.statusText))
        })
        .finally(dispatch(changeLoading(false)));
}

export const logout = () => dispatch => {
    axios.post(`${baseUrl}logout`)
        .then(resp => {
            dispatch(toggleLogin(false));
            dispatch(addUser(emptyUser));
            dispatch(setFilter(''));
            token.unset();
        })
        .catch(error => dispatch(changeError(error.response.statusText)))
        .finally(dispatch(changeLoading(false)));
}
export const getCurrent = () => dispatch => {
    axios.get(`${baseUrl}current`)
        .then(resp => { dispatch(toggleLogin(true)) })
        .catch(error => dispatch(changeError(error.response.statusText)))
        .finally(dispatch(changeLoading(false)));
}