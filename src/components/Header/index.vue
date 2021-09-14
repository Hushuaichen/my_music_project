<template>
  <header>
        <div class="head clearFix">
            <h1><router-link to="/"><i class="iconfont icon-yinle"></i> MY音乐</router-link></h1>
            <ul>
                <li><router-link to="/findsong">发现音乐</router-link></li>
                <li><router-link to="/mysong">我的音乐</router-link></li>
                <li><a href="##" @click.prevent="friend">朋友</a></li>
                <li><a href="##" @click.prevent="shop">商城</a></li>
                <li><router-link to="/songger">音乐人</router-link></li>
            </ul>
            <div class="search">
                <input type="text" placeholder="  音乐/视频/电台" v-model="keyword"  @keyup.enter="search">
                <el-button type="danger" round icon="el-icon-search" size="mini" @click="search">搜索</el-button>
            </div>
              <span class="login" v-if="$store.state.user.name">
                <a href="jsvascript:;">欢迎您 {{$store.state.user.name}}&nbsp;&nbsp;</a>
                <a href="jsvascript:;" @click.prevent="leave">  退出登录</a>
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
                keyword:'',
                 imgsrc: require('./img/my.jpg')
            }
        },
        methods:{
            search(){
                // console.log(this.keyword.trim());
                if(this.keyword.trim()!==''){
                this.$router.push(`/searchdetail/${this.keyword}`)
                this.keyword=''
                }else{
                     this.$message.error('主人！请输入您要搜索的关键字');
                }
            },
            friend(){
                this.$message({
                        showClose: true,
                        message: '我们不是朋友吗？',
                        type: 'success'
                    });
            },
            shop(){
                this.$message({
                        showClose: true,
                        message: '看来你的钱包又鼓了~~',
                        type: 'success'
                    });
            },
                open() {
                    this.$alert(`<strong>1.此项目为个人开发项目，不存在商业行为或破坏版权行为<br/>
                                            2.此项目与网易云共用账号，如有网易云账号，无需再次注册<br/>
                                            3.项目可能加载较慢，请您耐心等待<br/>
                                            4.项目中遇到问题 可联系17513366031</strong><br/>
                                            <img src="${this.imgsrc}" style="width:100px;height:100px;margin-left:12run 0px;"/>`, 'HTML 片段', {
                    dangerouslyUseHTMLString: true,
                    title:'声明',
                    showClose:false
             });
        },
         async leave(){
            try {
               await this.$store.dispatch('getLeaveLogin')
                this.$message({
                        showClose: true,
                        message: '退出成功',
                        type: 'success'
                    });
               this.$router.replace('/login')
            } catch (error) {
                     this.$message.error('退出失败');
            }
        }
      },
        mounted(){
            this.open()
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
    border: 2px solid #fff;
    position: sticky;
    left: 0;
    top: 0;
    z-index: 2;
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
            width: 200px;
            height: 28px;
            margin: 30px 0 0 30px;
            border-radius: 13px;
            outline: #ccc;
            border: 1px solid #ccc;
            float:left 
        }
        button{
            // width: 60px;
            // height: 30px;
            margin-top: 30px;
            background: red;
            text-align: center;
            color: #fff;
            // float: left;
            // border-radius: 15px;
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