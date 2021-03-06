/**
 * 任务相关的接口模块
 */

import request from '@/utils/request'

// 查询任务列表
export const list = (params) => {
    return request({
        method: 'get',
        url: '/api/mission/list',
		params
    })
}

//创建任务
export const taskAdd = (data) => {
    return request({
        method: 'post',
        url: '/api/mission/add',
		data
    })
}

//任务详情查询
export const taskInfo = (params) => {
    return request({
        method: 'get',
        url: `/api/mission/info`,
		params
    })
}

//获取任务类型分类
export const getMissonType = () => {
    return request({
        method: 'get',
        url: `/api/mission/missionType`,
    })
}

//任务投标
export const tender = (data) => {
    return request({
        method: 'post',
        url: `/api/mission/tender`,
		data
    })
}