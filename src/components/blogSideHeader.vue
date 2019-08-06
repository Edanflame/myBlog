<template>
  <div class="sideHeader animated fadeInDown slideInDown"></div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener("hash", this.handleHash);
  },
  methods:{
    handleHash(){
      console.log("123");
    }
  }
};
</script>

<style scoped>
.sideHeader {
  height: 552px;
  width: 100%;
  background: url(../images/topic/about.jpg) no-repeat;
  background-size: 100% auto;
  overflow: hidden;
  position: relative;
  background-position: 50% 50%;
}
</style>
