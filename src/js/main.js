import Vue from 'vue'

import index from '../components/index.vue'

import animate from 'animate.css'

import 'bootstrap/dist/css/bootstrap.css'

import '../css/main.css'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import router from "./router.js"



const vm = new Vue({
    el:'#app',
    data:{
        message:'组件使用失败'
    },
    render: function (createElements) {
        return createElements(index)
    },
    router
    
    
})
