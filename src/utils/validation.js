/**
 * 验证的规则 (来自ElementUi的方法)
 */

// 手机号
export const phone = (rule, value, callback) => {
    const validation = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/ 
    if(validation.test(value)) {
        callback()
    } else {
        callback(new Error('手机号码错误!'))
    }
}

// 邮箱
export const email = (rule, value, callback) => {
    const validation = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    if(validation.test(value)) {
        callback()
    } else {
        callback(new Error('邮箱格式错误!'))
    }
}

// 手机和邮箱
export const phoneAndEmail = (rule, value, callback) => {
    const phone = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
    const email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    if(phone.test(value) || email.test(value)) {
        callback()
    } else {
        callback(new Error('手机号码或邮箱错误!'))
    }
}

// 同意用户协议和隐私条款
export const check = (rule, value, callback) => {
    if(!value) {
        callback(new Error('请同意该协议'))
    }
    callback()
}