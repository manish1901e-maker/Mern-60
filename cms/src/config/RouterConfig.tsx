import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "../pages/home/HomePage";
import ForgotPasswordPage from "../componets/auth/ForgetPassword";
import NotFound from "../pages/error/NotFound";
import UserLayout from "../pages/layouts/UserLayout";
import AdminLayout from "../pages/layouts/AdminLayout";
import UserCreate from "../pages/user/UserCreate";
import UserList from "../pages/user/UserList";
import UserDetail from "../pages/user/UserDetail";

const routerConf = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/forget-password", element: <ForgotPasswordPage /> },

    {
        path: "/admin/", element: <AdminLayout />, children: [
            { path: "users", element: <UserList /> },
            { path: "user/:username", element: <UserDetail /> },
            { path: "user/create", element: <UserCreate /> }
        ]
    },

    {
        path: "/user", element: <UserLayout />, children: [
            { index: true, element: <> Dashboard (KPI)</> },
            { path: "profile", element: <> User Profile </> },
            { path: "*", element: <NotFound /> },
        ],
    },
    {
        path: "/moderator", element: <UserLayout />, children: [
            { index: true, element: <> Dashboard (KPI)</> },
            { path: "profile", element: <> User Profile </> },
            { path: "*", element: <NotFound /> },
        ],
    },

    { path: "*", element: <NotFound /> },
])

export default function RouterConfig() {

    //declaration of data
    return (<RouterProvider router={routerConf} />)
}