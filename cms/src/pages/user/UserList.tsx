import { NavLink, useNavigate } from "react-router";
import { PageHeading, SubHeading } from "../../componets/ui/typography/Title";
import { useEffect } from "react";
import type { IUserData } from "../../lib/types/AuthType";
import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "../../lib/store/store";
import { getAllUsers, getUserDetail } from "../../lib/reducer/UserReducer";

export default function UserList() {
  const navigate = useNavigate()

  const userList = useSelector((root: RootState) => {
    return root.user.allUsers as unknown as Array<IUserData>
  })
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    // first API call from here
    dispatch(getAllUsers());
  }, [])

  return (
    <>
      <section className="flex p-5 bg-white w-full flex-col gap-5">
        <div className="flex justify-between w-full">
          <PageHeading>User Listing</PageHeading>
          
          <NavLink className={'w-50 p-2 bg-teal-800 text-white rounded-lg flex justify-center items-center transition hover:bg-teal-900 hover:scale-103 hover:underline'} to="/admin/user/create">Add User</NavLink>
        </div>

        <div className="flex w-full h-[80vh] overflow-y-scroll">
          <table className="w-full">
            <thead>
              <tr>
                <th className="border p-2 bg-gray-950 text-white">Name</th>
                <th className="border p-2 bg-gray-950 text-white">Email</th>
                <th className="border p-2 bg-gray-950 text-white">Role</th>
                <th className="border p-2 bg-gray-950 text-white">Gender</th>
                <th className="border p-2 bg-gray-950 text-white">Address</th>
                <th className="border p-2 bg-gray-950 text-white">Company</th>
                <th className="border p-2 bg-gray-950 text-white">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                userList && userList.map((user:IUserData, indx: number) => {
                  return (
                    <tr key={indx} className="bg-gray-100">
                      <td className="border px-3">
                        {user.firstName + " " + user.lastName}
                      </td>
                      <td className="border px-3">{user.email}</td>
                      <td className="border px-3">{user.role}</td>
                      <td className="border px-3">{user.gender}</td>
                      <td className="border px-3">
                        { user.address ? user.address.address +
                          ", " +
                          user.address.city +
                          ", " +
                          user.address.country : ""}
                      </td>
                      <td className="border px-3">
                        <div>
                          <SubHeading className="text-xl!">
                            {user.company.name}
                          </SubHeading>

                          <p className="text-sm font-semibold">
                            {user.company.title}
                            , {user.company.department}
                          </p>
                        </div>
                      </td>
                      <td className="border px-3">
                        <NavLink
                          className={"text-teal-700 underline text-sm"}
                          to={"/admin/user/"+user.id}
                          onClick={(e) => {
                            e.preventDefault()
                            dispatch(getUserDetail({userId: `${user.id}`}))
                            navigate('/admin/user/'+user.id)
                          }}
                        >
                          View
                        </NavLink>
                        / Edit / Delete
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}