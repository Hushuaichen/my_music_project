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
//获取二维码连接
export const getReqUrlCode = ()=>{
    return request({
        url:'/login/qr/key',
        methods:'get',
        // params:{timestamp}
    })
}
// 生成二维码
export const getReqCodeImg = (key)=>{
    return request({
        url:'/login/qr/create',
        methods:'get',
        params:{key}
    })
}
//检测是否登录
export const examIsLogin = (key)=>{
    return request({
        url:'/login/qr/check',
        methods:'get',
        params:{key}
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
//获取用户歌单
export const grtUserSong = (uid)=>{
    return request({
        url:'/user/playlist',
        method:'get',
        params:{uid}
    })
}
//发现音乐接口
export const getReqFindSong=()=>{
    return request({
        url:'/personalized?limit=35',
        method:'get'
    })
}

//获取歌单详情
export const getReqSongDetail=(id)=>{
    return request({
        url:'/playlist/detail',
        method:'get',
        params:{id}
    })
}
//获取歌词连接
export const getReqSongUrl = (id)=>{
    return request({
        url:'/song/url',
        method:'get',
        params:{id}
    })
}
//首页热门推荐
export const getReqindexHot = ()=>{
    return request({
        url:'/top/playlist?limit=10&order=hot',
        method:'get'
    })
}
//获取不停类型歌单
export const  getReqSortSong = (area)=>{
    return request({
        url:'/artist/list',
        method:'get',
        params:{area}
    })
}
//获取最新专辑
export const getReqNewSong = ()=>{
    return request({
        url:'/album/new',
        method:'get'
    })
}
//获取单人歌单
export const getReqPeopleSong=(id)=>{
    return request({
        url:'/artist/songs',
        method:'get',
        params:{id}
    })
}
//获取每日推荐
export const getReqDaySong=()=>{
    return request({
        url:'/recommend/songs',
        method:'get'
    })
}
//获取热门歌手
export const getReqSongger=()=>{
    return request({
        url:'/top/artists',
        method:'get'
    })
}
//获取搜索结果
export const getReqSearch=(keywords)=>{
    return request({
        url:'/cloudsearch',
        method:'get',
        params:{keywords}
    })
}
//获取视频详情
export const getReqVedioDetail=()=>{
    return request({
        url:'/video/timeline/recommend',
        method:'get'
    })
}
//获取视频
export const getReqVedio=(id)=>{
    return request({
        url:'/video/url',
        method:'get',
        params:{id}
    })
}
//获取排行榜
export const getReqClass = ()=>{
    return request ({
        url:'/toplist',
        method:'get'
    })
}
//退出登录
export const ReqleaveLogin=()=>{
    return request({
        url:'/logout',
        method:'get'
    })
}
