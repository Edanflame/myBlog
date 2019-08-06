import VueRouter from 'vue-router'

import home from "../components/body/home.vue";

import archive from "../components/body/archive.vue";

import gustbook from "../components/body/gustbook.vue";

import friends from "../components/body/friends.vue";

import about from "../components/body/about.vue";


const router = new VueRouter({
    routes:[
        // { path:'/', redirect:'/' },
        { path:'/', component: home },
        { path:'/archive', component: archive },
        { path:'/gustbook', component: gustbook },
        { path:'/friends', component: friends },
        { path:'/about', component: about }
    ]
})



export default router