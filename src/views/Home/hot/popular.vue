<template>
   <ul class="center-ul">
        <li v-for="(item,index) in result" :key="item.id" @click="SongList(item.id,item.name)">
            <a @click.prevent="SongList(item.id,item.name)"><img :src="item.img1v1Url" alt=""></a>
            <h2><a  @click.prevent="SongList(item.id,item.name)">{{item.name}}</a></h2>
        </li>
    </ul>
</template>

<script>
export default {
        data(){
            return{
                result:''
            }
        },
        mounted(){
            this.getSortSong()
        },
        methods:{
            async getSortSong(){
                try {
                    const result = await this.$API.getReqSortSong('96')
                    this.result = result.artists
                } catch (error) {
                    this.$message.error(error);
                }
            },
             SongList(id,name){
                this.$router.push(`/peoplesong/${id}/${name}`)
            }
        }
    }
</script>

<style lang='less' scoped>
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
</style>