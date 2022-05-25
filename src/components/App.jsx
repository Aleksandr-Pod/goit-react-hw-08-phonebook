import { Routes, Route } from "react-router-dom";
import { NavBar } from "./NavBar/navBar";
import { Phonebook } from "./Phonebook/Phonebook";

export const App = () => {
  const greetings = "<h2> Hello, my friend </h2>";

  return (

    <Routes>
      <Route path="/" elements={<NavBar />} >;
        <Route index elements={greetings}/>;
        <Route path="/Phonebook" elements={<Phonebook />} />;
      </Route>
    </Routes>

  )
}