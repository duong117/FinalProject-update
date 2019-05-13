import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

import VueRouter from 'vue-router'
import router from './router'

import ClientAPIService from '@/services/ClientServices'

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.prototype.$client_api=ClientAPIService

Vue.use(VueRouter)

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
