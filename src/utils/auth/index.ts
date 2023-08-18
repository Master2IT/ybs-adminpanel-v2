import axios from '../../services/axios'

const url: string = 'auth'

export const loginByEmail = async (
  email: string,
  password: string
): Promise<any> => {
  const response = await axios.post(`${url}/login/admin`, { email, password })

  return response.data
}

export const getProfile = async (): Promise<any> => {
  const response = await axios.get(`${url}/profile`)

  return response.data
}
