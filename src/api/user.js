/**
 * 用户相关的接口模块
 */

import request from '@/utils/request'

// 用户注册
export const register = data => {
    return request({
        method: 'post',
        url: '/api/user/register',
        data
    })
}
//邮箱发送
export const activation = params => {
    return request({
        method: 'get',
        url: '/api/user/activation',
        params
    })
}

// 用户登录
export const login = data => {
    return request({
        method: 'post',
        url: '/api/user/login',
        data
    })
}

// 注册账号图形验证码
export const captchaImage = () => {
    return request({
        method: 'get',
        url: '/captchaImage'
    })
}

// 获取用户详情
export const userId = (userId) => {
    return request({
        method: 'get',
        url: `/api/user/${userId}`
    })
}

// 设置密码
export const setPassword = data => {
    return request({
        method: 'post',
        url: '/api/user/setPassword',
        data
    })
}