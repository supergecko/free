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