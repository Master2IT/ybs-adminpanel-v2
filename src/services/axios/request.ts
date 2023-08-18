import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios'
import storage from '../storage'

export const axiosRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  config.headers.Authorization = `Bearer ${storage.get()}`
  return config
}

export const axiosRequestError = (error: AxiosError) => {
  if (axios.isCancel(error)) {
    console.debug('request cancelled.')
  }

  return Promise.reject(error)
}
