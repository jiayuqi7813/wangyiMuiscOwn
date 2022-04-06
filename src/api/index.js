import axios from "axios";
let BASE_URL = 'http://127.0.0.1:3000'
//获取轮播图api，type:资源类型，0pc
//1 android 2 iphone 3 ipad
export function getBanner(type=0){
    return axios.get(`${BASE_URL}/banner?type=${type}`);
}
//获取推荐歌单
export function getMuiscList(limit=10){
    return axios.get(`${BASE_URL}/personalized?limit=${limit}`)
}
//获取歌单详情
export function getPlayListdetail(id){
    return axios.get(`${BASE_URL}/playlist/detail?id=${id}`)
}
//获取歌词
export function getLyric(id){
    return axios.get(`${BASE_URL}/lyric?id=${id}`)
}
// 搜索歌曲
export function searchMusic(keyword){
    return axios.get(`${BASE_URL}/search?keywords=${keyword}`)
}

// 手机登录
export function phoneLogin(phone,password){
    return axios.get(`${BASE_URL}/login/cellphone?phone=${phone}&password=${password}`)
}

// 获取用户的详情
export function userDetail(uid){
    return axios.get(`${BASE_URL}/user/detail?uid=${uid}`)
}


export default {
    getBanner,getMuiscList,getPlayListdetail,getLyric,searchMusic,phoneLogin,
    userDetail
}