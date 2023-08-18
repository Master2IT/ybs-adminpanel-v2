import axios from '../../services/axios'

const url = 'orders'
export const getOrders = async () => {
  const response = await axios.get(url)
  return response.data
}
