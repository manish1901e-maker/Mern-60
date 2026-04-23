import { NavLink, Outlet } from "react-router";
import { PageHeading } from "../../componets/ui/typography/Title";
import useAuth from "../../lib/hook/useAuth";
import { Icon } from "@iconify/react";

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
            <div className="flex h-screen w-1/6 flex-col justify-between border-e border-gray-100 bg-white">
  <div className="px-4 py-6">
    

    <ul className="mt-6 space-y-1">
      <li>
        
        <NavLink to="/admin" className="flex item-center gap-3 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
          <Icon icon="fa:home"/>
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/admin/users" className="flex item-center gap-3 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-700">
          <Icon icon="fa:users"/>
          Users
        </NavLink>
      </li>
      <li>
        <NavLink to="/admin/user/create" className="flex item-center gap-3 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-700">
          <Icon icon="ph:sign-in"/>
          Sign In
        </NavLink>
      </li>
      </ul>
</div>
  <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
    <a href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
      <img alt="" 
      src= {loggedInUserDetails?.image}
      className="size-10 rounded-full object-cover" />

      <div>
        <p className="text-xs">
          <strong className="block font-medium">{loggedInUserDetails?.firstName+" "+loggedInUserDetails?.lastName}</strong>

          <span> {loggedInUserDetails?.email }</span>
        </p>
      </div>
    </a>
  </div>
</div>
                <section className="w-5/6 bg-gray-100 p-5 flex rounded-md ">
                    <Outlet />
                </section>
            </section>
            <footer className="w-full px-5 py-3 bg-indigo-950 text-white flex justify-center items-center">
                &copy; Manish Khadka
            </footer>
        </>
    )
}