/**
 * 本地储存的封装函数
 */

// 存
export const setItem = (name, value) => {
    // 要存储的数据可能是 object 类型，需要转换为 json
    if(typeof value === 'object') {
        value = JSON.stringify(value)
    }
    window.localStorage.setItem(name, value)
}

// 取
export const getItem = (name) => {
    const value = window.localStorage.getItem(name)
    // 值有可能是 json 需要转换为 object 
    try {
        return JSON.parse(value)
    } catch (error) {
        return value
    }
}

// 删
export const removeItem = (name) => {
    window.localStorage.removeItem(name)
}