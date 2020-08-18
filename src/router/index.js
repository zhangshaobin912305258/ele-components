import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/backTop1',
        name: 'BackTop1',
        component: () => import('../components/BackTop1')
    },
    {
        path: '/backTop2',
        name: 'BackTop2',
        component: () => import('../components/BackTop2')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
