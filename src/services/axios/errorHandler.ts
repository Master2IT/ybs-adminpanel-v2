import storage from '../storage'
import {Notify, notify} from '../../utilities/notify'
import {AxiosError} from 'axios'

const errorHandler = (error: AxiosError) => {
    if (error.response) {
        switch (error.response.status) {
            case 401: {
                // storage.clear();
                // window.location.reload();

                notify(<Notify>{
                    type: 'error',
                    title: 'Token Expired!',
                });
                storage.clear()
                window.location.href = "/auth/login"
                return null
            }
            case 404: {
                notify(<Notify>{
                    type: 'error',
                    title: error.response.data.message || error.response.data.error || 'Not Found! ',
                });
                return null
            }
            case 408: {
                notify(<Notify>{
                    type: 'error',
                    title: error.response.data.message,
                });
                return null
            }
            case 400:
            case 403:
            case 409: {
                let errors = []

                if (error.response.data) {
                    if (Array.isArray(error.response.data.message)) {
                        errors = error.response.data.message

                        notify(<Notify>{
                            type: 'error',
                            title: errors.join(','),
                        });
                    }
                }

                return error
            }
            default: {
                notify(<Notify>{
                    type: 'error',
                    title: 'Unknown Error',
                });
            }
        }

        return error
    }

    switch (error.name) {
        case 'NetworkError': {
            notify(<Notify>{
                type: 'error',
                title: 'Network Error.',
            });
        }
        case 'CanceledError': {
            notify(<Notify>{
                type: 'error',
                title: 'Request Canceled.',
            });
        }
    }
}

export default errorHandler
