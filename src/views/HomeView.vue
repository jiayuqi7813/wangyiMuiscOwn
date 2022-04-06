<template>
  <div class="home">
    <topNav></topNav>
    <SwiperCom></SwiperCom>
    <IconList></IconList>
    <Musiclist></Musiclist>
  </div>
</template>

<script>
// @ is an alias to /src
import topNav from "@/components/topNav.vue";
import SwiperCom from "../components/swiper-com.vue";
import IconList from "../components/iconList.vue";
import Musiclist from "../components/musiclist.vue";




export default {
  components: {
    topNav,
    SwiperCom,
    IconList,
    Musiclist
},
  data: function () {
    return {};
  },
  computed: {}
};
</script>
<style lang="less" scoped>

</style>
