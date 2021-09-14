<template>
    <div class="box">
        <div class="content">
            <div class="tittle">
                <span class="left"><a href="" class="in"></a></span>
                <h2>排行榜</h2>
            </div>
            <ul>
                <li v-for="(item,index) in result" :key="item.id">
                    <router-link :to="`/songdetail/${item.id}/${item.name}`">
                        <img :src="item.coverImgUrl" alt="" :title="item.description">
                        <h3></h3>
                        <h3>{{item.name}}</h3>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            result:[]
        }
    },
    mounted(){
        this.getClass()
    },
    methods:{
        async getClass(){
            try {
                let id = this.$store.state.user.id
                const result =await this.$API.grtUserSong(id)
                if(result.code===200){
                    this.result = result.playlist
                }
            } catch (error) {
                this.$message.error(error);
            }
        }
    }
}
</script>

<style lang='less' scoped>
.box{
   width: 100%; 
   background: #ccc;
   .content{
       width: 1200px;
       margin: 0 auto;
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
        ul{
            width: 1200px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            li{
                width: 140px;
                height: 190px;
                padding: 10px;
                background: #fff;
                display: flex;
                justify-content: center;
                margin-top: 20px;
                overflow: hidden;
                a{
                    width: 140px;
                    height: 220px;
                    text-align: center;
                    h3{
                        margin-top: 20px;
                    }
                }
                a:hover{
                    text-decoration: none;
                    color: red;
                }
                img{
                    width: 140px;
                    height: 140px;
                    // border: 1px solid red
                }
            }
            li:hover{
                box-shadow: 10px 10px 10px silver;

            }
        }
        
   }
}
</style>