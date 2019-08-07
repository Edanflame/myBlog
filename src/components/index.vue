<template>
  <div id="app">
    <blogNav @changedHash="changeHash"></blogNav>
    <router-view :hash="hash"></router-view>
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





export default {
  data:function(){
    return {
      hash:"home"
    }
  },methods:{
    changeHash(hash){
      this.hash = hash
    }
  },
  components: {
    blogNav,
    blogHeader,
    blogGo,
    blogFooter
  },
  mounted(){
    // router.afterEach((to,from)=>{
    //   console.log(to.path.substr(1));
    //   console.log(from.path.substr(1));
    // })
  }
};

</script>

<style>


</style>
