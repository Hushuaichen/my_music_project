<template>
  <div>
       <!-- 导航 -->
    <nav>
        <div class="content">
            <ul>
                <li><a href="##">推荐</a></li>
                <li><a href="##">排行榜</a></li>
                <li><a href="##">歌单</a></li>
                <li><a href="##">主播电台</a></li>
                <li><a href="##">歌手</a></li>
                <li><a href="##">新碟上架</a></li>
            </ul>
        </div>
    </nav>
    <!-- 轮播图 -->
    <div class="lunbo">
        <div class="content">
            <img src="./img/109951166366522520.jpg" alt="">
        </div>
    </div>
    <!-- 内容 -->
    <div class="center">
        <div class="content">
            <div class="tittle">
                <span class="left"><a href="" class="in"></a></span>
                <h2>热门推荐</h2>
                <a href="##">华语</a>
                <a href="##">流行</a>
                <a href="##">摇滚</a>
                <a href="##">民谣</a>
                <a href="##">电子</a>
                <a href="##" class="final">更多 ></a>
            </div>
            <ul class="center-ul">
                <li><a href="##"></a></li>
                <li><a href="##"></a></li>
                <li><a href="##"></a></li>
                <li><a href="##"></a></li>
                <li><a href="##"></a></li>
                <li><a href="##"></a></li>
                <li><a href="##"></a></li>
                <li><a href="##"></a></li>
                <li><a href="##"></a></li>
                <li><a href="##"></a></li>
            </ul>
            <div class="tittle1">
                <span class="left1"><a href="" class="in"></a></span>
                <h2>新歌上架</h2>
                <a href="##" class="final1">更多 ></a>
            </div>
            <ul class="center-ul">
                <li><a href="##"></a></li>
                <li><a href="##"></a></li>
                <li><a href="##"></a></li>
                <li><a href="##"></a></li>
                <li><a href="##"></a></li>
                <li><a href="##"></a></li>
                <li><a href="##"></a></li>
                <li><a href="##"></a></li>
                <li><a href="##"></a></li>
                <li><a href="##"></a></li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
    export default {

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
    }
}
// 内容
.center{
    margin-top:10px ;
    width: 100%;
    // background: #ccc;
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
                background: #ccc;
                background: url(./img/kobe.jpg) no-repeat center center;
                background-size:220px 300px; 
                a{
                    width: 100%;
                    height: 100%;
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