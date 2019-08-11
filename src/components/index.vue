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
import blogGo from "../components/blogGo.vue";
import blogFooter from "../components/blogFooter.vue";
import router from "../js/router.js"


export default {
  data:function(){
    return {
    
    }
  },
  components: {
    blogNav,
    blogGo,
    blogFooter
  }
};

</script>

<style>


</style>
