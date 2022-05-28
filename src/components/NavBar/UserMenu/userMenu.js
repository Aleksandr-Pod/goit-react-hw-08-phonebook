import { UserEmail } from "./userMenu.styled";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "API/authOperations";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.auth.user.email);

    const onLogOut = () => {
        dispatch(logout(false));
        navigate('/');
    }
    return (
        <>
            <UserEmail>{user}</UserEmail>
            <button type="button" on onClick={onLogOut}>LogOut</button>
        </>
    )
}