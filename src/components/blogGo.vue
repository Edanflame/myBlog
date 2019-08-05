<template>
  <div class="go-top" @click="scrollReturnTop">
    <img src="../images/goTop.png" width="100%" height="100%" style="cursor: pointer" />
  </div>
</template>

<script>
export default {
  methods:{
    scrollReturnTop () {
      document.documentElement.scrollTop = 0;
    }
  }
};
</script>

<style>

</style>
