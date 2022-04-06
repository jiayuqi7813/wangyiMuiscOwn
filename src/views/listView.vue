<template>
    <div class="listview">
        <ListviewTop :playlist="state.playlist"></ListviewTop>
        <PlayList :playlist="state.playlist"></PlayList>
    </div>
</template>
<script>
import {getPlayListdetail} from '@/api/index'
import {onMounted,reactive} from 'vue'
import { useRoute } from 'vue-router'
import ListviewTop from '../components/listview-top.vue'
import PlayList from '@/components/playList.vue'
import store from '@/store/index'

export default {
    setup() {
        const route = useRoute();
        let state = reactive({ 
        list: [],
        playlist:{
            creator:{},
            tracks:{}
        } });
        onMounted(async () => {
            let id = route.query.id; //获取传参进来的id
            let result = await getPlayListdetail(id);
            state.playlist = result.data.playlist;
            store.commit('setPlaylist',state.playlist.tracks)
            console.log(result);
        });
        return{
           state
        }
    },
    components: { ListviewTop, PlayList }
}
</script>
