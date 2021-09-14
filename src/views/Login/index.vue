<template>
  	<!-- 项目的最外层 -->
    <div class="outer">
        <!-- 登录 -->
        <div class="login-wrap">
            <div class="login">
                <div class="loginform">
                    <ul class="tab clearFix">
                        <li @click="getUrlCode">
                            <a href="##" style="border-right: 0;" :class="{current:!istrue}" @click.prevent="show(0)">扫描登录</a>
                        </li>
                        <li @click="close">
                            <a href="##" :class="{current:istrue}" @click.prevent="show(1)">账户登录</a>
                        </li>
                    </ul>
                    <div class="content">
                        <form action="##" v-if="istrue">
                            <div class="input-text clearFix">
                                <i></i>
                                <input type="text" placeholder="手机号" v-model="phone">
                            </div>

                            <div class="input-text clearFix">
                                <i class="pwd"></i>
                                <input type="password" placeholder="请输入密码" v-model="password">
                            </div>

                            <div class="setting clearFix">
                                <label class="checkbox inline">
                                    <input name="m1" type="checkbox" value="2" checked="">
                                    自动登录
                                </label>
                                <span class="forget">忘记密码？</span>
                            </div>
                            <button class="btn" @click.prevent="login">登&nbsp;&nbsp;录</button>

                        </form>
                        <div class="urlcode" v-else>
                            <img :src="twoImg" alt="">
                        </div>
                        <div class="call clearFix">
                            <ul>
                                <li><img src="images/qq.png" alt=""></li>
                                <li><img src="images/sina.png" alt=""></li>
                                <li><img src="images/ali.png" alt=""></li>
                                <li><img src="images/weixin.png" alt=""></li>
                            </ul>
                            <router-link href="##" class="register" to="/register">立即注册</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
 import QRCode from 'qrcode'
    export default {
      data(){
        return{
          phone:'',
          password:'',
          istrue:true,
          code:'',
          twoImg:''
        }
      },
       methods:{
        async login(){
              try {
                let {phone,password} = this
                if(phone&&password){
                await this.$store.dispatch('getReqLogin',{phone,password})
                this.$router.replace('/home')
                }else{
                  this.$message.error('请输入账号密码');
                }
              } catch (error) {
                this.$message.error('登录失败');
              }
        },
        async getUrlCode(){
            try {
              // let time = Data.now()
              const result = await this.$API.getReqUrlCode()
              this.code = result.data.unikey
              const cImg=await this.$API.getReqCodeImg(this.code)
              let codeImg = cImg.data.qrurl
               this.twoImg=await QRCode.toDataURL(codeImg);
              if(!this.timer){
                this.timer = setInterval(async ()=>{
                 const end = await this.$API.examIsLogin(this.code)
                 if(end.code===803){
                   this.$router.replace('/home')
                   clearInterval(this.timer)
                   this.timer=null
                 }
               },2000)
              }
            } catch (error) {
                this.$message.error('二维码生成失败');
                 timer=null
                  clearInterval(timer)
            }
        },
        close(){
          clearInterval(this.timer)
                   this.timer=null
        },
        show(flag){
          if(flag){
            this.istrue=true
          }else{
            this.istrue=false
          }
        },
         open() {
          this.$alert('<strong>提示：<br/>二维码登录存在一定的问题，您可使用账号密码进行登录，当然您也可以试一下二维码</strong>', '欢迎体验MY音乐~', {
          dangerouslyUseHTMLString: true,
          showClose:false,
          center:true
        });
      }
      },
      mounted(){
        this.open()
      }

    }
</script>

<style lang='less' scoped>
    .login-wrap {
  height: 540px;
  background-color: #c4bbaa;
}
.login-wrap .login {
  width: 1200px;
  height: 540px;
  margin: 0 auto;
  background:url(./img/1.png) no-repeat;
  background-size: 1200px 600px;
  // background-size:1200px 487px ;
  // position: relative;
}
.login-wrap .loginform {
  width: 420px;
  height: 406px;
  box-sizing: border-box;
  background: #fff;
  float: right;
  top: 45px;
  position: relative;
  padding: 20px;
}
.login-wrap .loginform .tab li {
  width: 50% ;
  float: left;
  text-align: center;
}
.login-wrap .loginform .tab li a {
  width: 100%;
  display: block;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  font-weight: 700;
  color: #333;
  border: 1px solid #ddd;
  box-sizing: border-box;
  text-decoration: none;
}
.login-wrap .loginform .tab li .current {
  border-bottom: none;
  border-top-color: #28a3ef;
  color: #e1251b;
}
.login-wrap .loginform .content {
  width: 380px;
  height: 316px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-top: none;
  padding: 18px;
}
.login-wrap .loginform .content form {
  margin: 15px 0  18px 0;
  font-size: 12px;
  line-height: 18px;
}
.login-wrap .loginform .content form .input-text {
  margin-bottom: 22px;
  position: relative;
}
.login-wrap .loginform .content form .input-text i {
  float: left;
  width: 37px;
  height: 32px;
  border: 1px solid #ccc;
  background: url(./img/icons.png) no-repeat -10px -201px;
  box-sizing: border-box;
  border-radius: 2px 0 0 2px;
}
.login-wrap .loginform .content form .input-text .pwd {
  background-position: -72px -201px;
}
.login-wrap .loginform .content form .input-text input {
  width: 302px;
  height: 32px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-left: none;
  float: left;
  padding-top: 6px;
  padding-bottom: 6px;
  font-size: 14px;
  line-height: 22px;
  padding-right: 8px;
  padding-left: 8px;
  border-radius: 0 2px 2px 0;
  outline: none ;
}
.login-wrap .loginform .content form .input-text .error-msg {
  position: absolute;
  top: 100%;
  left: 40px;
  color: red;
}
.login-wrap .loginform .content form .setting label {
  float: left;
}
.login-wrap .loginform .content form .setting .forget {
  float: right;
}
.login-wrap .loginform .content form .btn {
  background-color: #e1251b;
  padding: 6px;
  border-radius: 0;
  font-size: 16px;
  font-family: 微软雅黑;
  word-spacing: 4px;
  border: 1px solid #e1251b;
  color: #fff;
  width: 100%;
  height: 36px;
  margin-top: 25px;
  outline: none;
}
.login-wrap .loginform .content .urlcode{
  width: 150px;
  height: 150px;
  background: pink;
  margin-left: 75px;
  img{
   width: 150px;
   height: 150px;
  }
}
.login-wrap .loginform .content .call {
  margin-top: 30px;
}
.login-wrap .loginform .content .call ul {
  float: left;
}
.login-wrap .loginform .content .call ul li {
  float: left;
  margin-right: 5px;
}
.login-wrap .loginform .content .call .register {
  float: right;
  font-size: 15px;
  line-height: 38px;
}
.login-wrap .loginform .content .call .register:hover {
  color: #4cb9fc;
  text-decoration: underline;
}
.copyright {
  width: 1200px;
  margin: 0 auto;
  text-align: center;
  line-height: 24px;
}
.copyright ul li {
  display: inline-block;
  border-right: 1px solid #e4e4e4;
  padding: 0 20px;
  margin: 15px 0;
}

</style>