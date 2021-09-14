<template>
   <div class="box">
        <div class="content">
            <div class="tittle">
                <span class="left"><a href="" class="in"></a></span>
                <h2>{{$route.params.name}}</h2>
            </div>
            <!-- <ul>
                <li><a href=""><span></span></a></li>
                <li><a href="">songname</a></li>
                <li><a href="">songname</a></li>
            </ul> -->
            <video :src="url" controls></video>
            <span>{{$route.params.des}}</span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            url:"",
            id:''
        }
    },
    beforeMount(){
        this.id = this.$route.params.id
        console.log(this.$route.params.id);
        console.log(this.id);
    },
    mounted(){
        this.getVedio()
    },
    methods:{
       async getVedio(){
           try {
            const result = await this.$API.getReqVedio(this.id)
            this.url = result.urls[0].url
           } catch (error) {
            this.$message.error('获取失败 呜呜呜'+error);
            console.log(this.url);
           }

       }
    }
}
</script>

<style>
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
.box .content video{
  width: 1100px;
  height: 500px;

}
.box .content span{
    display: block;
    font-size: 16px;
}

</style>