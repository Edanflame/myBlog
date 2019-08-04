<template>
  <div>
    <blogNav></blogNav>
    <blogHeader></blogHeader>
    <blogBody></blogBody>
    <blogGo></blogGo>
    <blogFooter></blogFooter>
  </div>
</template>

<script>
import blogNav from "../components/blogNav.vue";
import blogHeader from "../components/blogHeader.vue";
import blogBody from "../components/blogBody.vue";
import blogGo from "../components/blogGO.vue";
import blogFooter from "../components/blogFooter.vue";
export default {
  components: {
    blogNav,
    blogHeader,
    blogBody,
    blogGo,
    blogFooter
  }
};
</script>

<style>
</style>
