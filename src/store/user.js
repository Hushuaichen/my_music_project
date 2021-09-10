import {getReqLogin} from '../api/index'
const state={
    token:localStorage.getItem('TOKEN_KEY'),
    cookie:JSON.parse(localStorage.getItem('COOKIE_KEY')),
    id:localStorage.getItem('ID_KEY'),
    name:''
}
const mutations={
    RECEIVE_TOKEN(state,result){
        state.token=result.token
        state.cookie = result.cookie
        state.id = result.profile.userId
        state.name=result.profile.nickname
    }
}
const actions={
    async getReqLogin({commit},userInfo){
        const result = await getReqLogin(userInfo)
        if(result.code===200){
            commit('RECEIVE_TOKEN',result)
            localStorage.setItem('TOKEN_KEY',result.token)
            localStorage.setItem('ID_KEY',result.profile.userId)
            localStorage.setItem('COOKIE_KEY',JSON.stringify(result.cookie))
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
    }
}
const getters={

}
export default{
    state,
    mutations,
    actions,
    getters
}