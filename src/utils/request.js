/**
 * 请求统一的封装模块
 */

// 导入 axios
import axios from 'axios'
// 导入 仓库
import store from '@/store'

const request = axios.create({
    baseURL: process.env.VUE_APP_URL
})

// 请求拦截器
request.interceptors.request.use(function (config) {
    // 在发送请求之前,携带token
    const { userKey } = store.state
    if(userKey) {
        config.headers.Authorization = `Bearer ${userKey}`
    }
    return config
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
})

// 响应拦截器
request.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
})

export default request