import axios, { InternalAxiosRequestConfig } from "axios"
axios.defaults.baseURL = "/api"
axios.defaults.timeout = 10000

axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8"

axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("token")
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
axios.interceptors.response.use(
  (response) => {
    return response.data
  }
  // (error) => {
  //   return Promise.reject(error)
  // }
)

export default axios
