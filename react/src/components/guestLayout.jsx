import { Outlet, Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/contextProvider";
import Navbar from "./navbar";

export default function guestLayout() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { token } = useStateContext();
    if (token) {
        return <Navigate to="/" />;
    }
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
}
