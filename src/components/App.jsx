import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getCurrent } from "API/authOperations";
// Components
import { NavBar } from "./NavBar/navBar";
import { Greetings } from "./Greetings/greetings";
import { RegisterForm } from "./AuthForm/registerForm";
import { PageNotFound } from "./PageNotFound/pageNotFound";
import { PrivateRoute } from "./privateRoute";
import { LoginForm } from "./AuthForm/loginForm";
import { Phonebook } from "./Phonebook/Phonebook";
import { RedirectRoute } from "./redirectRoute";
import { toggleLogin } from "Redux/authSlice";


export const App = () => {
  const { token } = useSelector(state => state.auth);
  const dispatch = useDispatch();

useEffect(() => {
  token ? dispatch(getCurrent()) : dispatch(toggleLogin(false));
}, [dispatch, token]);

  return (
    <Routes>
      <Route path="/" element={<NavBar />} >;
        <Route index element={<RedirectRoute><Greetings /></RedirectRoute>} />;
        <Route path="register" element={<RedirectRoute><RegisterForm /></RedirectRoute>} />;
        <Route path="login" element={<RedirectRoute><LoginForm /></RedirectRoute>} />;
        <Route path="phonebook" element={<PrivateRoute><Phonebook /></PrivateRoute>} />;
      </Route>
      <Route path="*" element={<PageNotFound/>} />;
    </Routes>
  )
}