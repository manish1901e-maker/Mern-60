import { createContext } from "react";
import type { ICredentials } from "../../componets/auth/LoginForm";
import type { ICreateUser } from "../types/AuthType";

// type declaration for the context
export interface IAuthContext{
    login(credential: ICredentials): Promise<ICreateUser| void>,
    getLoggedInUser(): Promise<ICreateUser| void>,
    loggedInUserDetails:ICreateUser|null,
}

// default value passed to context
const AuthContext = createContext<IAuthContext>({
    async login() {},
    async getLoggedInUser () {},
    loggedInUserDetails:null
})

export default AuthContext