<template>
    <div class="playController">
        <div class="left" @click="show=!show">
           <img :src="playlist[playCurrentIndex].al.picUrl" alt="">
           <div class="content">
               <div class="title">{{playlist[playCurrentIndex].al.name}}</div>
               <div class="tips">横滑可以切换上下首</div>
           </div>
        </div>
        <div class="right">
            <svg v-if="paused" class="icon" aria-hidden="true" @click="play">
            <use  xlink:href="#icon-bofang" />
          </svg>
          <svg v-else class="icon" aria-hidden="true" @click="play">
            <use  xlink:href="#icon-weibiaoti--" />
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-liebiao" />
          </svg>
        </div>
       <PlayMusic :play="play"
        :paused="paused"
       @back="show=!show" v-show="show" :playDetail="playlist[playCurrentIndex]"></PlayMusic>
        <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playlist[playCurrentIndex].id}.mp3`">
        </audio>
    </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'
import PlayMusic from './playMusic.vue'

export default ({
    data(){
        return{
            paused:true,
            show:false
        }
    },
    computed:{
        ...mapState(['playlist','playCurrentIndex'])
    },
    updated(){
        this.$store.dispatch('reqLyric',{id:this.playlist[this.playCurrentIndex].id})
        
        
    },
    mounted(){
        this.$store.dispatch('reqLyric',{id:this.playlist[this.playCurrentIndex].id})
        
    },
    methods:{
        play:function(){
            
            if(this.$refs.audio.paused){
                this.$refs.audio.play()
                this.paused = false
                this.UpdateTime()
            }else{
                this.$refs.audio.pause()
                this.paused = true
                clearInterval(this.$store.state.id)
            }
        },
        
        UpdateTime(){
            this.$store.state.id = setInterval(()=>{
                this.$store.commit('setCurrentTime',this.$refs.audio.currentTime)
            },1000)
        }
    },
     components:{
         PlayMusic,
 }
})
</script>

<style lang="less" scoped>
.playController{
    background: white;
    width: 23.4rem;
    height: 3.4rem;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 2px solid black;
    .left{
        display: flex;
        padding: 0 0.5rem;
        img{
            width: auto;
            height: 2rem;
            border-radius: 00.4rem;
        }
        .content{
            padding: 0 0.5rem;
            .tips{
                font-size: 0.2rem;
                color:#ccc;

            }
        }
    }
    .right{
        .icon{
            margin: 0 0.6rem;
            width: 2rem;
            height: 2rem;
        }
    }
}
</style>