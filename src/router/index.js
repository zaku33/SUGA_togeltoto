/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'

// Components

//public pages
import HomePage from '@/components/HomePage'
import Register from '@/components/Register'
import HowToPlay from '@/components/HowToPlay'
import Referral from '@/components/Referral'
import About from '@/components/About'
import Android from '@/components/Android'
import Solution from '@/components/Solution'

//loggin required
import SportBook from '@/components/SportBook'
import BetList from '@/components/BetList'
import Transaction from '@/components/Transaction'
import ChangePassword from '@/components/ChangePassword'

//except page
import NotFoundPage from '@/components/NotFoundPage'

Vue.use(Router)
const router = new Router({
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
        },
        {
            path: '/sportBook',
            name: 'sportBook',
            component: SportBook
        },
        {
            path: '/betList',
            name: 'betList',
            component: BetList
        },
        {
            path: '/transaction',
            name: 'transaction',
            component: Transaction
        },
        {
            path: '/changePassword',
            name: 'changePassword',
            component: ChangePassword
        },
        {
            path: '*',
            component: NotFoundPage
        }
    ]
})
router.beforeEach((to, from, next) => {

    const requireLogin = ['/sportbook', '/betlist', '/transaction', '/changePassword'];
    const publicPage = !requireLogin.includes(to.path);
    const loggedIn = localStorage.getItem('access_token');
    if (publicPage == false && !loggedIn) {
        alert('Please Login first')
        return next('/');
    }
    next();
})
export default router;