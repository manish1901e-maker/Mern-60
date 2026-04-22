import { NavLink } from "react-router";
import { PageHeading, SubHeading } from "../../componets/ui/typography/Title";

export default function UserList(){
    return(
        <>
        <section className="w-full flex p-5 bg-white flex-col gap-5">
            
                
        <div className="flex justify-between w-full items-center">
          <PageHeading>User Listing</PageHeading>
          <NavLink className={'w-50 p-2 bg-teal-800 text-white rounded-lg flex justify-center items-center transition hover:bg-teal-900 hover:scale-103 hover:underline '} to="/admin/user/create">Add User</NavLink>
        </div>
                
                <div className="flex w-full">
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
                            <tr className="bg-gray-100">
                            <td className="border px-3">kevin</td>
                            <td className="border px-3">manish@gmail.com</td>
                            <td className="border px-3">Admin</td>
                            <td className="border px-3">Male</td>
                            <td className="border px-3">Bhaktapur</td>
                            <td className="border px-3">
                                <div>
                                    <SubHeading className="text-2xl">Broadway Infosys</SubHeading>
                                    <p className="text-sm font-semibold">Tinkune Kathmandu</p>
                                </div>
                            </td>
                           <td className="border px-3">
                            <NavLink className={'text-teal-700 underline text-sm'} to='/admin/user/user.kevin'>view</NavLink>
                             / Edit / Delete
                              </td>
                           </tr>
                           <tr className="bg-white">
                            <td className="border px-3">anish</td>
                            <td className="border px-3">manish@gmail.com</td>
                            <td className="border px-3">Admin</td>
                            <td className="border px-3">Male</td>
                            <td className="border px-3">Bhaktapur</td>
                            <td className="border px-3">
                                <div>
                                    <SubHeading className="text-2xl">Broadway Infosys</SubHeading>
                                    <p className="text-sm font-semibold">Tinkune Kathmandu</p>
                                </div>
                            </td>
                           <td className="border px-3">
                            <NavLink className={'text-teal-700 underline text-sm'} to='/admin/user/anish'>view</NavLink>
                             / Edit / Delete
                              </td>
                           </tr>
                           <tr className="bg-gray-100">
                            <td className="border px-3">Manish</td>
                            <td className="border px-3">manish@gmail.com</td>
                            <td className="border px-3">Admin</td>
                            <td className="border px-3">Male</td>
                            <td className="border px-3">Bhaktapur</td>
                            <td className="border px-3">
                                <div>
                                    <SubHeading className="text-2xl">Broadway Infosys</SubHeading>
                                    <p className="text-sm font-semibold">Tinkune Kathmandu</p>
                                </div>
                            </td>
                           <td className="border px-3">
                            <NavLink className={'text-teal-700 underline text-sm'} to='/admin/user/user-Manish'>view</NavLink>
                             / Edit / Delete
                              </td>
                           </tr>
                        </tbody>
                    </table>

                </div>
            

        </section>
        </>
    )
}