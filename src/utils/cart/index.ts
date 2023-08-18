import axios from "../../services/axios";

const url: string = 'cart'

export const getCart = async (userId): Promise<any> => {
    const response = await axios.get(url, userId);
    return response.data;
}
