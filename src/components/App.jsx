import { Phonebook } from "./Phonebook/Phonebook";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./NavBar/navBar";

export const App = () => {
  const greetings = "<h2> Hello, my friend </h2>";

  return (

    <Routes>
      <Route path="/" elements={<NavBar />}/>;
      <Route index elements={greetings}/>;
      <Route path="/Phonebook" elements={<Phonebook />}/>;
    </Routes>

  )
}