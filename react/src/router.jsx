import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/home";
import Signup from "./routes/signup";
import Login from "./routes/login";
import NotFound from "./routes/notFound";
import DefaultLayout from "./components/defaultLayout";
import GuestLayout from "./components/guestLayout";


const Router = createBrowserRouter([

    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/home",
                element: <Home />
            },

        ]
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/signup",
                element: <Signup />
            },
            {
                path: "/login",
                element: <Login />
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }

])
export default Router;