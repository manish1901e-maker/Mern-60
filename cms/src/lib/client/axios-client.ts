import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

// Our response interceptor returns `response.data`, so we type the instance accordingly.
type DataAxiosInstance = Omit<
  AxiosInstance,
  "request" | "get" | "delete" | "head" | "options" | "post" | "put" | "patch"
> & {
  request<T = any, D = any>(config: AxiosRequestConfig<D>): Promise<T>;
  get<T = any, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<T>;
  delete<T = any, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<T>;
  head<T = any, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<T>;
  options<T = any, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<T>;
  post<T = any, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<T>;
  put<T = any, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<T>;
  patch<T = any, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<T>;
};

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 60000,
  timeoutErrorMessage: "Server Timed out",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
  // security 
  withCredentials: true, 
  
  // CSRF
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN"
});
// client caching -> axios-cache-interceptors

// interceptors 
// request 
axiosInstance.interceptors.request.use((config) => {
  const token = Cookies.get("_at_60")
  if(token) {
    config.headers.Authorization = "Bearer "+token
  }
  return config;
});

// response 
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (exception) => {
    throw exception.response ? exception.response.data : {message: exception.message}
  }
)
export default axiosInstance as DataAxiosInstance