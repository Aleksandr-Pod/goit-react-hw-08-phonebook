import { Routes, Route } from "react-router-dom";
import { NavBar } from "./NavBar/navBar";
import { Greetings } from "./Greetings/greetings";
import { RegisterForm } from "./AuthForm/registerForm";
import { PageNotFound } from "./PageNotFound/pageNotFound";
import { PrivateRoute } from "./privateRoute";
import { RedirectRoute } from "./redirectRoute";
import { LoginForm } from "./AuthForm/loginForm";
import { Phonebook } from "./Phonebook/Phonebook";

export const App = () => {

  return (
    <Routes>
      <Route path="/" element={<NavBar />} >;
        <Route index element={<Greetings />} />;
        <Route path="register" element={<RegisterForm />} />;
        <Route path="login" element={<LoginForm />} />;
        <Route path="phonebook" element={<PrivateRoute path="login"><Phonebook/></PrivateRoute>} />;
      </Route>
      <Route path="*" element={<PageNotFound/>} />;
    </Routes>
  )
}