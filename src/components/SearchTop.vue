<template>
    <div class="searchTop">
        <div class="searchTopNav">
            <div class="back" @click="$router.go(-1)">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-zuojiantou"></use>
                </svg>
            </div>
            <div class="right">
                <input type="text" v-model="searchKeyword" :placeholder="placeholder" @keydown.enter="saveKeyWord">
            </div>
        </div>
        <div class="history" v-show="searchSongs.length==0">
            <div class="historyLeft">
                历史
            </div>
            <div class="historyRight">
                <div @click="historySearch(item)" class="keywordItem" v-for="(item,i) in keywordList" :key="i">{{item}}</div>
            </div>
        </div>
<div class="searchSongs" v-show="searchSongs.length!==0">
    <div class="searchSongs-top">
        <div class="left">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-bofang"></use>
            </svg>
            <div class="text">
                <div class="title">播放全部</div>
                <div class="num">（共{{searchSongs.length}}首）</div>
            </div>
        </div>
        

    </div>
    <div class="list">
        <div class="playItem" v-for="(item,i) in searchSongs" :key="i">
            <div class="left">
                <div class="index">{{i+1}}</div>
                <div class="content">
                    <div class="title">{{item.name}}</div>
                    <div class="anthor">

                        <span class="name">{{item.album.name}}</span>

                    </div>
                </div>
            </div>
            <div class="right">
                <svg class="icon" aria-hidden="true" @click="setPlay(item,i)">
                    <use xlink:href="#icon-bofang"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-liebiao"></use>
                </svg>
            </div>
        </div>
    </div>
</div>
            
    </div>
</template>

<script>
import {searchMusic} from '@/api/index.js'
export default {
    data:function(){
        return {
            placeholder:"陈奕迅",
            keywordList:[],
            searchKeyword:'',
            searchSongs:[]
        }
    },
    beforeMount(){
        console.log(123)
        this.keywordList =localStorage.keywordList? JSON.parse(localStorage.keywordList):[]
    },
    methods:{
        saveKeyWord:async function(){
            this.keywordList.push(this.searchKeyword)
            this.keywordList = Array.from(new Set(this.keywordList)) 
            if(this.keywordList.length>10){
                this.keywordList = this.keywordList.slice(this.keywordList.length-10,this.keywordList.length)
            }
            localStorage.keywordList = JSON.stringify(this.keywordList)
            let result = await searchMusic(this.searchKeyword)
            this.searchSongs = result.data.result.songs
            console.log(this.searchSongs)
        },
        historySearch(keyword){
            this.searchKeyword = keyword;
            this.saveKeyWord()
        },
        setPlay(item,i){
            item.al = item.album;
            item.al.picUrl = item.album.artist.img1v1Url
            console.log(item)
            this.$store.commit('pushPlaylist',item)
            this.$store.commit('setPlayIndex',this.$store.state.playlist.length-1)
        }
    }
}
</script>


<style lang="less" scoped>
.searchTop{
    width: auto;
    height: 100%;
    
    padding:0 0.4rem;

    .searchTopNav{
        display: flex;
        width: 100%;
        height: 2rem;
        padding:0 0.4rem;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        .icon{
            width: 1rem;
            height: 1rem;
        }
        .right{
            padding: 0 0 0 0.4rem;
            flex: 1;
            input{
                border: none;
                outline:none;
                border-bottom: 1px solid #666;
                width: 100%;
                height: 1rem;
            }
        }
    }
    .history{
        display: flex;
        margin-top: 1.2rem;
        .historyLeft{
            width: auto;
            height: 12rem;
            font-weight: 900;
            margin:1rem 0rem;
            line-height: 0.6rem;
        }
        .historyRight{
            color: #666;
            display: flex;
            flex-wrap: wrap;
            flex: 1;
            .keywordItem{
                background-color: #eee;
                height: 1rem;
                padding: 0 0.9rem;
                border-radius: 0.4rem;
                line-height: 0.6rem;
                margin:1rem 0.1rem;
            }
        }
    }
.searchSongs {
    width: 100%;
    padding: 0 0.4rem;
    background-color: #fff;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
    
    position: fixed;
    top: 2rem;
    bottom: 1.2rem;
    overflow: scroll;

    .searchSongs-top {
        display: flex;
        justify-content: space-between;
        height: 3rem;
        align-items: center;

        .left {
            display: flex;
            align-items: center;

            .icon {
                width: 2rem;
                height: 2rem;
            }

            .title {
                font-size: 0.34rem;
                font-weight: 900;
            }

            .num {
                font-size: 0.24rem;
                color: #666;
            }

            .text {
                display: flex;
                align-items: center;
                margin-left: 0.2rem;
            }

        }

        .btn {
            font-size: 0.24rem;
            color: #fff;
            background-color: orangered;
            line-height: 0.6rem;
            padding: 0.1rem;
            border-radius: 0.4rem;

        }
    }

    .list {
        .playItem {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 3rem;
            width: auto;

            .left {
                flex: 1;
                display: flex;
                align-items: center;
                color: #666;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                word-break: break-all;
                
                word-wrap: break-word;

                .index {
                    width: 3rem;
                }

                .content {
                    padding-left: 0.4rem;
                    width: 100%;
                }

                .title {
                    width: calc(100% - 0.4rem);
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    word-break: break-all;
                    word-wrap: break-word;
                    font-size: 1rem;
                    font-weight: 900;
                    color: #000;
                    margin-bottom: 0.1rem;
                }

                .tag {
                    font-size: 0.2rem;
                    color: orangered;
                    border: 1px solid orangered;
                    border-radius: 0.1rem;
                    margin-right: 0.1rem;

                }

                .anthor {
                    color: #666;
                    display: flex;
                    overflow: hidden;
                    height: 3rem;

                    .name {
                        width: 1rem;
                    }
                }
            }

            .right {
                width: 3rem;

                .icon {
                    width: 1rem;
                    height: 1rem;
                    margin: 0 0.2rem
                }
            }

        }
    }
}
    
}
</style>