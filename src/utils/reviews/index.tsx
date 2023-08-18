import axios from '../../services/axios'

const url = 'reviews'
export const getReviews = async () => {
  const response = await axios.get(url)
  return response.data
}
