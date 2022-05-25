import { Outlet } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <h1>Navigation Bar</h1>
      <hr />
      <Outlet/>
    </>
  )
}