import { UserEmail } from "./userMenu.styled";
// import { Button } from "../navBar.styled";

export const UserMenu = () => {
    const onLogOut = () => {
        console.log('LogOut');
        // state.auth.isLogged = false;
    }
    return (
        <>
            <UserEmail>Тут почта юзера</UserEmail>
            <button type="button" on onClick={onLogOut}>LogOut</button>
        </>
    )
}