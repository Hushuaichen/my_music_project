import request from './axios.js'
//获取验证码
export const getReqCord = (phone)=>{
    return request({
        url:'/captcha/sent',
        method:'get',
        params:{phone}
    })
}
// 检查验证码
export const testCode = (phone,code)=>{
    return request({
        url:'/captcha/verify',
        method:'get',
        params:{phone,code}
    })
}
//检查手机号是否已经注册过
export const examPhone = (phone)=>{
    return request({
        url:'/cellphone/existence/check',
        method:'get',
        params:{phone}
    })
}
//注册
export const getReqRegister = ()=>{
    return request({
        url:'/register/cellphone',
        method:'get'
    })
}
//登录
export const getReqLogin = ({phone,password})=>{
    return request({
        url:'/login/cellphone',
        method:'get',
        params:{phone,password}
    })
}