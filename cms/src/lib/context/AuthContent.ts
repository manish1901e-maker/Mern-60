import { createContext } from "react";
import type { ICredentials } from "../../componets/auth/LoginForm";
import type { IUserData } from "../types/AuthType";

// type declaration for the context
export interface IAuthContext{
    login(credential: ICredentials): Promise<IUserData| void>,
    getLoggedInUser(): Promise<IUserData| void>,
    loggedInUserDetails:IUserData|null,
}

// default value passed to context
const AuthContext = createContext<IAuthContext>({
    async login() {},
    async getLoggedInUser () {},
    loggedInUserDetails:null
})

export default AuthContext