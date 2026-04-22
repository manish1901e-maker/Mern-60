import axios from "axios"
import Cookies from "js-cookie"

const axiosInstance= axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 60000,
    timeoutErrorMessage:"Server Time Out",
    headers:{
        "Content-Type":"application/json",
        Accept:"application/json"
    },
    // security
    withCredentials:true,
    //CSRF
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName:"X-XSRF-TOKEN"

})
//CLIENT CACHING => axios cache interceptor

// interceptors
   // request
axiosInstance.interceptors.request.use((config)=>{
    const token = Cookies.get("_at_60")
    if (token){
        config.headers.Authorization= "Bearer "+token
    }
    return config
})

   axiosInstance.interceptors.request.use(
    (response)=>{
        return response.data
    },
    (exception)=>{
        throw exception.response ? exception.response.data : {message: exception.message}
    }
)

//response

export default axiosInstance