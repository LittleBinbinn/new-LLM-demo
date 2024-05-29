//路由信息配置
import { createRouter, createWebHashHistory } from 'vue-router'



const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
          path: "/",
          component: () => import('../view/loginAndEnroll/login.vue')
        },
        {
          path: "/login",
          name: 'login',
          meta: {
            title: "登录界面",
            roles:['user','admin']
          },
          component: () => import('../view/loginAndEnroll/login.vue')
        },
        {
          path: "/enroll",
          name: "enroll",
          meta: {
            title: "注册界面",
            roles:['user','admin']
          },
          component: () => import('../view/loginAndEnroll/enroll.vue')
        },
        {
          path: "/database",
          name: "database",
          meta: {
            title: "数据库",
            roles:['user','admin']
          },
          component: () => import('../view/homepage/database.vue')
        },
        { 
          path: "/chat",
          name: "chat",
          meta: {
            title: "聊天界面",
            roles:['user','admin']
          },
         component: ()  => import('../view/homepage/chat.vue')
        },
        {
          path: "/user",
          name: "user",
          meta: {
            title: "用户界面",
            roles:['user','admin']
          },
          component: () => import('../view/homepage/user.vue')
        },
        {
          path: "/file",
          name: "file",
          meta: {
            title: "文件下发界面",
            roles:['admin']
          },
          component:()=>import("../view/administrators/fileSend.vue")
        },
    ]
})


const whiteList = ["/login", "/enroll", "/"]


// router.beforeEach((to,from,next) => {
//   if (localStorage.getItem('token')) {
//     if (to.path === '/login' || to.path === "/" || to.path === "/enroll") {
//       next("/chat")
//     } else {
//       next()
//     }
//   } else {
//      if (whiteList.includes(to.fullPath)) {
//       next()
//   } else {
//     next("/")
//   }
//   }
// })






export default router
