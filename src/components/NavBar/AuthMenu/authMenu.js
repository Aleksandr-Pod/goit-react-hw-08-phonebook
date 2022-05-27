import { Button } from "../navBar.styled";

export const AuthMenu = () => {
  return (
    <>
      <Button to={'register'}>Register</Button>
      <Button to={'login'}>Login</Button>
    </>
  )
}