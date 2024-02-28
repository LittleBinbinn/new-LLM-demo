
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
          path: "/",
          
          component: () => import('../components/homepage/chat.vue')
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




export default router
