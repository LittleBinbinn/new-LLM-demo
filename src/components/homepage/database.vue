<script setup>
import { ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus';
import { useRouter } from 'vue-router'
import { UploadFilled } from '@element-plus/icons-vue'
import { uploadFile,getFile } from '@/api/database.js';
import { all } from 'axios';

const router = useRouter()
const allfile = ref([])
const isVisible = ref(true)
const text = ref()
const textName = ref()

//删除文件
const handleDelete = async (id) => {
    await ElMessageBox.confirm("确认要删除该文件吗？", "删除提醒", {
        confirmButtonText: "确认",
        cancelButtonText:  "取消"
    }).then((res) => {
        ElMessage.success("删除成功!")
    }).catch((err) => {
        ElMessage.info("删除操作取消")
        return new Promise((resolve, reject) => {
        })
    })
    allfile.value.pop(id);
}

//上传文件
const upload_progress = async (e, file, fileList) => {
    let date = new Date()
    let time = date.toLocaleString()
    let reader = new FileReader()
    reader.readAsText(file.raw);
    reader.onload = function () {
       const currentFile = {
            name: file.name,
            time: time,
            size: Math.ceil(file.size / 1024) + 'KB',
            level: "上传完成...",
            content: reader.result
        }
        allfile.value.push(currentFile);
        // uploadFile({
        //     'currentFile' : currentFile
        // }).then(res => {
        //     allfile.value.push(currentFile)
        //     ElMessage.success("上传成功!")
        // }).catch(err => {
        //     ElMessage.error("上传失败!请重新上传")
        // })
    }
}

//点击展示文件内容
function readFile(index){
    let count = 0;
    for(let item of allfile.value ){
        if(count == index){
            text.value = item.content;
            textName.value = item.name;
        }else{
            count++;
        }
    }
    console.log(count);
    isVisible.value = !isVisible.value;
}

//用户退出
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

//上传文件至数据库
// function upload(item){
    // let formDatas = new FormData()
    // formDatas.append('file_name', item.name)
    // formDatas.append('file_time', item.time)
    // formDatas.append('file_size', item.size)
    // // formDatas.append('file_', item.level)
    // formDatas.append('file_contnt', item.content)
//     uploadFile({
//         item
//     }).then(res =>{
//        ElMessage.success("上传成功!请刷新")
//     }).catch(err => {
//         ElMessage.error("上传失败!")
//     })
// }

</script>
<template>
    <div class="all">
        <div class="top">
            <div class="logo"><img src="@/images/logo.png"></div>
            <div class="change-one"><img src="@/images/change-one.png" @click="router.push({ path: '/chat' })" >
                <sapn class="text">对话</sapn>
            </div>
            <div class="change-two"><img src="@/images/change-two.png" @click="router.push({ path: '/database' })">
                <span class="text">数据库</span>
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
        <el-container class="content">
            <el-aside class="left-content">
                <div class="newChat">
                    <img src="@/images/database.png" alt="">
                    <span class="new-text"><strong>资料库</strong></span>
                </div>
                <div class="search">
                    <img src="@/images/search.png" alt="" class="search-img">
                    <input type="text" placeholder="搜索历史记录" class="search-text">
                </div>
                <div class="file-list">
                    <img src="@/images/file.png">
                    历史文件
                </div>
                <div class="file">
                    <div class="file-item" v-for="(item,index) in allfile" :key="item" @click="readFile(index)">
                        <div class="file-img"><img src="@/images/file.png"></div>
                        <div class="file-name">{{item.name}}</div>
                        <div class="file-time">{{item.time}}</div>
                    </div>
                </div>
            </el-aside>
            <el-main class="right-content" >
            <el-scrollbar  style="height: 60vh" v-show="isVisible">
                <el-table :data="allfile" border style="width: 100%">
                    <el-table-column type="index" label="序号" align="center"/>
                    <el-table-column prop="name" label="文件名称"  align="center" >
                    </el-table-column>
                    <el-table-column prop="size" label="文件大小"  align="center" />
                    <el-table-column prop="time" label="上传时间"  align="center" />
                    <el-table-column prop="level" label="上传状态"   align="center"/>
                    <el-table-column prop="address" label="操作" align="center" v-slot="scope">
                        <el-button type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
                    </el-table-column>
                </el-table>
            </el-scrollbar>

            <!-- 文件内容显示部分 -->
            <div class="readFileContent" v-show="!isVisible">
                <div class="fileTile">
                    当前文件:{{textName}}
                </div>
                <div class="fileContent">
                    {{text}}
                </div>
            </div>

            <div class="user-text" v-show="isVisible">
                <el-upload class="upload-demo" action drag   :on-progress="upload_progress" >
                    <el-icon class="el-icon--upload">
                        <upload-filled />
                    </el-icon>
                    <div class="el-upload__text">
                        点击选择要上传的文件
                    </div>
                </el-upload>
            </div>
            </el-main>
        </el-container>
    </div>
</template>
<style scoped lang='scss'>
::-webkit-scrollbar{display: none;}
.user-img {
    margin-right: 20px;
    flex-shrink: 0;
}

.infinite-list {
    height: 70vh;
    width: 60vw;
    padding: 0;
    margin: 0 auto;
    list-style: none;
}

.text{
    margin-left: 5px;
    font-weight: 400;
    font-size: 15px;
}
.infinite-list-item {
    display: flex;
    align-items: start;
    justify-content: flex-start;
    background: var(--el-color-primary-light-9);
    color: black;
    margin: 20px;
    padding: 20px;
}

.infinite-list .infinite-list-item+.list-item {
    margin-top: 10px;
}

img{
    cursor: pointer;
}
.all {
    height: 100vh;
    width: 100%;
}




.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: auto;
}

.top {
    display: flex;
    height: 5%;
    width: 100%;
    align-items: center;
}


.list{
    cursor: pointer;
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

.new-text {
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

.search-text {
    font-size: 20px;
    margin-left: 30px;
    width: 90%;
    opacity: 0.25;
}

.file-list{
    margin-top: 20px;
    color: rgba(26, 31, 92, 1);
    text-align: start;
    font-size: 28px;
    margin-left: 30px;
}

.file{
    margin-top: 20px;
    height: auto;
}
.file-item{
    text-align: start;
    height: 90px;
    border-radius: 10px;
    border: 1px solid rgba(123, 123, 209, 1);
    cursor: pointer;
}
.file-img{
    margin-top:10px;
    margin-left: 30px;
    display: inline-block;
}

.file-name{
    display:inline-block;
    padding-top: 5px;
    font-size:20px;
    margin-left:10px;
}

.file-time{
    margin-top:8px;
    margin-left:30px;
    font-size: 18px;
    color: rgba(89, 89, 89, 1);
}
.delete {
    position: absolute;
    font-size: 30px;
    text-align: center;
    width: 100%;
    color: rgb(179, 179, 179, 1);
    height: 44px;
    border-radius: 0px 0px, 15px, 0px;
    background: rgba(252, 253, 255, 0.5);
    bottom: 0px;
}

.rubbish {
    margin-right: 30px;
}

.right-content {
    position: relative;
    height: 100%;
    width: 85vw;
    background-image: url(@/images/all-background.jpg);
    background-size: cover;
}


.user-text {
    position: absolute;
    display: flex;
    align-items: center;
    margin: 0 auto;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 100px;
    bottom:50px;
}

.input-n {
    position: relative;
    padding-left: 100px;
    font-size: 30px;
    text-align: center;
    border-radius: 10px;
}

.send {
    margin-left: 30px;
    position: relative;
    cursor: pointer;
}

.upload-demo{
    width: 50vw;
}

.readFileContent{
    margin: 0 auto;
    width: 75vw;
}
.fileTile{
   display: inline-block;
   border:2px solid black;
   padding: 10px;
   font-size: 24px;
   font-weight: 700;
   border-radius: 12px;
   color: rgba(25, 36, 156, 1);
   background-color: white;
}
.fileContent{
    margin-top:30px;
}
</style>