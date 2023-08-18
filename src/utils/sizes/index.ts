import axios from "../../services/axios";

const url = 'sizes'
export const getSizes = async () => {
    const {data} = await axios.get(url)
    return data
}
