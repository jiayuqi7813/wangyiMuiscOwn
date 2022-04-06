<template>
    <div class="topNav">
      <div class="topLeft">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liebiao"></use>
        </svg>
      </div>
      <div class="topCenter">
        <span class="navBtn" @click="$router.push('/me')">我的</span>
        <span class="navBtn active">发现</span>
        <span class="navBtn">云村</span>
        <span class="navBtn">视频</span>
      </div>
      <div class="topRight" @click="$router.push('/searchview')">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-wxbsousuotuiguang"></use>
        </svg>
      </div>
    </div>
</template>

<style lang="less" scoped>
.topNav{
    width: 100%;
    height: 0.7rem;
    display: flex;
    justify-content: space-between;
    align-content:center;
    padding: 0.2rem 0.2rem;
    .icon{
        width: 1rem;
        height: 1rem;
    }
    .topCenter{
        width: 15rem;
        display: flex;
        justify-content: space-around;
        .active{
            font-weight: 900;
        }
        }
}
</style>