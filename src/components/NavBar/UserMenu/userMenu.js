import { UserEmail } from "./userMenu.styled";
import { Button } from "../navBar.styled";

export const UserMenu = () => {
    return (
        <>
            <UserEmail>Тут почта юзера</UserEmail>
            <Button to="/">LogOut</Button>
        </>
    )
}