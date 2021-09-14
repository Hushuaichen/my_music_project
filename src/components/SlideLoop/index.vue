<template>
   <!--banner轮播-->
    <div class="swiper-container" ref="bannerSwiper">
            <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="./img/109951166366522520.jpg" alt=""></div>
            <div class="swiper-slide"><img src="./img/109951166366573307.jpg" alt=""></div>
            <div class="swiper-slide"><img src="./img/109951166366576166.jpg" alt=""></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<script>
import Swiper from 'swiper'
export default {
    name:'',
mounted(){
            new Swiper ('.swiper-container', {
                // direction: 'vertical', // 垂直切换选项
                loop: true, // 循环模式选项
                
                // 如果需要分页器
                pagination: {
                el: '.swiper-pagination',
                },
                
                // 如果需要前进后退按钮
                navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                },
                
                // 如果需要滚动条
                scrollbar: {
                el: '.swiper-scrollbar',
                },
            })        
        }
}
</script>

<style>
    
</style>