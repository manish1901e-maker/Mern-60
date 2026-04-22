import { useEffect, useState, type ReactNode } from "react";
import AuthContext from "../context/AuthContent";
import { type ICreateUser } from "../types/AuthType";
import type { ICredentials } from "../../componets/auth/LoginForm";
import axiosInstance from "../client/axios-client";
import Cookies from "js-cookie";

export default function AuthProvider({children,}: Readonly<{ children: ReactNode }>) {
    const [loggedInUserDetail, setLoggedInUserDetail] = useState<ICreateUser | null>(null);
    const[loading, setloading]= useState<boolean>(true)

    type LoginResponse = {
        accessToken: string;
        refreshToken: string;
    };

    const login = async (credentials: ICredentials): Promise<ICreateUser | void> => {
        const loginData = await axiosInstance.post<LoginResponse>('/auth/login', {
            ...credentials,
            expiresInMins: 180
        }) 
    console.log("LogIn Data:", loginData)
    
        Cookies.set("_at_60", loginData.accessToken, {
            expires: 1,
            sameSite: "lax",
            secure: true,

        });
        Cookies.set("_rt_60", loginData.refreshToken, {
            expires: 1,
            sameSite: "lax",
            secure: true,

        })

        return await getLoggedInUser()
    };
    const getLoggedInUser = async (): Promise<ICreateUser | void> => {
        try {
            const userDetail = await axiosInstance.get<ICreateUser>('/auth/me')
            setLoggedInUserDetail(userDetail)
            return userDetail
        } catch (exception) {
            console.log(exception)
            throw exception
        }finally{
            setloading(false)
        }
    };
    useEffect(()=> {
        const token = Cookies.get("_at_60")
        if (token){
            getLoggedInUser()
        }else{
            setloading(false)
        }
    }, [])


    return loading? (
         <>Loading...</>
    ) : (
        <AuthContext.Provider
            value={{
                login: login,
                getLoggedInUser: getLoggedInUser,
                loggedInUserDetails: loggedInUserDetail
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}