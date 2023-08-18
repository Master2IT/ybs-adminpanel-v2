import {AxiosError, AxiosResponse} from 'axios';
import errorHandler from "./errorHandler";

export const axiosResponse = (response: AxiosResponse) => {
    console.debug('axios response.', response);
    return Promise.resolve(response);
};

export const axiosResponseError = (error: AxiosError) => {
    console.debug('axios response error.', error);

    errorHandler(error)

    return Promise.reject(error);
};
