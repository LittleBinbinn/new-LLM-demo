<script setup >
import { useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus';
import {temp} from "@/api/mock.js"

const router = useRouter()

const handleLogout = async () => {
    await ElMessageBox.confirm("确认要退出吗？", "退出询问", {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).catch(() => {
        ElMessage.info("取消退出操作")
        throw new Promise(() => {
        })
    })
    ElMessage.success("用户已经成功退出！")
    router.push({ name: "login" })
}


function confirm(){
    temp().then(res=>{
        console.log(res.data);
    })
}
</script>
<template>
<div class="all">
    <div class="top">
                <div class="logo">
                <img src="@/images/newLogo.jpg" style="height:40px;width:40px" />
                 <span>智语晋游</span>
                 </div>
                <div class="change-one"><img src="@/images/change-one.png" style="height:30px;width:30px" @click="router.push({ path: '/chat' })">
                <span class="text-style" @click="router.push({ path: '/chat' })" style="cursor:pointer">对话</span>    
                </div>
                <div class="change-two"><img src="@/images/change-two.png" style="height:30px;width:30px"  @click="router.push({ path: '/database' })">
                <span class="text-style" @click="router.push({ path: '/database' })" style="cursor:pointer">数据库</span>
                </div>
                <div class="navigator">
                <el-dropdown>
                    <span class="el-dropdown-link">
                    <img class="user" src="@/images/user.png">
                    <el-icon class="el-icon--right">
                         <img src="@/images/updown.png">
                    </el-icon>
                    </span>
                <template #dropdown>
                    <el-dropdown-menu >
                        <el-dropdown-item @click="router.push({ path: '/user' })"><img src="@/images/edit.png" > 编辑</el-dropdown-item>
                        <el-dropdown-item divided @click="handleLogout"><img src="@/images/exit.png">退出</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
                </el-dropdown>
                </div>
    </div>
    <div class="content">
        <div class="user-change">
            <div class="user-alavtar"><img src="@/images/user(2).png">个人中心</div>
            <div class="user-name">
                <div class="user-text">名字</div>
                <div class="user-input"><input type="text" class="input"></div>
            </div>
            <div class="user-name">
                <div class="user-text">账号</div>
                <div class="user-input"><input type="text" class="input"></div>
            </div>
            <div class="user-name">
                <div class="user-text">密码</div>
                <div class="user-input"><input type="password" class="input"></div>
            </div>
             <div class="user-name">
                    <div class="user-text">新密码</div>
                    <div class="user-input"><input type="password" class="input"></div>
                </div>
            <div class="user-name">
                    <div class="user-text">确认密码</div>
                    <div class="user-input"><input type="password" class="input"></div>
            </div>
            <div class="change">
                <button class="confirm" @click="confirm">确认</button>
                <button class="cancel">取消</button>
            </div>
        </div>
    </div>
</div>
</template>
<style scoped lang='scss'>
.all{
    height: 100vh;
    width: 100%;
}

.top{
    display: flex;
    align-items: center;
    height: 5%;
    width: 100%;
    align-items: center;
}

.list{
    cursor: pointer;
}


.text-style{
    margin-left: 5px;
    font-weight: 400;
    font-size: 15px;
}

.change-one{
    display: flex;
    flex-grow: 2;
    align-items: center;
}
.logo {
    display: flex;
    align-items: center;
    position: relative;
    flex-grow: 10;
    margin-left: 25px;
    font-size: 20px;
    color: rgba(0, 0, 0, 1);
}
.change-two{
    display: flex;
    flex-grow: 50;
    align-items: center;
}
.navigator {
    position: relative;
    flex-grow: 1;
}

.content{
    width: 100%;
    height: 95%;
    background-image: url(@/images/all-background.jpg);
    background-size:cover;
}
.user-change{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    width: 471px;
    height: 90%;
    margin: 0 auto;
}

.user-name{
    margin-top: 15px;
    width: 100%;
    height: 80px;
}

.user-alavtar{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 33px;
    height: 80px;
    font-size:26px;
    color: rgba(25, 36, 156, 1);
}

.user-input{
    width: 425px;
}

.user-text{
     font-size: 24px;
}

.input{
    width: 471px;
    height: 52px;
    margin-top:14px;
    font-size: 25px;
    padding-left: 10px;
    border-radius: 10px;
}

.change{
    margin-top: 40px;
    height: 80px;
}

button{
    width: 119px;
    height: 52px;
    border: none;
    font-size: 20px;
}

.confirm{
    color:white;
    background-color:rgba(143, 154, 255, 1);
}

.cancel{
    margin-left: 232px;
    color: rgba(143, 154, 255, 1);
    background-color:white;
}
</style>