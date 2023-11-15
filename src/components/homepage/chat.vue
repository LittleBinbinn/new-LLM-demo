<script setup>
import { ref } from 'vue'
import { sendChat } from '../../api/chat';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router'

const router = useRouter()
const textarea = ref('')
const items = ref([])
const res = ref()

function send() {
    items.value.push(textarea.value)
    
    console.log(textarea.value);
    sendChat({
        message: textarea.value
    }).then(response => {
        res.value = response.data.chinese_response
        items.value.push(res.value)
    }).catch(error => {
        ElMessage.error("获取信息失败!")
    })
}
</script>
<template>
    <div class="all">
        <div class="top">
            <div class="logo">logo</div>
            <div class="navigator">
                <img class="user" src="@/images/user.png">
                <img class="list" src="@/images/list.png" alt="" @click="router.push({ path: '/database' })">
            </div>
        </div>
        <el-container class="content">
            <el-aside class="left-content">
                <div class="newChat">
                    <img src="@/images/new.png" alt="">
                    <span class="new-text"><strong>新建对话</strong></span>
                </div>
                <div class="search">
                    <img src="@/images/search.png" alt="" class="search-img">
                    <input type="text" placeholder="搜索历史记录" class="search-text">
                </div>
                <div class="delete">
                     <img src="@/images/delete.png" alt="" class="rubbish">
                    <span>批量删除</span>
                </div>
            </el-aside>
            <el-main class="right-content">
                 <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
                        <li v-for="item in items" :key="item" class="infinite-list-item">
                            <el-avatar class="user-img" :size="40" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
                            <div class="text">{{ item }}</div>
                        </li>
                 </ul>
                <div class="user-text">
                     <el-input v-model="textarea" :autosize="{ minRows: 1, maxRows: 4 }" type="textarea" placeholder="请输入您的问题" class="input-n" />
                     <img class="send" src="@/images/send.png" @click="send"/>
                </div>
            </el-main>
        </el-container>
    </div>
</template>
<style scoped lang='scss'>

.user-img{
    margin-right: 20px;
    flex-shrink: 0;
}
.infinite-list {
  height: 60vh;
  width: 60vw;
  padding: 0;
  margin: 0 auto;
  list-style: none;
}
.infinite-list-item {
  display: flex;
  align-items: start;
  justify-content:flex-start;
  background: var(--el-color-primary-light-9);
  color: black;
  margin: 20px;
  padding: 20px;
}

.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}

.text{
    padding-left:20px;
    font-size: 28px;
    color:black;
}

.all{
    height: 100vh;
    width: 100%;
}

.top{
    display: flex;
    height: 4%;
    width: 100%;
    align-items: center;
}

.list{
    cursor: pointer;
}

.logo {
    position: relative;
    flex-grow: 35;
    margin-left: 25px;
    font-size: 20px;
    color: raba(0, 0, 0, 1);
}

.navigator {
    position: relative;
    flex-grow: 1;
}

.content {
    position: absolute;
    text-align: center;
    width: 100%;
    height: 96%;
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