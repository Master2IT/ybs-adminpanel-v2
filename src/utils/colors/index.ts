import axios from "../../services/axios";

const url = 'colors'
export const getColors = async () => {
    const {data} = await axios.get(url)
    return data
}
