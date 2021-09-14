import {getReqLogin,ReqleaveLogin} from '../api/index'
const state={
    token:localStorage.getItem('TOKEN_KEY'),
    cookie:JSON.parse(localStorage.getItem('COOKIE_KEY')),
    id:localStorage.getItem('ID_KEY'),
    name:localStorage.getItem('NAME_KEY')
}
const mutations={
    RECEIVE_TOKEN(state,result){
        state.token=result.token
        state.cookie = result.cookie
        state.id = result.profile.userId
        state.name=result.profile.nickname
    },
    REMOVE_KEY(state){
        state.token=''
        state.cookie = ''
        state.id = ''
        state.name=''
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
            localStorage.setItem('NAME_KEY',result.profile.nickname)
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
    },
    async getLeaveLogin({commit}){
        const result = await ReqleaveLogin()
        if(result.code===200){
            commit('REMOVE_KEY')
            localStorage.removeItem('TOKEN_KEY')
            localStorage.removeItem('ID_KEY')
            localStorage.removeItem('COOKIE_KEY')
            localStorage.removeItem('NAME_KEY')
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