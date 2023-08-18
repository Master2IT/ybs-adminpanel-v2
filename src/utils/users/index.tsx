import axios from '../../services/axios'

const url = 'users'
export const getUsers = async () => {
  const response = await axios.get(url)

  return response.data
}
