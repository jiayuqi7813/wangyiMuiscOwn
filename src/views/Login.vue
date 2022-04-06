<template>
<div class="login-bg">
    <div class="login-contain">
        <div class="login-header">
            <p>欢迎登录</p>
        </div>
        <div class="form-group">
            <div class="form-item">
                <label for="username">
                    <img src="../assets/img/user.png">
                </label>
                <input v-model="phone" id="username" type="text" placeholder="请输入手机号码" autocomplete="new-password">
            </div>
            <div class="form-item">
                <label for="password">
                    <img src="../assets/img/password.png" alt="">
                </label>
                <input v-model="password" id="password" type="password" placeholder="请输入密码" autocomplete="new-password">
            </div>
        </div>
        <div class="button-group">
            <button @click="loginEvent" class="login-btn" id="doLogin">登录</button>
        </div>

        <div class="order-login">
            <p class="order-login-line">其他登录方式</p>
            <div class="order-login-box">
                <div>
                    <a href="#">
                        <img src="../assets/img/wechat-login.png" alt="" style="width: 45px;height: 45px;">
                        <p>微信登录</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data:function(){
        return {
            phone:"",
            password:""
        }
    },
    methods:{
        loginEvent:async function(){
            let result = await this.$store.dispatch('phoneLogin',{phone:this.phone,password:this.password})
            
            if(result.data.code==200){
                this.$router.push('/me')
            }
        }
    }
}
</script>


<style lang="less" scoped>

a, li {
    list-style: none;
}
a {
    text-decoration: none;
    color: black;
}
.login-bg {
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    z-index: 10000;
    background: orangered;
    color: #ffffff;
    background-size: 100% 100%;
}
.login-contain {
    width: 85%;
    margin:0 auto;
}
.login-header {
    padding: 5%;
}
.login-header p {
    font-size: 32px;
    color: #ffffff;
    font-weight: bold;
    text-align: center;
    letter-spacing: 2px;
    text-shadow: 0.1em 0.15em 0.1em #74C3CA
}
.login-logo {
    padding: 5%;
}
.login-logo img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
}
.login-logo p {
    color: #ffffff;
    font-size: 14px;
    text-align: center;
    letter-spacing: 2px;
    margin-top: 2%;
}
.form-group {
    padding: 5%;
}
.form-group .form-item {
    margin-top: 5%;
    padding:0 10px;
    border-radius: 20px;
    background-color: rgba(0,0,0,0.1);
}
.form-group .form-item input {
    outline: none;
    border: 0;
    background-color: transparent !important;
    color: #ffffff;
    height: 40px;
    font-size: 18px;
    width: 55%;
    margin-left: 12%;
}



.form-group .form-item input::-webkit-input-placeholder {
    /* WebKit browsers */
    color: #ffffff;
    font-size: 16px;
}
.form-group .form-item input:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #ffffff;
    font-size: 16px;
}
.form-group .form-item input::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #ffffff;
    font-size: 16px;
}
.form-group .form-item input:-ms-input-placeholder {
    /* Internet Explorer 10+ */
    color: #ffffff;
    font-size: 16px;
}
.form-group .form-item label img {
    width: 25px;
    position: absolute;
    margin-top: 5px;
}
.form-group .form-item button {
    outline: none;
    background: transparent;
    border: 1px #00cc99 dashed;
    color: #ffffff;
    height: 30px;
    border-radius: 5px;
    float: right;
    padding: 1%;
}
.button-group {
    padding: 5%;
}
.button-group button {
    outline: none;
    border: 0;
    width: 90%;
    height: 35px;
    margin-top: 4%;
    border-radius: 20px;
    margin-left: 4%;
    color: #ffffff;
    font-size: 18px;
}
.button-group .login-btn {
    background-color: #ffffff;
    color: #74C3CA;
}

.order-login {
    padding: 5%;
}
.order-login-line {
    display: block;
    position: relative;
    text-align: center;
    font-size: 14px;
    color: #ffffff;
}
.order-login-line:before,
.order-login-line:after {
    content: '';
    position: absolute;
    top: 50%;
    background: #ffffff;
    width: 20%;
    height: 1px;
}
.order-login-line:before {
    left: 10%;
}
.order-login-line:after {
    right: 10%;
}
.order-login-box {
    display: flex;
    width: 100%;
    justify-content:center;
    margin-top: 20px;
}
.order-login-box div{
    flex: 1;
    text-align: center;
}
.order-login-box div p{
    text-align: center;
    font-size: 14px;
    color: #ffffff;
}
</style>