import { UserEmail } from "./userMenu.styled";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "API/authOperations";
import { useEffect } from "react";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.auth.user.email);

    useEffect(() => {
        navigate('/phonebook');
        return () => navigate('/login');
    }, [navigate])
    
    return (
        <>
            <UserEmail>{user}</UserEmail>
            <button type="button" on onClick={() => dispatch(logout())}>LogOut</button>
        </>
    )
}