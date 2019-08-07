<template>
  <div class="sideHeader animated fadeInDown slideInDown"
    :style="style"
  ></div>
</template>

<script>
export default {
  data:function(){
    return {
      style: {
          "height": "552px",
          "width": "100%",
          "background": `url(../images/topic/${this.hash}.jpg) no-repeat`,
          "background-size": "100% auto",
          "overflow": "hidden",
          "position": "relative",
          "background-position": "50% 50%"
      }
      //根据传来的路由地址，从topic文件夹中找到相对应得图片，放在sideHeader中
    }
  },
  mounted() {
    // window.addEventListener("hash", this.handleHash);
    console.log("启用副标题")
    console.log(this.hash)
    console.log(this.backgroundImge)

  },
  methods:{
    // handleHash(){
    //   console.log("123");
    // }
  },
  props:[
    'hash'
  ]
};
</script>

<style scoped>
.sideHeader {
  height: 552px;
  width: 100%;
  background: no-repeat;
  background-size: 100% auto;
  overflow: hidden;
  position: relative;
  background-position: 50% 50%;
}
</style>
