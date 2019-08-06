<template>
  <div id="app">
    <blogNav></blogNav>
    <blogHeader></blogHeader>
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

export default {
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
