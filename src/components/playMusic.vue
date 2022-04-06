<template>
  <div class="playMusic">
    <div
      class="bg"
      :style="{ backgroundImage: `url(${playDetail.al.picUrl})` }"
    ></div>
    <div class="playtop">
      <div class="back" @click="$emit('back')">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zuojiantou" />
        </svg>
      </div>
      <div class="center">
        <div class="title">
          <marquee behavior="scroll" direction="left">
            {{ playDetail.al.name }}
          </marquee>
        </div>
      </div>
      <div class="share">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang" />
        </svg>
      </div>
      
    </div>
    <div class="playContent" v-show="!isLyric">
      <img class="neddle" src="@/assets/img/needle-ab.png" alt="" />
      <img class="disc" src="@/assets/img/disc.png" alt="" />
      <img class="playImg" :src="playDetail.al.picUrl" alt="" />
    </div>
    <div class="playlyric" v-show="isLyric" ref="playLyric">
        <p :class="{active:(currentTime*1000>=item.pre&&currentTime*1000<item.time)}" v-for="(item,i) in $store.getters.lyricList" :key="i">{{item.lyric}}</p>
    </div>
    <div class="progress"></div>
    <div class="playFooter">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xunhuan" />
      </svg>
      <svg class="icon" aria-hidden="true" @click="goPlay(-1)"> 
        <use xlink:href="#icon-shangyishou" />
      </svg>
      <svg v-if="paused" class="icon play" aria-hidden="true" @click="play">
        <use xlink:href="#icon-24gl-play" />
      </svg>
      <svg v-else class="icon play" aria-hidden="true" @click="play">
            <use  xlink:href="#icon-weibiaoti--" />
        </svg>
      <svg class="icon" aria-hidden="true" @click="goPlay(1)">
        <use xlink:href="#icon-kuaijin" />
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-liebiao" />
      </svg>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex"
import { watch } from "vue"

export default {
  props: ["playDetail","paused","play"],
  data(){
      return{
      isLyric : "true"
      }

  },
  computed:{
      ...mapState(['lyric','currentTime','playlist','playCurrentIndex']),
      
  },
  watch:{
        currentTime:function(newValue){
            console.log(newValue)
            console.log([this.$refs.playLyric])
            let p = document.querySelector('p.active')
            if(p){
                let offsetTop = p.offsetTop;
                this.$refs.playLyric.scrollTop = p.offsetTop;
                console.log([p])
            }
            
        }
    },
    methods:{
        goPlay(num){
            let index = this.playCurrentIndex+num
            if(index){
                index = this.playlist.length -1
            }else if(index == this.playlist.length){
                index = 0
            }
            this.$store.commit('setPlayIndex',index)
        }
    }

  
  }
</script>

<style lang="less" scoped>
.playMusic {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-size: auto 100%;
    filter: blur(60px);
    background-position: center;
  }
  .playtop {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 32rem;
    height: 3rem;
    position: absolute;
    left: 0;
    top: 0;
    color: #fff;
    padding: 0 0.4rem;
    .icon {
      fill: #fff;
      width: 2rem;
      height: 2rem;
    }
    marquee {
      width: 4rem;
      flex: 1;
    }
  }
  .playContent {
    position: absolute;
    width: 7.5rem;
    height: 7.5rem;
    left: 0;
    top: 6rem;
    .neddle {
      width: 7rem;
      height: auto;
      position: absolute;
      left: 180%;
      transform: rotate(30deg);
      transform-origin: 00.3rem 0;
      z-index: 10;
    }
    .disc {
      width: 19rem;
      height: auto;
      position: absolute;
      left: 40%;
      top: 100%;
    }
    .playImg {
      width: 12rem;
      height: auto;
      border-radius: 10rem;
      position: absolute;
      left: 86%;
      top: 146%;
    }
  }
  .playFooter {
    width: 25rem;
    height: 7.5rem;
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.8rem;
    .icon {
      fill: #fff;
      width: 2rem;
      height: 2rem;
    }
    .play.icon {
      width: 3rem;
      height: 3rem;
    }
  }
  .playlyric{
    position: absolute;
    width: 100%;
    height: 30rem;
    left: 0;
    top: 9rem;
    overflow: scroll;
    text-align: center;
    color: #fff;
    padding: 00.7rem 0;
    .active{
        color: red;
    }
  }
}
</style>
