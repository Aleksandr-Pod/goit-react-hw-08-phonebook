import { Routes, Route } from "react-router-dom";
import { NavBar } from "./NavBar/navBar";
import { Greetings } from "./Greetings/greetings";
import { Phonebook } from "./Phonebook/Phonebook";
import { RegisterForm } from "./AuthForm/registerForm";
import { LoginForm } from "./AuthForm/loginForm";

export const App = () => {

  return (
    <Routes>
      <Route path="/" element={<NavBar />} >;
        <Route index element={<Greetings />} />;
        <Route path="login" element={<LoginForm/>} />;
        <Route path="register" element={<RegisterForm/>} />;
        <Route path="phonebook" element={<Phonebook />} />;
      </Route>
    </Routes>
  )
}