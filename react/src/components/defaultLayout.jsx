import { Outlet, Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/contextProvider";
import { useEffect } from "react";
import Navbar from "./Navbar";
import axiosClient from "../axios-client";

export default function DefaultLayout() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { user, token, setUser, setToken } = useStateContext();
    const onLogout = (ev) => {
        ev.preventDefault();
        axiosClient.post("/logout").then(() => {
            setUser({});
            setToken(null);
        });
    };
    //update user info in navbar
    useEffect(() => {
        axiosClient.get("/user").then(({ data }) => {
            setUser(data);
        });
    }, []);
    if (!token) {
        return <Navigate to="/login" />;
    }

    console.log(user);
    return (
        <div>
            <Navbar user={user} onLogout={onLogout} />
            <Outlet />
        </div>
    );
}
