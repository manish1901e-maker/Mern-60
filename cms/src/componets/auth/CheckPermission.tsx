import { type ReactNode } from "react"
import useAuth from "../../lib/hook/useAuth";
import { Navigate } from "react-router";


export interface ICheckPermission{
    children:ReactNode;
    role: "admin"| "user"| "moderator"
}
const CheckPermission=({children, role}: Readonly<ICheckPermission>)=>{
 const {loggedInUserDetails}= useAuth()

 if (!loggedInUserDetails){
    // redirect user to login page
    //toast.error("Please login first to access this panel")
    return <Navigate to={'/'} />
 }else if (loggedInUserDetails && loggedInUserDetails.role !==role){
    return <Navigate to={'/'+loggedInUserDetails.role}/>
 } else {
    return children;
 }


}

export default CheckPermission