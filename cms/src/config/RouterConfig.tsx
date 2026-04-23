import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "../pages/home/HomePage";
import ForgotPasswordPage from "../componets/auth/ForgetPassword";
import NotFound from "../pages/error/NotFound";
import UserLayout from "../pages/layouts/UserLayout";
import AdminLayout from "../pages/layouts/AdminLayout";
import UserCreate from "../pages/user/UserCreate";
import UserList from "../pages/user/UserList";
import UserDetail from "../pages/user/UserDetail";
import CheckPermission from "../componets/auth/CheckPermission";
import AdminDashboard from "../pages/dashboard/AdminDashboard";

const routerConf = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/forget-password", element: <ForgotPasswordPage /> },

    {
        path: "/admin/",
        element: (
            <CheckPermission role="admin">
                <AdminLayout />
            </CheckPermission>
        ),
        children: [
            { index: true, element:<AdminDashboard/>},
            { path: "users", element: <UserList /> },
            { path: "user/:username", element: <UserDetail /> },
            { path: "user/create", element: <UserCreate /> }
        ]
    },

    {
        path: "/user",
        element: (
            <CheckPermission role="user">
                <UserLayout />
            </CheckPermission>

        ),
        children: [
            { index: true, element: <> Dashboard (KPI)</> },
            { path: "profile", element: <> User Profile </> },
            { path: "*", element: <NotFound /> },
        ],
    },
    {
        path: "/moderator", 
        element: (
        <CheckPermission role="moderator">
            <UserLayout />
        </CheckPermission>), 
        children: [
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