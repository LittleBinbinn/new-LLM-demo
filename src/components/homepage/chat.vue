<script setup>
import { ref } from 'vue'
import { sendChat } from '../../api/chat';
import { ElMessage,ElMessageBox } from 'element-plus';
import { useRouter } from 'vue-router'
import Header from "../../views/header.vue"

const router = useRouter()
const textarea = ref('')
const items = ref([])
const res = ref()
var index = ref(0)

async function send() {
    //打字机
    // var data = textarea.value.split("")
    // items.value.push("")
    // var n = items.value.length
    // index = 0
    // await writing()
    // function writing(){
    // if (index < data.length) {
    //     items.value[n-1] += data[index ++]
    //     let timer = setTimeout(writing, 100)
    // }
    // }


    //模板
    items.value.push(textarea.value)
    textarea.value = ""
    items.value.push("兽面纹，这一充满神秘色彩的纹饰，其形成与发展深深地扎根于古代先民们的意识形态和宗教信仰之中。兽面纹饰的形成，可以视为象形纹饰寓意意识的发展结果。原始先民们从自然象形纹饰到寓意象形纹饰的认识过程，经历了漫长的岁月，其中包含了他们对于自然和生活的深刻理解与想象。兽面纹并非凭空产生，它的装饰艺术传承自陶器、漆器、玉器上的纹饰。在河南偃师二里头遗址中发现的雕花残漆器，其花纹便似为兽面纹，而陶器片上也出现了算兽鱼纹、双龙纹等。这些发现为我们揭示了兽面纹的历史渊源，即它源于古代先民的日常生活和宗教信仰。在原始氏族社会，图腾崇拜是先民们精神生活和原始信仰的重要寄托。兽面纹，作为图腾徵号的一种，被刻在器物上，用以崇拜、祭祀，并作为保护神器。这种将兽面纹作为图腾的行为，体现了先民们对于自然的敬畏和对于生活的期盼。随着社会的发展，夏代礼玉的宗教意识延续，兽面纹的表号在演化中得到高度概括和提炼。从具象的形态逐渐转化为抽象的形式和象征手法，使得兽面纹更加富有艺术性和神秘感。商代是兽面纹发展的一个高峰时期。早期的兽面纹造型简单，仅有一对兽目，其他部分都被省略。而到了中期，兽目在图案中的比例增大，显得炯炯有神，同时造型线条和形体结构也变得更加复杂，增加了神秘感。到了商代后期，兽面纹达到了最盛行的时期，其特点是兽角扩大，兽目缩小，整体构图更加精细和复杂。西周早期，兽面纹的种类繁多，其主要标志是突出的角型不同。此时的兽面纹在造型上逐渐由方形演化成体型横长的装饰纹样，线条延绵而紧密，充满了艺术感。然而，到了西周晚期，兽面纹开始衰落，至春秋早期已不常见。总的来说，兽面纹的发展历程是一个从简单到复杂，从具象到抽象的过程。它不仅是古代先民们审美观念的体现，更是他们宗教信仰和精神生活的反映。兽面纹以其独特的艺术魅力，成为了中国古代青铜器艺术中的一颗璀璨明珠。")
    //数据发送和获取
    // sendChat({
    //     message: textarea.value
    // }).then(response => {
    //     res.value = response.data.chinese_response
    //     textarea.value = ""
    //     items.value.push(res.value)
    // }).catch(error => {
    //     ElMessage.error("获取信息失败!")
    // })
}

   
  

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
    localStorage.removeItem("token")
    router.push({ name: "login" })
}


</script>
<template>
    <div class="all">
        <div class="top">
            <div class="logo">
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
            </el-aside>
            <el-main class="right-content">
                <div class="chat">
                    <div class="chat-item" v-for="item in items" :key="item">
                        <img src="@/images/user-double.png" class="user-img" :size="40" />
                        <div class="text">{{item}}</div>
                    </div>
                </div>
               
                <div class="user-text">
                     <el-input v-model="textarea" :autosize="{ minRows: 1, maxRows: 2 }" type="textarea" placeholder="请输入您的问题" class="input-n" />
                     <img class="send" src="@/images/send.png" @click="send"/>
                </div>
            </el-main>
        </el-container>
    </div>
</template>
<style scoped lang='scss'>
//对话写入：
.chat{
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