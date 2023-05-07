import { Outlet, Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/contextProvider";
import Navbar from "./navbar";

export default function defaultLayout() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { user, token } = useStateContext();

    if (!token) {
        return <Navigate to="/login" />;
    }
    console.log(user);
    return (
        <div>
            <Navbar user={user} />
            <Outlet />
        </div>
    );
}
