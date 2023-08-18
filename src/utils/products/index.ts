import axios from '../../services/axios/index'

const url: string = 'products'

export const getProduct = async (id: string): Promise<any> => {
    const response = await axios.get(`${url}/${id}`)
    return response.data
}
export const getProducts = async () => {
    const {data} = await axios.get(url + "/admin")
    return data
}
export const addProduct = async (form) => {
    const {data} = await axios.post(url, form)
    return data
}
export const editProduct = async (form) => {
    const {data} = await axios.put(url, form)
    return data
}
export const deleteProduct = async (id) => {
    const {data} = await axios.delete(url + `/${id}`)
    return data
}
export const updateProductGallery = async (images) => {
    const {data} = await axios.post(url + "/galleries", images, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
    return data
}
export const deleteProductGallery = async (id, name) => {
    const {data} = await axios.delete(url + `/galleries/${id}?name=${name}`)
    return data
}
