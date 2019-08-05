import Vue from 'vue'

import index from '../components/index.vue'

import animate from 'animate.css'

import 'bootstrap/dist/css/bootstrap.css'

import '../css/main.css'



console.log('this is main.js')

const vm = new Vue({
    el:'#app',
    data:{
        message:'组件使用失败'
    },
    render: function (createElements) {
        return createElements(index)
    }
})