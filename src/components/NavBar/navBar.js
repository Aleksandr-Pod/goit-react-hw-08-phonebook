import { UserMenu } from "components/UserMenu/userMenu";
import { Outlet } from "react-router-dom";
import { Header, Button } from "./navBar.styled";
import { useDispatch } from "react-redux";
import { toggleLogin } from 'Redux/otherSlices';

export const NavBar = () => {
  const dispatch = useDispatch();

  return (
    <section>
      <Header>
        <Button type='button'>Register</Button>
        <Button type='button' onClick={() => dispatch(toggleLogin)}>Login</Button>
        <UserMenu/>
      </Header>
      <hr />
      <Outlet/>
    </section>
  )
}