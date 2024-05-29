<script setup >
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {postEnroll} from '@/api/user.js'
import { ElMessage, tagEmits } from 'element-plus';

let isSend = ref(true)
let change = ref("获取验证码")
const router = useRouter();
//用户名
let message = ref('')
//密码
let password = ref('')
let verification = ref('')
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
        ElMessage.error("请输入10位账号");
    }
    else if (!password.value) {
        ElMessage.error("请输入密码")
    }
    else if (!testPassword(password.value)) {
        ElMessage.error("请输入6位以上正确的密码");
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



//验证码登录部分

//此函数为发送验证码函数
function verificatione() {
    console.log("发送一次");
    // postVerification({
    //      sendCodeDTO:{
    //      phone: phone.value,
    //      status: 0,
    // }}).then((res)=>{
    //     console.log(res);
    // }).catch((err)=>{
    //     console.log(err);
    // })
}


//使用节流发送验证码并限制60s，采用缓存进行精准时间控制
function throttle(fn){
    let t1 = 0
    if(localStorage.getItem("timer")){
        
    }else{
        localStorage.setItem("timer",t1)
    }
    return function(args){
        let t2 = new Date().getTime()
        if(t2 - localStorage.getItem('timer') > 6000){
            fn.apply(this,arguments)
            t1 = t2
            localStorage.setItem("timer",t1)
        }
    }
}



//控制验证码的显示和隐藏
function hide(){
    let time = 6
    isSend.value = false
    let timerr = null
    new Promise((resolve,reject)=>{
      timerr = setInterval(() => {
            change.value = "请等待"+--time+"s"
            if(time == 0){
               resolve()
            }
      }, 1000);
    }).then((res)=>{
        change.value = "发送验证码"
        isSend.value = true
         clearInterval(timerr)
       
    }).catch((err)=>{

    })
   
}

//发送函数，点击事件
const send = throttle(function(){
    verificatione()
    hide()
})
</script>

<template>
    <div class="contain"> 
            <div class="binner">
                <div class="logo">
                    <img src="@/images/newLogo.jpg" height="120" width="120">
                </div>
                <div class="title">
                    注册
                </div>
                <div class="user">
                    <input type="text" class="userName" placeholder="手机号" v-model="message">
                    <input type="text" class="password" placeholder="验证码" v-model="verification">
                    <div class="verification" @click="send() && isSend">
                        {{change}}
                    </div>
                    <input type="password" class="setword" placeholder="设置密码" v-model="password">
                </div>
                <div class="enroll" >
                    <button  @click="enroll" style="cursor:pointer">
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

.verification{
    position: absolute;
    top:50px;
    left:180px;
    cursor: pointer;
}
</style>