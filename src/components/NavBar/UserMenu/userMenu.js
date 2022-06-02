import { UserEmail } from "./userMenu.styled";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "API/authOperations";
import { useEffect } from "react";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector(state => state.auth.user.name);
    useEffect(() => {
        navigate('/phonebook');
        return () => navigate('/');
    }, [navigate])
    
    return (
        <>
            <UserEmail>{user}</UserEmail>
            <button type="button" onClick={() => dispatch(logout())}>LogOut</button>
        </>
    )
}