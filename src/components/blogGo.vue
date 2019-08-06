<template>
  <div class="go-top" @click="scrollReturnTop">
    <img src="../images/goTop.png" width="100%" height="100%" style="cursor: pointer" />
  </div>
</template>

<script>
export default {
  methods: {
    scrollReturnTop() {
      let scrollInterval = setInterval(function() {
        if (!document.documentElement.scrollTop) {
          return clearInterval(scrollInterval);
        }
        document.documentElement.scrollTop =
          document.documentElement.scrollTop - 10;
      }, 10);
    }
  }
};
</script>

<style>
.go-top {
  width: 50px;
  height: 50px;
  position: fixed;
  right: 30px;
  bottom: 100px;
}
</style>
