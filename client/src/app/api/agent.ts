import axios, { Axios, AxiosError, AxiosResponse } from "axios";
import { request } from "http";
import { toast } from "react-toastify";

const sleep = () => new Promise(resolve => setTimeout(resolve, 1000));

axios.defaults.baseURL = 'http://localhost:5000/api/';
axios.defaults.withCredentials = true;

const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.response.use(async response => {
    await sleep();
    return response
}, (error : AxiosError) => {
    const {data, status} = error.response! ;

    // switch(status){
    //     case 400: 
    //         toast.error(data.title);
    //         break;
    //     case 401: 
    //         toast.error(data.title);
    //         break;
    //     case 500: 
    //         toast.error(data.title);
    //         break;
    //     default:
    //         break;
    // }
    return Promise.reject(error.response);
})


const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody),
}

const catalog = {
    list: () => requests.get('products'),
    details: (id: number) => requests.get(`products/${id}`),

}

const testErrors = {
    get400Error: () => requests.get('error/bad-request'),
    get401Error: () => requests.get('error/unauthorised'),
    get404Error: () => requests.get('error/not-found'),
    get500Error: () => requests.get('error/server-error'),
    getValidationError: () => requests.get('error/validation-error'),


}


const Basket = {
    get: () => requests.get('basket'),
    addItem: (productId: number, quantity: 1) => requests.post(`basket?productId=${productId}&quantity=${quantity}`, {}),
    removeitem: (productId: number, quantity: 1) => requests.delete(`basket?productId=${productId}&quantity=${quantity}`)

}

const agent = {
    catalog,
    testErrors,
    Basket
}   

export default agent;