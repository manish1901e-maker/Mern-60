import { useEffect, useState, type ReactNode } from "react";
import AuthContext from "../context/AuthContent";
import {type IUserData } from "../types/AuthType";
import type { ICredentials } from "../../componets/auth/LoginForm";
import axiosInstance from "../client/axios-client";
import Cookies from "js-cookie";

export default function AuthProvider({children}: Readonly<{children: ReactNode}>) {
  const [loggedInUserDetail, setLoggedInUserDetail] = useState<IUserData | null>(null)
  const [loading, setLoading] = useState<boolean>(true);

  const login = async(credentials: ICredentials): Promise<IUserData|void> =>{
    const loginData = (await axiosInstance.post("/auth/login", {
      ...credentials,
      expiresInMins: 180,
    })) as { accessToken: string; refreshToken: string };
    Cookies.set("_at_60", loginData.accessToken, {
      expires: 1,
      sameSite: "lax",
      secure: true,
    });
    Cookies.set("_rt_60", loginData.refreshToken, {
      expires: 1,
      sameSite: "lax",
      secure: true,
    });

    return await getLoggedInUser()
  } 

  const getLoggedInUser = async (): Promise<IUserData|void> => {
    try {
      const userDetail = await axiosInstance.get('/auth/me') as IUserData
      setLoggedInUserDetail(userDetail)
      return userDetail
    } catch(exception) {
      console.log(exception)
      throw exception
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const token = Cookies.get("_at_60");
    if(token) {
      getLoggedInUser()
    } else {
      setLoading(false)
    }
  }, [])

  return loading ? (
    <>Loading...</>
  ) : (
    <AuthContext.Provider
      value={{
        login: login,
        getLoggedInUser: getLoggedInUser,
        loggedInUserDetails: loggedInUserDetail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}