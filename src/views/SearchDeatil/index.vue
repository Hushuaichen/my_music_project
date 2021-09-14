<template>
   <div class="box">
        <div class="content">
            <div class="tittle">
                <span class="left"><a href="" class="in"></a></span>
                <h2>{{$route.params.keyword}}</h2>
            </div>
            <ul v-for="(item,index) in result" :key="item.id">
                <li><router-link :to="{name:'song',params:{id:item.id,name:item.al.name,url:item.al.picUrl}}"><span></span></router-link></li>
                <li><router-link :to="{name:'song',params:{id:item.id,name:item.al.name,url:item.al.picUrl}}">{{index+1}}---{{item.name}}</router-link></li>
                <li><router-link :to="{name:'song',params:{id:item.id,name:item.al.name,url:item.al.picUrl}}">{{item.ar[0].name}}</router-link></li>
            </ul>
            <Pagination></Pagination>
        </div>
</div>
</template>

<script>
    export default {
        data(){
            return{
                result:[],
            }
        },
        mounted(){
            this.getSearch()
        },
        methods:{
            async getSearch(){
                try {
                    let keyword = this.$route.params.keyword
                    const result = await this.$API.getReqSearch(keyword)
                    this.result = result.result.songs
                } catch (error) {
                    this.$message.error(error);
                }
            },
        },
        computed:{

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
            height: 40px;
            background: #e6e0d2;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid black;
            li{
                width: 400px;
                height: 45px;
                // background: yellow;
                line-height: 45px;
                font-size: 16px;
                a:hover{
                    color: red;
                    text-decoration: none;
                }
                span{
                    float: left;
                    width: 45px;
                    height: 45px;
                    margin-left: 20px;
                    background: url(./img/播放.png) no-repeat center center;
                    background-size: 25px 25px;
                }
            }
            

        }
    }
}

</style>