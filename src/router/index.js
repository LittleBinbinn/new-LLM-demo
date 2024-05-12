
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
          path: "/",
          component: () => import('../components/loginAndEnroll/login.vue')
        },
        {
          path: "/login",
          name: 'login',
          meta: {
            title:"登录界面"
          },
          component: () => import('../components/loginAndEnroll/login.vue')
        },
        {
          path: "/enroll",
          name: "enroll",
          meta: {
            title:"注册界面"
          },
          component: () => import('../components/loginAndEnroll/enroll.vue')
        },
        {
          path: "/database",
          name: "database",
          meta: {
            title:"数据库"
          },
          component: () => import('../components/homepage/database.vue')
        },
        { 
          path: "/chat",
          name: "chat",
          meta: {
            title:"聊天界面"
          },
         component: ()  => import('../components/homepage/chat.vue')
        },
        {
          path: "/user",
          name: "user",
          meta: {
            title:"用户界面"
          },
          component: () => import('../components/homepage/user.vue')
        }
        
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
