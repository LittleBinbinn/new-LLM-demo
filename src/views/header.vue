<script setup >
import { ElMessage,ElMessageBox } from 'element-plus';



</script>
<template>
            <div >
                <img src="@/images/newLogo.jpg" style="height:40px;width:40px">
            </div>
            <div class="change-one"><img src="@/images/change-one.png" style="height:30px;width:30px" @click="router.push({ path: '/chat' })">
            <span class="text-style">对话</span>    
            </div>
            <div class="change-two"><img src="@/images/change-two.png"  style="height:30px;width:30px" @click="router.push({ path: '/database' })">
            <span class="text-style">数据库</span>
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
                <el-dropdown-item @click="router.push({ path: '/user' })"><img src="@/images/edit.png">编辑</el-dropdown-item>
                <el-dropdown-item divided @click="handleLogout"><img src="@/images/exit.png">退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
            </el-dropdown>
            </div>
</template>
<style scoped lang='scss'>

chat{
    margin: 0 auto;
    height: 75vh;
    width: 70vw;
    overflow-y: scroll;
}
.chat-item{         
    display: flex;
    align-items: start;
    justify-content:flex-start;
    max-width: 65vw;
    height: auto;
}
.user-img{
    flex-shrink: 0;
    margin-top: 35px;
    margin-left:20px;
}

.text{
    height: auto;
    margin-top: 35px;
    margin-left:20px;
    padding: 10px 15px;
    font-size: 28px;
    max-width: 66vw;
    color:black;
    background-color: white;
}

::-webkit-scrollbar{display: none;}

img{
    cursor: pointer;
}

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
    position: relative;
    flex-grow: 10;
    margin-left: 25px;
    font-size: 20px;
    color: raba(0, 0, 0, 1);
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

.content {
    position: absolute;
    text-align: center;
    width: 100%;
    height: 95%;
}

.left-content {
    position: relative;
    font-size: 20px;
    height: 100%;
    width: 15vw;
    background: linear-gradient(rgba(101, 134, 224, 1), rgba(219, 217, 252, 1));
}

.newChat {
    display: flex;
    height: 44px;
    background-color: white;
    margin: auto;
    margin-top: 33px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    color: rgba(25, 36, 156, 1);
}
.new-text{
    margin-left: 10px;
}
.search {
    display: flex;
    width: 100%;
    height: 44px;
    margin-top: 17px;
    background: rgba(255, 255, 255, 0.15);
}
.search-img {
    margin-left: 25px;
}
.search-text{
   font-size: 20px;
   margin-left:30px;
   width: 90%;
   opacity: 0.25;
}

.delete{
    position: absolute;
    font-size:30px;
    text-align: center;
    width: 100%;
    color:rgb(179,179,179,1);
    height: 44px;
    border-radius: 0px 0px, 15px, 0px;
    background:rgba(252,253,255,0.5);
    bottom: 0px;
}
.rubbish{
    margin-right: 30px;
}

.right-content{
    position: relative;
    height: 100%;
    width: 85vw;
    background-image: url(@/images/all-background.jpg);
    background-size: cover;
}


.user-text{
    position: absolute;
    display: flex;
    align-items: center;
    margin: 0 auto;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 100px;
    bottom: 50px;
}
.input-n{
    position: relative;
    padding-left: 100px;
    width: 50vw;
     font-size: 30px;
     text-align: center;
     border-radius: 10px;
}

.send{
    margin-left: 30px;
   position: relative;
   cursor: pointer;
}
</style>