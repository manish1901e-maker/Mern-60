import { useContext } from "react"
import AuthContext from "../context/AuthContent"

const useAuth = ()=>{
    //const {login, getLoggedInUser, loggedInUserDetail} = useContext(AuthContext)
    const userContext= useContext(AuthContext)
    return{...userContext}
    }
export default useAuth