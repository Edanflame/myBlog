import Vue from '../../node_modules/vue/dist/vue.js'

import index from '../components/index.vue'

import animate from 'animate.css'

console.log('this is main.js')

const vm = new Vue({
    el:'#app',
    data:{
        message:'组件使用失败'
    },
    render: c=>c(index)
})