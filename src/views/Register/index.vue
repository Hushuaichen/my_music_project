<template>
  		<div class="outer">
			<!-- 注册内容 -->
			<div class="register">
				<h3>注册新用户
					<span class="go">我有账号，去 <router-link to="/login">登陆</router-link>
					</span>
				</h3>
				<div class="content">
					<label>手机号:</label>
					<input type="text" placeholder="请输入你的手机号" v-model="phone" @change="testPhone">
					<span class="error-msg" v-show="phoneFlag">请输入合法的手机号</span>
				</div>
				<div class="content">
					<label>验证码:</label>
					<input type="text" placeholder="请输入验证码" v-model="code" @change="test">
                    <button @click="reqCord" >获取验证码</button>
				</div>
				<div class="content">
					<label>登录密码:</label>
					<input type="text" placeholder="请输入你的登录密码" v-model="password">
					<span class="error-msg" v-show="password===''?true:false">请输入密码</span>
				</div>
				<div class="content">
					<label>昵称:</label>
					<input type="text" placeholder="请输入昵称" v-model="name">
					<span class="error-msg">请输入昵称</span>
				</div>
				<div class="controls">
					<input name="m1" type="checkbox" v-model="ischecked">
					<span>同意协议并注册《MY音乐用户协议》</span>
					<span class="error-msg" v-show="name===''?true:false">错误提示信息</span>
				</div>
				<div class="btn">
					<button @click="submit">完成注册</button>
				</div>
			</div>
		</div>
</template>

<script>
    export default {
        data(){
            return{
                phone:'',
                code:'',
                password:'',
                name:'',
                ischecked:'',
                phoneFlag:false
            }
        },
        methods:{
            async testPhone(){      
                if(this.phone.length!==11){
                    console.log(this.phone.length);
                    this.phoneFlag = true
                }else{
                    this.phoneFlag = false
                    //检查手机号是否已经注册
                    const result =await this.$API.examPhone(this.phone)
                    console.log(result);
                    if(result.code===200){
                            this.$message({
                            showClose: true,
                            message: '您已注册过，请登录',
                            type: 'success'
                        });
                    }
                }
            },
            //获取验证码
            async reqCord(){
               const result = await this.$API.getReqCord(this.phone)
               if(result.code===200){
                     this.$message({
                    showClose: true,
                    message: '验证码已发送，请注意查收',
                    type: 'success'
                 });
               }
            },
            //检查验证码
            async test(){
                const result = await this.$API.testCode(this.phone,this.code)
                if(result.code===200){
                    this.$message({
                        showClose: true,
                        message: '验证码正确',
                        type: 'success'
                    });
                }else{
                    this.$message.error('验证码错误！');
                }
            },
            //提交
            async submit(){
                let {phone,password,code,name} = this
                if(this.ischecked){
                    if(phone&password&code&name){
                     const result = await this.$API.getReqRegister(phone,password,code,name)
                            if(result.code===200){
                                this.$router.replace('/login')
                            }else{
                                this.$message.error('注册失败');
                            }
                         }else{
                            this.$message({
                            message: '请输入合法信息！',
                            type: 'warning'
                            });
                    }
                }else{
                       this.$message({
                        message: '请勾选协议，才能注册',
                        type: 'warning'
                    });
                }
               
            }
        }

    }
</script>

<style lang="less" scoped>
    .register {
    width: 1200px;
    height: 540px;
    border: 1px solid #dfdfdf;
    margin: 0 auto;
    }
    .register h3 {
    background: #ececec;
    margin: 0;
    padding: 6px 15px;
    color: #333;
    border-bottom: 1px solid #dfdfdf;
    font-size: 20.04px;
    line-height: 30.06px;
    }
    .register h3 span {
    font-size: 14px;
    float: right;
    }
    .register h3 span a {
    color: #e1251b;
    }
    .register div:nth-of-type(1) {
    margin-top: 40px;
    }
    .register .content {
    padding-left: 390px;
    margin-bottom: 18px;
    position: relative;
    button{
        height: 38px;
    }
    }
    .register .content label {
    font-size: 14px;
    width: 96px;
    text-align: right;
    display: inline-block;
    }
    .register .content input {
    width: 270px;
    height: 38px;
    padding-left: 8px;
    box-sizing: border-box;
    margin-left: 5px;
    outline: none;
    border: 1px solid #999;
    }
    .register .content img {
    vertical-align: sub;
    }
    .register .content .error-msg {
    position: absolute;
    top: 100%;
    left: 495px;
    color: red;
    }
    .register .controls {
    text-align: center;
    position: relative;
    }
    .register .controls input {
    vertical-align: middle;
    }
    .register .controls .error-msg {
    position: absolute;
    top: 100%;
    left: 495px;
    color: red;
    }
    .register .btn {
    text-align: center;
    line-height: 36px;
    margin: 17px 0 0 55px;
    }
    .register .btn button {
    outline: none;
    width: 270px;
    height: 36px;
    background: #e1251b;
    color: #fff !important;
    display: inline-block;
    font-size: 16px;
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