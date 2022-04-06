<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, i) in imgs" :key="i">
        <img :src="item.pic" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <!-- <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div> -->

    <!-- 如果需要滚动条 -->
    <!-- <div class="swiper-scrollbar"></div> -->
  </div>
</template>
<script>
import axios from "axios";
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import {getBanner} from '@/api/index'

export default {
  data: function () {
    return {
      imgs: [
        { pic: require("../assets/img/swiper1.jpg") },
        { pic: require("../assets/img/swiper2.jpg") },
        { pic: require("../assets/img/swiper3.jpg") },
      ],
    };
  },
  async mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      //direction: 'vertical', // 垂直切换选项
      loop: true, // 循环模式选项
      observeParents: true,
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },

      // // 如果需要前进后退按钮
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },

      // // 如果需要滚动条
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
    });
    let result = await getBanner(1)
    this.imgs = result.data.banners;
  },
};
</script>

<style lang="less" scoped>
.swiper-container {
  margin-top: 30px;
  width: 90% !important;
  height: 9rem !important;
  border-radius: 0.5rem;
}
.swiper-slide img {
  width: 100%;
}
:deep(.swiper-pagination-bullet-active) {
  background-color: red;
}
</style>
