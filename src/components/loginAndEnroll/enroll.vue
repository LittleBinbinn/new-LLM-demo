<script setup >
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {postEnroll} from '@/api/usr.js'

const router = useRouter();
//用户名
let message = ref('')
//密码
let password = ref('')

const enroll = () => {
    if (test()) {
        postEnroll({
            user: message.value,
            pwd: password.value,
            cap: verification.value
        }).then((res) => {
            if (res.data.message == "注册成功") {
                ElMessage.success("注册成功，请登录");
                router.push({
                    path: "/login",
                })
            }
            if (res.data.message == "用户已存在") {
                ElMessage.error("账户已经存在，请重新输入账户");
            }
        }).catch((error) => {
            ElMessage.error("error")
        });
    }
}

function test() {
    if (!message.value) {
        ElMessage.error("请输入账号");
    }
    else if (!testUsername(message.value)) {
        ElMessage.error("请输入正确的账号");
    }
    else if (!password.value) {
        ElMessage.error("请输入密码")
    }
    else if (!testPassword(password.value)) {
        ElMessage.error("请输入正确的密码");
    }
    else {
        return 1
    }
    return 0;
}

function testUsername(val) {
    const usernamePattern = /^1\d{10}$/;
    return usernamePattern.test(val);
}
function testPassword(val) {
    const passwordPattern = /^\S{6,}$/;
    return passwordPattern.test(val);
}


</script>

<template>
    <div class="contain"> 
            <div class="binner">
                <div class="logo">
                    <img src="@/images/logo-big.png">
                </div>
                <div class="title">
                    注册
                </div>
                <div class="user">
                    <input type="text" class="userName" placeholder="帐号" v-model="message">
                    <input type="text" class="password" placeholder="验证码">
                    <input type="text" class="setword" placeholder="设置密码" v-model="password">
                </div>
                <div class="enroll" @click="enroll" >
                    <button>
                        注册
                    </button>
                </div>
            </div>
    </div>
</template>

<style scoped lang='scss'>

.contain{
    position: absolute;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-image: url(@/images/all-background.jpg);
    box-sizing: border-box;
    background-size:cover;
}
.binner{
    position: absolute;
    margin: 0 auto;
    width: 900px;
    height:500px ;
    top:  50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-image:url(@/images/login-background.jpg) ;
    background-size:cover;
    border-radius:25px ;
    background-repeat: no-repeat;
}
.title{
    position: relative;
    font-size: 36px;
    font-weight: 400;
    margin-top: 90px;
    margin-left: 520px;
    width: 200px;
}

.logo{
    position: absolute;
    right: 0;
}

.user{
    position: relative;
    margin-top: 50px;
    margin-left: 520px;
}
input{
    border-top: 0;
    border-left:0 ;
    border-right:0 ;
    font-size: 16px;
    outline: none;
}
.userName{
    position: relative;
    width: 260px;
}

.password{
    position: relative;
    margin-top: 30px;
    width: 260px;
}

.setword{
    position: relative;
    margin-top: 30px;
    width: 260px;
}


.enroll{
    position: relative;
    margin-top: 50px;
    margin-left: 560px;
}
.enroll button{
    width: 160px;
    height: 35px;
    border: 0;
    border-radius: 10px;
    background-color:rgba(169, 182, 217, 1);
    color: white;
    font-size: 19px;
}


</style>