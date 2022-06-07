import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const RedirectRoute = ({ children, ...path }) => {
    const isLogged = useSelector(state => state.auth.isLogged);
    return (
        <>
            {isLogged ? <Navigate to={path} replace /> : children }
        </>
    )
}