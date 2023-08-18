import { axiosRequestError, axiosRequest } from './request'
import { axiosResponseError, axiosResponse } from './response'
import Axios from 'axios'

const axios = Axios.create({
  baseURL: process.env.API_URL || 'http://193.36.84.216:5000/api/',
  timeout: 30 * 1000
})

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

axios.interceptors.request.use(axiosRequest, axiosRequestError)
axios.interceptors.response.use(axiosResponse, axiosResponseError)
export default axios
