import axios from 'axios'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'
const request = axios.create({
    // baseURL:'/api',
    timeout:20000,
})
request.interceptors.request.use(
    function(config){
    NProgress.start();  //开启进度条
    return config;
})
//响应拦截器
request.interceptors.response.use(
    function(response){
        NProgress.done();
    return response.data;
},
    function(error){
         NProgress.done();   //停止进度条
    alert('发送ajax的请求失败'+error.message||'未知报告')
    return new Promise(()=>{})
})

export default request
