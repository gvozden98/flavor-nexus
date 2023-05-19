import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/home";
import Signup from "./routes/signup";
import Login from "./routes/login";
import Profile from "./routes/Profile";
import NotFound from "./routes/notFound";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Fitness from "./routes/Fitness";
import Eat from "./routes/Eat";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
            {
                path: "/category/eat",
                element: <Eat />,
            },
            {
                path: "/category/fitness",
                element: <Fitness />,
            },
        ],
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/signup",
                element: <Signup />,
            },
            {
                path: "/login",
                element: <Login />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);
export default Router;
