<template>
  <div>
       <!-- 导航 -->
    <nav>
        <div class="content">
            <ul>
                <li><router-link to="/daysong">推荐</router-link></li>
                <li><router-link to="/classdetail">排行榜</router-link></li>
                <li><router-link to="/songger">歌手</router-link></li>
                <li><a href="jacascript:;" @click.prevent="live">主播电台</a></li>
                <!-- <li><a href="##">歌单</a></li> -->
                <li><router-link to="/findsong">歌单</router-link></li>
                <li><router-link to="/vediodetail">视频</router-link></li>
            </ul>
        </div>
    </nav>
    <!-- 轮播图 -->
    <div class="lunbo">
        <div class="content">
            <SlideLoop/>
        </div>
    </div>
    <!-- 内容 -->
    <div class="center">
        <div class="content">
            <div class="tittle">
                <span class="left"><a href="" class="in"></a></span>
                <h2>热门推荐</h2>
                <router-link to="/china">华语</router-link>
                <router-link to="/popular">欧美</router-link>
                <router-link to="/yaogun">日本</router-link>
                <router-link to="/minyao">韩国</router-link>
                <!-- <a href="##">电子</a> -->
                <a href="##" class="final" @click.prevent="tip">更多 ></a>
            </div>
            <router-view></router-view>
            <div class="tittle1">
                <span class="left1"><a href="" class="in"></a></span>
                <h2>最新专辑</h2>
                <a href="##" class="final1" @click.prevent="tip">更多 ></a>
            </div>
            <ul class="center-ul">
                <li v-for="(item,index) in result" :key="item.id"  @click.prevent="top(item.name,item.id)">
                    <a href="##" ><img :src="item.picUrl" alt=""></a>
                    <h2><a href="##">{{item.name}}</a></h2>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
        data(){
            return{
                result:'',
                id:'',
                name:'推荐',
            }
        },
        mounted(){
            this.getNewSong()
        },
        methods:{
            async getNewSong(){
                try {
                    const result = await this.$API.getReqNewSong()
                    this.result = result.albums
                } catch (error) {
                    this.$message.error(error);
                }
            },
            SongBook(){

            },
            tip(){
                 this.$message({
                        showClose: true,
                        message: '放过我吧！真的没有了',
                        type: 'success'
                    });
            },
            live(){
                  this.$message({
                        showClose: true,
                        message: '还没有开放哦~~',
                        type: 'success'
                    });
            },
            top(name,id){
                    this.$router.push(`/songdetail/${id}/${name}`)
            }

        }
    }
</script>

<style lang="less" scoped>
    //导航
nav{
    width: 100%;
    height: 50px;
    background: #c20c0c;
    .content{
        width: 1200px;
        height: 50px;
        margin: 0 auto;
    }
    ul{
        display: flex;
        justify-content: space-around;
        li{
            font-size: 16px;
            height: 50px;
            a{
                color: #fff;
                height: 50px;
                text-align: center;
                line-height: 50px;
                padding: 5px 10px;
                border-radius: 20px;
            }
            a:hover{
                text-decoration: none;
                color: pink;
                background: #9b0909;
            }
        }
    }
}

//轮播图
.lunbo{
    width: 100%;
    background: #c4bbaa;
    // background: #ccc;
    .content{
        width: 1200px;
        margin: 0 auto;
        text-align: center;
        padding: 2px 0;
    }
}
// 内容
.center{
    width: 100%;
    background: #ccc;
    .content{
        width: 1180px;
        margin: 0 auto;
        padding: 0 10px;
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
            a{
                float: left;
                font-size: 16px;
                margin-left: 20px;
                padding: 0 10px;
                // line-height: 60px;
            }
            .final{
                float: right;
                margin-left: 10px;
            }
            a:hover{
                text-decoration: none;
                color: red;
            }
        }
        .center-ul{
            width: 1180px;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            li{
                margin-bottom: 10px;
                width: 220px;
                height: 300px;
                background: #fff;
                background-size:220px 300px; 
                a{
                    width: 100%;
                    height: 100%;
                }
            }
            img{
                width: 200px;
                height: 200px;
                margin-left: 10px;
                margin-top: 10px;
            }
            h2{
                margin: 20px 10px 10px 10px;
                text-align: center;
                a:hover{
                    text-decoration: none;
                    color: red;
                }
            }
            li:hover{
                box-shadow: 10px 10px 10px silver;
            }
        }
        .tittle1{
            height: 60px;
            border-bottom: 3px solid red;
            // background: yellow;
            line-height: 70px;
            .left1{
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
                    padding: 0 10px;
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
            .final1{
                font-size: 16px;
                float: right;
                margin-right: 10px;
            }
            a:hover{
                text-decoration: none;
                color: red;
            }

        }
    }
}
</style>