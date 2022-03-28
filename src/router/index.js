import { createRouter, createWebHistory } from 'vue-router'
import About from '../pages/about/index.vue'
import User from '../pages/user/index.vue'

const routes = [
    { path: '/About', component: About },
    {
        path: '/User',
        component: User
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;