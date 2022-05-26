import { useDispatch } from "react-redux";
import { toggleLogin } from 'Redux/authSlice';
import { Button } from "../navBar.styled";

export const AuthMenu = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Button to={'register'}>Register</Button>
      <Button to={'login'} onClick={() => dispatch(toggleLogin)}>Login</Button>
    </>
  )
}