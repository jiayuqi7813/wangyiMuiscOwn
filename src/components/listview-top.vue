<template>
  <div class="listviewtop">
    <img class="bg" :src="playlist.coverImgUrl" alt="" />
    <div class="listviewtopNav">
      <div class="back" @click="$router.go(-1)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zuojiantou"></use>
        </svg>
        <div class="title">歌单</div>
      </div>
      <div class="right">
        <svg class="icon search" aria-hidden="true">
          <use xlink:href="#icon-wxbsousuotuiguang"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gengduo-shuxiang"></use>
        </svg>
      </div>
    </div>
    <div class="content">
      <div class="contentleft">
        <img :src="playlist.coverImgUrl" alt="" />
        <div class="count">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-24gl-play"></use>
          </svg>
          <span>{{ playvolume(playlist.playCount) }}</span>
        </div>
      </div>
      <div class="contentright">
          <h3>
              {{playlist.name}}
          </h3>
          <div class="author">
                <img :src="playlist.creator.avatarUrl" class="header">
              <span>{{playlist.creator.nickname}}</span> 
            </div>
            <div class="description">
                {{playlist.description}}
            </div> 
          </div>
      </div>
      <div class="iconList">
          <div class="iconItem">
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-pinglun"></use>
          </svg>
          <span>{{ playlist.commentCount }}</span>
          </div>
          <div class="iconItem">
              <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fenxiang"></use>
          </svg>
          <span>{{playlist.shareCount}}</span>
              
          </div>
          <div class="iconItem">
              <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xiazai"></use>
          </svg>
          <span>下载</span>
          </div>
          <div class="iconItem">
              <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xuanze-duoxuan-tianchong"></use>
          </svg>
          <span>多选</span>
          </div>
          

      </div>
    </div>
</template>
<script>
export default {
  props: ["playlist"],
  mounted() {
    console.log(this.props);
  },
  methods: {
    //取截单元,单位
    playvolume: function (num) {
      let res = 0;
      if (num > 100000000) {
        res = num / 100000000;
        res = res.toFixed(2) + "亿";
      } else if (num > 10000) {
        res = num / 10000;
        res = res.toFixed(2) + "万";
      }
      return res;
    },
  },
};
</script>

<style lang="less" scoped>
.listviewtop {
  width: auto;
  padding: 1rem 1rem;
  .bg {
    position: fixed;
    left: 0;
    top: 0;
    width: 24rem;
    height: auto;
    z-index: -1;
    filter: blur(25px);
  }
  .listviewtopNav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2rem;
    font-size: 0.7rem;
  }
  .back,
  .right {
    display: flex;
    .title {
      font-size: large !important;
      padding: 0.2rem 0;
      margin-left: 0.4rem;
      color: white;
    }
    .icon {
      width: 1rem;
      height: 2rem;
      fill: white;
    }
    .search {
      margin-right: 1rem;
    }
  }
  .content {
    display: flex;
    justify-content: space-between;
    padding:0.8rem 0 ;
    .contentleft {
      position: relative;
      img {
        width: 9rem;
        height: auto;
        border-radius: 0.2rem;
      }
     
      .count {
        color: white;
        position: absolute;
        right: 0.1rem;
        top: 0.1rem;
        font-size: 0.1rem;
        align-items: center;
        font-weight: 900;
        .icon {
          fill: #ccc;
          width: 1rem;
          height: 0.6rem;
        }
      }
    }
    .contentright{
        padding: 0 0.5rem;
        h3{
            color: #fff;
        }
        .author{
            display: flex;
            align-items: center;
            margin: 0.7rem 0;
            img.header{
                width:2.1rem;
                height: auto;
                border-radius: 6rem;
                margin-right: 0.5rem;
            }
        }
        span{
            color:#fff;
            font-size: small;
        }
        .description{
            font-size: 0.24rem;
            color:#ccc;
            overflow:hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        }
    }
    .iconList{
        display: flex;
        justify-content: space-around;
        .iconItem{
            display: flex;
            flex-direction: column;
            align-items: center;
            .icon{
                fill: #ccc;
                width: 1.5rem;
                height: 1.5rem;
            }
            span{
                font-size: 0.28rem;
                color: #ccc;
                padding-top: 0.3rem;
            }

        }
    }
    
  }

</style>
