import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
export const router = createBrowserRouter([
    {
        path: "/", element: <Main></Main>, children: [
            {
                path: "/", element: <Home></Home>
            }, {
                path: "/login", element: <Login></Login>
            },
            {
                path: "/signup", element: <Signup></Signup>
            }
        ]
    },
    {
        path: "*", element: <NotFound></NotFound>
    }
])