import { Routes, Route } from "react-router-dom";
import { NavBar } from "./NavBar/navBar";
import { Greetings } from "./Greetings/greetings";
import { Phonebook } from "./Phonebook/Phonebook";

export const App = () => {

  return (

    <Routes>
      <Route path="/" element={<NavBar />} >;
        <Route index element={<Greetings/>} />;
      
        <Route path="Phonebook" element={<Phonebook />} />;
      </Route>
    </Routes>

  )
}