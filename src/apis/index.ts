import axios from 'axios'
import { BACKEND_URL } from '../config/config'

const axiosInstance = axios.create({ baseURL: BACKEND_URL })

axiosInstance.interceptors.request.use((req: any) => {
  const token = localStorage.getItem('token') || ''
  return { ...req, headers: { token } }
})

const getRequest = (API: string, body: object) => axiosInstance.get(API, body)
const postRequest = (API: string, body: object) => axiosInstance.post(API, body)

export { getRequest, postRequest }
