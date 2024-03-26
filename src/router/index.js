
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
           
          component: () => import('../components/loginAndEnroll/login.vue')
        },
        {
          path: "/enroll",
          name: "enroll",
         
          component: () => import('../components/loginAndEnroll/enroll.vue')
        },
        {
          path: "/database",
          name: "database",
          
          component: () => import('../components/homepage/database.vue')
        },
        { 
         path: "/chat",
          name: "chat",
       
         component: ()  => import('../components/homepage/chat.vue')
        },
        {
          path: "/user",
          name: "user",
         
          component: () => import('../components/homepage/user.vue')
        }
        
    ]
})


const whiteList = ["/login", "/enroll", "/"]


router.beforeEach((to,from,next) => {
  if (localStorage.getItem('token')) {
    if (to.path === '/login' || to.path === "/" || to.path === "/enroll") {
      next("/chat")
    } else {
      next()
    }
  } else {
     if (whiteList.includes(to.fullPath)) {
      next()
  } else {
    next("/")
  }
  }
})


export default router
