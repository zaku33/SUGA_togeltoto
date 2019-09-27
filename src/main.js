// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueCarousel from '@chenfengyuan/vue-carousel'
import Vuetify from 'vuetify'
import ElementUI from 'element-ui';


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'mdbvue/build/css/mdb.css'
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(BootstrapVue)
Vue.use(VueCarousel)
Vue.use(Vuetify)
Vue.use(ElementUI)



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})