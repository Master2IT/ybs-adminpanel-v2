import axios from '../../services/axios'

const url = 'dashboard'
export const getDashboard = async () => {
  const response = await axios.get(url)
  return response.data
}
