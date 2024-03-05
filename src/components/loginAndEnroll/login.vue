<script setup >
import { ElMessage } from 'element-plus';
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { postLogin } from '@/api/usr.js';

const router = useRouter();

const message = ref()
const password = ref()

const submit = () => {
    //     if (test()) {
    //     postLogin({
    //         user: message.value,
    //         pwd: password.value
    //     }).then(res => {
    //         if(res.data.right == "登陆成功"){
    //         ElMessage.success("登陆成功！");
    //         router.push({
    //             path:"/chat"
    //         })
    //     }else{
    //         ElMessage.error("账号或者密码不正确，请重新检查！");
    //     }
    //     }).catch(error => {
    //         ElMessage.error("登录失败！请再次检查账号和密码");
    //     })
    // }
    router.push({
                path:"/chat"
            })
    localStorage.setItem('token',"AFASDFSAF-13145210")
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
    return 1;
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
function handleBlur() {
    if (!testUsername(message.value))
    {
        ElMessage.warning("请输入以1开头11位数的账号")
    }
    console.log("执行一次");
}

function handleBlured() {
    if (!testPassword(password.value))
    {
         ElMessage.warning("请输入6位及以上的密码")
    } 
}
</script>

<template>
    <div class="contain">
            <div class="binner">
                <div class="logo">
                    <img src="@/images/logo-big.png">
                </div>
                <div class="title">
                    登录
                </div>
                <div class="user">
                    <input type="text" class="username" placeholder="账户" v-model="message"  @blur="handleBlur">
                    <input type="text" class="password" placeholder="密码" v-model="password"  @blur="handleBlured">
                </div>
                <div class="do">
                    <input type="checkbox" name="" id=""><span>记住密码</span>
                    <a href="">忘记密码？</a>
                </div>
                <div class="submit">
                    <button type="submit" @click="submit">
                        <strong >登录</strong>
                    </button>
                </div>
                <div class="enroll">
                    没有账号？去
                    <span @click="router.push({path:'/enroll'})" class="enrolled">注册</span> 
                </div>
            </div>
    </div>
</template>

<style scoped>


.contain{
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(@/images/all-background.jpg);
    box-sizing: border-box;
    background-size:cover;
    overflow: hidden;
}

.binner{
    position: absolute;
    width: 900px;
    height:500px ;
    background-image:url(@/images/login-background.jpg) ;
    background-size:cover;
    background-repeat: no-repeat;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius:25px ;
}

.logo{
    position: absolute;
    right: 0;
}
.title{
    position: relative;
    margin-top: 90px;
    margin-left: 520px;
    font-size: 36px;
    font-weight: 400;
}
.user{
    position: relative;
    margin-top: 50px;
    margin-left: 520px;
    padding-left: 3px;
    font-size: 20px;
}
input{
    border-top: 0;
    border-left:0 ;
    border-right:0 ;
    outline: none;
    font-size: 16px;
}
.username{
    position: relative;
    width: 260px;
}
.password{
    position: relative;
    margin-top: 40px;
    width: 260px;
}
.do{
    position: relative;
    margin-top: 30px;
    margin-left: 10px;
    left: 517px;
}
.do span{
    color: rgba(130, 130, 130, 1);
    font-size: 15px;
}
.do a{
    position: relative;
    left: 95px;
    font-size: 15px;
    color: rgba(130, 130, 130, 1);
    text-decoration: none;
}
.submit{
    position: relative;
    margin-top: 30px;
    margin-left: 580px;
}
.submit button{
    width: 145px;
    height: 26px;
    border: 0;
    border-radius: 10px;
    background-color:rgba(169, 182, 217, 1);
    color: white;
    font-size: 15px;
    cursor: pointer;
}
.enroll{
    position: relative;
    margin-top: 17px;
    margin-left: 593px;
    font-size: 14px;
    color: rgba(130, 130, 130, 1);
}
.enroll a{
    text-decoration: none;
    color: rgba(85, 131, 212, 1);
}

.enrolled{
    color: blue;
    cursor: pointer;
}


</style>