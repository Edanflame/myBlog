<template>
    <div class="header animated fadeInDown slideInDown">
      <div class="site-meta">
        <h1 class="site-name" style="font-family: gloria">Edanflameの日常</h1>
        <h2 class="site-description" style="font-family: gloria">life is what you make it</h2>
      </div>
    </div>
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
.header {
  height: 789px;
  width: 100%;
  background: url(../images/topic/topic1.jpg) no-repeat;
  background-size: 100% auto;
  overflow: hidden;
  position: relative;
  background-position: 50% 50%;
}

.site-meta {
  width: 100%;
  position: absolute;
  z-index: 100;
  text-align: center;
  top: 50%;
  transform: translate(0, -50%);
  color: #fff;
  padding: 30px 10px;
}

.site-name {
  width: 100%;
  height: 92px;
  margin: 5px 0 7px;
  font-size: 5rem;
  font-weight: 300;
  text-shadow: 0 0 5px #c3c3c3;
}

.site-description {
  width: 100%;
  height: 27px;
  font-size: 24px;
  text-shadow: 0 0 5px #c3c3c3;
}
</style>
