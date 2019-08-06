<template>
  <div id="app">
    <blogNav></blogNav>
    <router-view></router-view>
    <blogGo></blogGo>
    <blogFooter></blogFooter>
  </div>
</template>

<script>
import blogNav from "../components/blogNav.vue";
import blogHeader from "../components/blogHeader.vue";
import blogGo from "../components/blogGo.vue";
import blogFooter from "../components/blogFooter.vue";
import router from "../js/router.js"

router.beforeEach((to,from,next)=>{
    console.log(to.path.substr(1));
    console.log(from.path.substr(1));
    next();
})

export default {
  data:function(){
    return {
        
    }
  },methods:{

  },
  components: {
    blogNav,
    blogHeader,
    blogGo,
    blogFooter
  }
};
</script>

<style>


</style>
