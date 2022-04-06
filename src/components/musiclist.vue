<template>
  <div class="musicList">
    <div class="musicList-top">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="mlist">
      <div class="swiper-container" id="swiper-hgq">
        <div class="swiper-wrapper">
          <router-link :to="{path:'/listview',query:{id:item.id}}" class="swiper-slide" v-for="(item, i) in state.musiclist" :key="i">
            <img :src="item.picUrl" :alt="item.name" />
            <div class="name">{{ item.name }}</div>
            <div class="count">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-24gl-play"></use>
              </svg>
              <span>{{ playvolume(item.playCount) }}</span>
            </div>
          </router-link>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import { getMuiscList } from "@/api/index";
import { reactive, onMounted, onUpdated } from "vue";
import store from "@/store/index";

export default {
  setup() {
    let state = reactive({musiclist:[]});
    function playvolume(arg) {
      if (arg.toString().length > 13) {
        // return arg/1000000000000+"万亿"
        const volume = arg / 1000000000000;
        const realVal = parseFloat(volume).toFixed(2);
        return realVal + "万亿";
      } else if (arg.toString().length > 9) {
        const volume = arg / 100000000;
        const realVal = parseFloat(volume).toFixed(2);
        return realVal + "亿";
      } else if (arg.toString().length > 4) {
        const volume = arg / 10000;
        const realVal = parseFloat(volume).toFixed(2);
        return realVal + "万";
      }
    }
    onMounted(async () => {
      let result = await getMuiscList(6);
      state.musiclist = result.data.result;
    
    });
    onUpdated(() => {
      var swiper = new Swiper("#swiper-hgq", {
        slidesPerView: 3,
        spaceBetween: 10,
      });
    });
    return {
      state,
      playvolume,
    };
  },
};
/*
export default {
  data() {
    return {
      musiclist: [],
    };
  },
  async mounted() {
    let result = await getMuiscList(6);
    this.musiclist = result.data.result;
  },
  updated() {
    var swiper = new Swiper("#swiper-hgq", {
      slidesPerView: 3,
      spaceBetween: 10,
    });
  },
  methods:{
		//取截单元,单位
	playvolume:function(arg){
			if(arg.toString().length>13){
				// return arg/1000000000000+"万亿"
				const volume= arg/1000000000000
				const realVal = parseFloat(volume).toFixed(2);
				return realVal+"万亿"
				
			}else if(arg.toString().length>9){
				const volume= arg/100000000
				const realVal = parseFloat(volume).toFixed(2);
				return realVal+"亿"
			}else if(arg.toString().length>4){
				const volume= arg/10000
				const realVal = parseFloat(volume).toFixed(2);
				return realVal+"万"
			}
			
		}
	}
};
*/
</script>

<style lang="less" scoped>
.musicList {
  width: auto;
  padding: 0 20px;

  .musicList-top {
    display: flex;
    justify-content: space-between;
    height: 4rem;
    align-items: center;
    .title {
      font-size: 20px;
      font-weight: 900;
    }
    .more {
      border: 1px solid #ccc;
      height: 1.3rem;
      width: 3.3rem;
      border-radius: 0.2rem;
      font-size: 10px;
      align-items: center;
    }
  }
  .mlist {
    .swiper-container {
      width: 100%;
      height: 10.1rem;
      .swiper-slide {
        display: flex;
        flex-direction: column;
        position: relative;
        img {
          width: 100%;
          height: auto;
          border-radius: 0.5rem;
        }
        .name {
          height: 0.5rem;
          width: 100%;
          font-size: 10px;
          line-height: 0.9rem;
        }
        .count {
          color: white;
          position: absolute;
          right: 0.1rem;
          top: 0.1rem;
          font-size: 0.1rem;
          .icon {
            fill: #ccc;
            width: 1rem;
            height: 0.6rem;
          }
        }
      }
    }
  }
}
</style>
