import axios from 'axios'

export function request(config) {
    const install = axios.create({
        baseURL: 'http://123.57.217.240:3000/',
        timeOut: 5000
    });
    install.interceptors.request.use(data => {
        return data;
    }, err => {
        return err
    });
    install.interceptors.response.use(data => {
        return data;
    }, err => {
        return err;
    });
    return install(config);
}
