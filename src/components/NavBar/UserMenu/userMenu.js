import { UserEmail } from "./userMenu.styled";
import { useDispatch, useSelector } from "react-redux";
import { toggleLogin } from "Redux/authSlice";
import { useNavigate } from "react-router-dom";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.auth.user.email);

    const onLogOut = () => {
        dispatch(toggleLogin(false));
        navigate('/');
    }
    return (
        <>
            <UserEmail>{user}</UserEmail>
            <button type="button" on onClick={onLogOut}>LogOut</button>
        </>
    )
}