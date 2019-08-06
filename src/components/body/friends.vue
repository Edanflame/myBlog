<template>
  <div>
    <blogSideHeader></blogSideHeader>
    <div class="friends">
      <h1>404 no found</h1>
      <h1>请重新启动</h1>
    </div>
  </div>
</template>
<script>
import blogSideHeader from "../blogSideHeader.vue";

export default {
  components: {
    blogSideHeader
  }
};
</script>
<style scoped>
.friends {
  width: 300px;
  height: 600px;
  margin: 0 auto;
}
</style>
