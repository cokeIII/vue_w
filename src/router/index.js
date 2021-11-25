import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home.vue'
import w1 from '../components/w1.vue'
import w2 from '../components/w2.vue'
import w3 from '../components/w3.vue'
import multi from '../components/multi.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    // {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () =>
    //         import ( /* webpackChunkName: "about" */ '../views/About.vue')
    // },
    {
        path: '/w1',
        name: 'w1',
        component: w1
    },
    {
        path: '/w2',
        name: 'w2',
        component: w2
    },
    {
        path: '/w3',
        name: 'w3',
        component: w3
    },
    {
        path: '/multi',
        name: 'multi',
        component: multi
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router