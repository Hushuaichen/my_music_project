<template>
  <div class="box">
        <div class="content">
            <div class="tittle">
                <span class="left"><a href="" class="in"></a></span>
                <h2>视频</h2>
            </div>
            <ul>
                <li v-for="(item,index) in result" :key="index">
                    <router-link :to="`/vedio/${item.data.title}/${item.data.description}/${item.data.urlInfo.id}`">
                        <img :src="item.data.coverUrl" alt="">
                        <!-- <span>{{item.data.description}}</span> -->
                        <h2>{{item.data.title}}</h2>
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
        this.getVedioDetail()
    },
    methods:{
        async getVedioDetail(){
            try {
            const result = await this.$API.getReqVedioDetail()
            this.result = result.datas
            } catch (error) {
                this.$message.error('出错了'+error);
            }            
        }
    }
}
</script>

<style lang='less' scoped>
    .box {
    width: 100%;
    background: #ccc;
    }
    .box .content {
    width: 1200px;
    margin: 0 auto;
    }
.box .content .tittle {
  height: 60px;
  border-bottom: 3px solid red;
  line-height: 70px;
}
.box .content .tittle .left {
  float: left;
  width: 20px;
  height: 20px;
  background: red;
  margin-top: 25PX;
  border-radius: 10px;
}
.box .content .tittle .left .in {
  display: block;
  width: 10px;
  height: 10px;
  background: lemonchiffon;
  margin: 5px;
  border-radius: 5px ;
}
.box .content .tittle h2 {
  float: left;
  margin-left: 15px;
  font-size: 20px;
  font-weight: normal;
}
.box .content ul {
  width: 1200px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.box .content ul li {
  width: 250px;
  height: 200px;
  padding: 10px;
  background: #fff;
  margin:5px ;
  text-align: center;
  padding-top:20px;
  h2{
      margin-top:15px ;
  }
  a:hover{
      text-decoration: none;
      color: red;
  }
}
.box .content ul li:hover{
    box-shadow: 10px 10px 10px #dddfe9;
}
.box .content ul li img {
  width: 230px;
  height: 180;
}

</style>