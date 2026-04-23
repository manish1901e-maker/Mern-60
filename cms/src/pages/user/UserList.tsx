import { NavLink } from "react-router";
import { PageHeading, SubHeading } from "../../componets/ui/typography/Title";
import { useEffect, useState } from "react";
import type { ICreateUser } from "../../lib/types/AuthType";
import { toast } from "sonner";
import axiosInstance from "../../lib/client/axios-client";

export default function UserList(){
    const [userList, setUserList]= useState<Array<ICreateUser>>()

    const getAllUsers =async()=>{
        try{
            const response =await axiosInstance.get("/user", {
                params: {
                    limit:20,
                    skip:0
                }
            }) as {users: Array<ICreateUser>, skip:number, limit:number, total:number}
            setUserList(response.users)

        } catch (exception){
            console.log(exception)
        toast.error("Error while fetching users...",{
            description:"There was a problem while fetching user list.please clear the cache and try again"
        })
        }
    }
    useEffect(()=>{
        //first api call
       
         return()=>{
            getAllUsers()
        }
    },[])
    return(
        <>
        <section className="w-full flex p-5 bg-white flex-col gap-5">
            
                
        <div className="flex justify-between w-full items-center">
          <PageHeading>User Listing</PageHeading>
          <NavLink className={'w-50 p-2 bg-teal-800 text-white rounded-lg flex justify-center items-center transition hover:bg-teal-900 hover:scale-103 hover:underline '} to="/admin/user/create">Add User</NavLink>
        </div>
                
                <div className="flex w-full h-[80vh] overflow-y-scrool">
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
                               userList && userList.map((user:ICreateUser, indx: number)=>{
                                return(
                                    
                                
                            <tr key={indx} className="bg-gray-100">
                            <td className="border px-3">{user.firstName+" "+user.lastName}</td>
                            <td className="border px-3">{user.email}</td>
                            <td className="border px-3">{user.role}</td>
                            <td className="border px-3">{user.gender}</td>
                            <td className="border px-3">{user.address.address+" "+user.address.city+" "+user.address.country}</td>
                            <td className="border px-3">
                                <div>
                                    <SubHeading className="text-xl">
                                    {user.company.name}
                                    </SubHeading>
                                    
                                    <p className="text-sm font-semibold">
                                    {user.company.title}
                                    , {user.company.department}
                                    </p>
                                </div>
                            </td>
                           <td className="border px-3">
                            <NavLink className={'text-teal-700 underline text-sm'} to='/admin/user/user.kevin'>view</NavLink>
                             / Edit / Delete
                              </td>
                           </tr>
                           )
                        })
                     }
                           
                        </tbody>
                    </table>

                </div>
            

        </section>
        </>
    )
}