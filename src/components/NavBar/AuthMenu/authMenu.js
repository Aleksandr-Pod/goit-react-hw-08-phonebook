import { Button } from "../navBar.styled";
//      without private route
// import { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";


export const AuthMenu = () => {
  //      without private route
  // const navigate = useNavigate();
  // const isLogged = useSelector(state => state.auth.isLogged);
  // useEffect(() => {
    // if (!isLogged) navigate('/')
  // })
  return (
    <>
      <Button to={'register'}>Register</Button>
      <Button to={'login'}>Login</Button>
    </>
  )
}