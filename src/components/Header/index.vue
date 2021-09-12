<template>
  <header>
        <div class="head clearFix">
            <h1><router-link to="/"><i class="iconfont icon-yinle"></i> MY音乐</router-link></h1>
            <ul>
                <li><router-link to="/findsong">发现音乐</router-link></li>
                <li><a href="##">我的音乐</a></li>
                <li><a href="##">朋友</a></li>
                <li><a href="##">商城</a></li>
                <li><a href="##">音乐人</a></li>
            </ul>
            <div class="search">
                <input type="text" placeholder="  音乐/视频/电台">
                <button>搜索</button>
            </div>
              <span class="login" v-if="$store.state.user.name">
                <a href="jsvascript:;">欢迎您 {{$store.state.user.name}}&nbsp;&nbsp;</a>
                <a href="jsvascript:;">  退出登录</a>
             </span>
            <span class="login" v-else>
                <!-- <a href="##" @click.prevent='login'>登录</a> | -->
                <router-link  to="/login">登录</router-link> |
                <!-- <a href="##" @click.prevent='register'>注册</a> -->
                <router-link to="/register">注册</router-link>
            </span>
          
        </div>
    </header>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        methods:{
            reqUserInfo(){

            }
        }
}
</script>

<style lang="less" scoped>
    .clearFix::after{
    content: '';
    display: none;
    clear: both;
}
// 头部
header{
    width: 100%;
    height: 90px;
    background-color: #ccc;
    position: sticky;
    left: 0;
    top: 0;
    .head{
        width: 1300px;
        margin: 0 auto;
        position: relative;
    }
    h1{
        float: left;
        font-size: 35px;
        font-family: cursive;
        height: 90px;
        line-height: 90px;
        color: #fff;
        margin-right: 25px;
        a{
            color: #fff;
        }
        a:hover{
            text-decoration: none;
            color: #fff;
        }
    }
    ul{
        float: left;
        font-size: 20px;
        
        li{
            float: left;
            margin: 0 15px;
            a{
                display: block;
                height: 90px;
                line-height: 90px;
                color: #000;
                text-decoration: none;
                padding: 0 20px;
            }
            a:hover{
                text-decoration: none;
                color: red;
            }
        }
    }
    .search{
        height: 90px;
        float: left;
        input{
            width: 180px;
            height: 28px;
            margin: 30px 0 0 30px;
            border-radius: 13px;
            outline: #ccc;
            border: 1px solid #ccc;
            float:left 
        }
        button{
            width: 60px;
            height: 30px;
            margin-top: 30px;
            background: red;
            color: #fff;
            float: left;
            border-radius: 15px;
        }
    }
    .login{
        height: 90px;
        font-size: 16px;
        margin-left: 30px;
        position: absolute;
        right: 0;
        top: 0;
        a{
            color: black;
        }
        a:hover{
            text-decoration:none;
            color: chocolate;
        }
    }
}
</style>