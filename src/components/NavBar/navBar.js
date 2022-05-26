import { UserMenu } from "components/NavBar/UserMenu/userMenu";
import { AuthMenu } from "./AuthMenu/authMenu";
import { Outlet } from "react-router-dom";
import { Header } from "./navBar.styled";
import { useSelector } from "react-redux";

export const NavBar = () => {
  const isLogged = useSelector(state => state.auth.isLogged);
  console.log('isLogged:', isLogged);
  return (
    <section>
      <Header>
        {isLogged ? <UserMenu/> : <AuthMenu/>}       
      </Header>
      <hr />
      <Outlet/>
    </section>
  )
}