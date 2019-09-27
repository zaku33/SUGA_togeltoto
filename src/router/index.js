/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'

// Components
import HomePage from '@/components/HomePage'
import Register from '@/components/Register'
import HowToPlay from '@/components/HowToPlay'
import Referral from '@/components/Referral'
import About from '@/components/About'
import Android from '@/components/Android'
import Solution from '@/components/Solution'



Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: 'home'
        },
        {
            path: '/home',
            name: 'homepage',
            component: HomePage
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/howToPlay',
            name: 'howToPlay',
            component: HowToPlay
        },
        {
            path: '/referral',
            name: 'referral',
            component: Referral
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/android',
            name: 'android',
            component: Android
        },
        {
            path: '/solution',
            name: 'solution',
            component: Solution
        }
    ]
})