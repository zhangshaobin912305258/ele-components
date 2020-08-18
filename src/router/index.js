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
        path: '/backtop1',
        name: 'Backtop1',
        component: () => import('../components/BackTop1')
    },
    {
        path: '/backtop2',
        name: 'Backtop2',
        component: () => import('../components/BackTop2')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
