<template>
  <div>
    <blogSideHeader :hash="hash"></blogSideHeader>
    <div class="friends">
      <h1>404 no found</h1>
      <h1>组件过情人节未归</h1>
    </div>
  </div>
</template>
<script>
import blogSideHeader from "../blogSideHeader.vue";

export default {
  components: {
    blogSideHeader
  },
  props:[
    'hash'
  ],
};
</script>
<style scoped>
.friends {
  width: 300px;
  height: 600px;
  margin: 0 auto;
}
</style>
