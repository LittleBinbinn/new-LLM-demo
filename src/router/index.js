
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
           meta: { keepAlive: false },
          component: () => import('../components/loginAndEnroll/login.vue')
        },
        {
          path: "/enroll",
          name: "enroll",
           meta: { keepAlive: false },
          component: () => import('../components/loginAndEnroll/enroll.vue')
        },
        {
          path: "/database",
          name: "database",
          meta: { keepAlive: true },
          component: () => import('../components/homepage/database.vue')
        },
        { 
         path: "/chat",
          name: "chat",
          meta: { keepAlive: true },
         component: ()  => import('../components/homepage/chat.vue')
        },
        {
          path: "/user",
          name: "user",
          meta: { keepAlive: true },
          component: () => import('../components/homepage/user.vue')
        }
        
    ]
})

export default router
