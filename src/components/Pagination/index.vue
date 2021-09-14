<template>
     <div class="box">
        <div class="content">
            <ul @click="top">
                <li v-for="(item,index) in page" :key="item.id" @click="top">{{item.num}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name:"Pagination",
        data(){
            return{
                page:[
                    {id:1,num:'<'},
                    {id:2,num:1},
                    {id:3,num:2},
                    {id:4,num:3},
                    {id:5,num:4},
                    {id:6,num:5},
                    {id:7,num:6},
                    {id:8,num:'>'},
                ],
                flag:true
            }
        },
        methods:{
            top(event){
                if(event.target.innnertext!=='<'||event.target.innnertext!=='>'){
                    
                }
            }
        }
        
    }
</script>

<style  lang="less" scoped>
    .box{
        width: 100%;
        /* background-color: #ccc; */
        border-bottom: 1px solid #ccc;
    }
    .box .content{
        width: 1200px;
        margin: 5px auto;
    }
    .box .content ul{
        width: 400px;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
    }
    .box .content ul li{
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        list-style: none;
        background-color: #f4f4f5;

    }
    .box .content ul .active{
        background:red;
    }
</style>