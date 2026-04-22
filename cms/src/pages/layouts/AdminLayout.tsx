import { NavLink, Outlet } from "react-router";
import { PageHeading } from "../../componets/ui/typography/Title";
import useAuth from "../../lib/hook/useAuth";

export default function AdminLayout() {
    const {loggedInUserDetails}= useAuth()

    return (
        <>
            <header className="w-full p-5 bg-indigo-950 text-white flex justify-between item-center">
                <PageHeading className="text-green-400">Admin Portal</PageHeading>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/admin" className="text-lg text-right items-center">{loggedInUserDetails?.firstName+ " "+ loggedInUserDetails?.lastName }</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>

            <section className="w-full flex">
                <aside className="w-1/4  bg-gray-700 text-white p-3">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to='/admin/user/create'>User Create</NavLink>
                            </li>
                        </ul>
                    </nav>
                </aside>
                <section className="w-4/5 bg-gray-100 p-5 flex rounded-md">
                    <Outlet />
                </section>
            </section>
            <footer className="w-full px-5 py-3 bg-indigo-950 text-white flex justify-center items-center">
                &copy; Manish Khadka
            </footer>
        </>
    )
}