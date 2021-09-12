<template>
  <div class="box">
        <div class="content">
            <div class="tittle">
                <span class="left"><a href="javascript:;" class="in"></a></span>
                <h2 style="color:#fff">{{$route.params.name}}</h2>
            </div>
            <div class="song">
                <div class="img">
                <img :src="$route.params.url" alt="">
                 </div>
                 <!-- <div class="detail">
                       <h2 style="color:#fff">不知道放啥 先空着</h2>
                 </div> -->
                <audio :src="url" controls></audio>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                url:''
            }
        },
        mounted(){
            this.getSongUrl()
        },
        methods:{
            async getSongUrl(){
                try {
                    const result = await this.$API.getReqSongUrl(this.$route.params.id)
                    console.log(result.data[0].url);
                    this.url = result.data[0].url || ''
                } catch (error) {
                    this.$message.error(error);
                }
            }
        }
    }
</script>

<style lang="less" scoped>
.box{
    width: 100%;
    background: #ccc;
    .content{
        width: 1200px;
        margin: 0 auto;
        background: url(./img/1.png) no-repeat center center;
        background-size:1200px;
        .tittle{
            height: 60px;
            border-bottom: 3px solid red;
            // background: yellow;
            line-height: 70px;
            .left{
                float: left;
                width: 20px;
                height: 20px;
                background: red;
                margin-top: 25PX;
                border-radius: 10px;
                .in{
                    display: block;
                    width: 10px;
                    height: 10px;
                    background: lemonchiffon;
                    margin: 5px;
                    border-radius:5px ;
                }
            }
            h2{
                float: left;
                margin-left: 15px;
                font-size: 20px;
                font-weight: normal;
                // line-height: 60px;
                }
            }

            .song{
                width: 100%;
                height: 575px;
                position: relative;
                
                .detail{
                    width: 460px;
                    height: 360px;
                    border: 1px solid #fff;
                    padding: 20px 20px 0 20px;
                    position: absolute;
                    right: 80px;
                    top:50px;
                }
                .img{
                    width: 500px;
                    height: 500px;
                    position: absolute;
                        left: 80px;
                        top: 50px;
                        border-radius: 250px;
                        animation: donghua 5s infinite;
                    img{
                        width: 500px;
                        height: 500px;
                        border-radius: 250px;
                    }
                }
                audio{
                    position: absolute;
                    width: 500px;
                    right: 80px;
                    bottom: 50px;  
                }
            }
        }
    }
    @keyframes donghua {
        0%{
        }
        50%{
            -ms-transform:scale(1.1); 	/* IE 9 */
            -moz-transform:scale(1.1); 	/* Firefox */
            -webkit-transform:scale(1.1); /* Safari 和 Chrome */
            -o-transform:scale(1.1); 	/* Opera */
        }
        100%{
        }
    }
</style>