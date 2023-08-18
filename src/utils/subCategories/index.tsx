import axios from '../../services/axios'

const url = 'subCategories'

export const getSubCategories = async (): Promise<any> => {
  const res = await axios.get(url)
  return res.data
}

// Update = put
// Create = post
// Read = get
// Delete = delete
