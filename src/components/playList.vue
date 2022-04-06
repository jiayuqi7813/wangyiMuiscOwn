<template>
  <div class="playlist">
    <div class="playlist-top">
      <div class="left">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-24gl-play" />
        </svg>
        <div class="text">
          <div class="title">播放全部</div>
          <div class="num">(共{{ playlist.tracks.length }}首)</div>
        </div>
      </div>
      <div class="star">+收藏({{ playlist.subscribedCount }})</div>
    </div>
    <div class="list">
      <div class="listItem" v-for="(item, i) in playlist.tracks" :key="i">
        <div class="left">
          <div class="index">{{ i + 1 }}</div>
          <div class="content">
            <div class="title">{{ item.name }}</div>
            <div class="avthor">
              <span
                class="tag"
                v-for="(tag, index) in playlist.tags"
                :key="index"
                >{{ tag }}
              </span>
              <span class="n-title">{{ item.al.name }}</span>
            </div>
          </div>
        </div>
        <div class="right">
          <svg class="icon" aria-hidden="true" @click="setPlayIndex(i)">
            <use xlink:href="#icon-bofangqi" />
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-liebiao" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'


export default {
  props: ["playlist"],
  methods:{
     ...mapMutations(['setPlayIndex'])
        
    },
  
};
</script>

<style lang="less" scoped>
.playlist {
  width: auto;
  padding: 0 0.8rem;
  background-color: #fff;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  margin-top: 0.9rem;
  .playlist-top {
    display: flex;
    justify-content: space-between;
    height: 3rem;
    align-items: center;
    .left {
      display: flex;
      align-items: center;
      .icon {
        height: 1.5rem;
        width: 1rem;
      }
      .title {
        font-size: 0.4rem;
        font-weight: 900;
      }
      .num {
        font-size: 00.3rem;
        color: #ccc;
      }
      .text {
        display: flex;
        align-items: center;
        margin-left: 00.5rem;
      }
    }
    .star {
      font-size: 0.8rem;
      color: #fff;
      background: red;
      height: 1.7rem;
      width: auto;
      padding: 00.6rem;
      display: flex;
      align-items: center;
      border-radius: 00.3rem;
    }
  }
  .list {
    .listItem {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 3rem;
      .left {
        .index {
          width: 00.3rem;
        }
        display: flex;
        align-items: center;
        color: #666;
        .content {
          margin-left: 1rem;
        }
        .title {
          font-size: 0.3rem;
          font-weight: 900;
          color: #000;
          margin-bottom: 00.1rem;
        }
        .n-title{
            font-size: 0.01rem;
            
        }
        .tag {
          font-size: 0.01rem;
          color: orangered;
          border: 1px solid orangered;
          border-radius: 0.1rem;
        }
        .avthor {
          color: #666;
        }
      }
      .icon {
        width: 2rem;
        height: 1.3rem;
        fill: #666;
        .right {
          margin: 3rem;
        }
      }
    }
  }
}
</style>
