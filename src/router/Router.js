import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import BlogLayout from "../layout/BlogLayout";
import Blog from "../pages/Blog/Blog";
import Courses from "../pages/Courses/Courses";
import Membership from "../pages/Membership/Membership";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import Teachers from "../pages/Teachers/Teachers";
import PrivateRouter from "./PrivateRouter";
export const router = createBrowserRouter([
    {
        path: "/", element: <Main></Main>, children: [
            {
                path: "/", element: <Home></Home>
            },
            {
                path: "/course", element: <Courses></Courses>
            },
            {
                path: "/course/:id", loader: ({ params }) => fetch(`https://knowledgenet-serverside.vercel.app/course/${params.id}`), element: <PrivateRouter><CourseDetails></CourseDetails></PrivateRouter>
            },
            {
                path: "/teachers",
                loader: () => fetch("https://knowledgenet-serverside.vercel.app/teachers"),
                element: <Teachers></Teachers>
            },
            {
                path: "/membership", element: <Membership></Membership>
            },
            {
                path: "/login", element: <Login></Login>
            },
            {
                path: "/signup", element: <Signup></Signup>
            }
        ]
    }, {
        path: "/blog", element: <BlogLayout></BlogLayout>, children: [
            {
                path: "/blog",
                loader: () => {
                    return fetch("https://knowledgenet-serverside.vercel.app/blog")
                },
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: "*", element: <NotFound></NotFound>
    }
])