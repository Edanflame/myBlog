<template>
  <div>
    <blogHeader :hash="hash"></blogHeader>
    <div class="body">
      <div class="box">
        <div class="card">
          <div class="card_title">
            <a href="#">第一篇</a>
          </div>
          <div class="card_time">2019年7月30日</div>
          <div class="card_background"></div>
          <div class="card_body">文章简单介绍</div>
          <hr />
          <div class="card_bottom"></div>
        </div>
        <div class="card">
          <div class="card_title">
            <a href="#">第二篇</a>
          </div>
          <div class="card_time">2019年7月30日</div>
          <div class="card_background"></div>
          <div class="card_body">文章简单介绍</div>
          <hr />
          <div class="card_bottom"></div>
        </div>
        <div class="card">
          <div class="card_title">
            <a href="#">第三篇</a>
          </div>
          <div class="card_time">2019年7月30日</div>
          <div class="card_background"></div>
          <div class="card_body">文章简单介绍</div>
          <hr />
          <div class="card_bottom"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import blogHeader from "../blogHeader.vue";

export default {
  components: {
    blogHeader
  },
  props:[
    "hash"
  ],
  mounted(){
   
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #333;
  font-size: 20px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
}

a:hover {
  text-decoration: none;
  color: #333;
}

.box {
  margin: 0 auto;
  width: 50%;
}

.card {
  width: 100%;
  height: 455px;
  margin: 50px auto;
  padding: 15px;
  background: #fff;
  position: relative;
  border-radius: 10px;
  color: #444;
}

.card:hover {
  box-shadow: 0 0 6px #8a8a8a;
}

.card_title {
  width: 100%;
  height: 28px;
  background-color: #fff;
  font-size: 20px;
}

.card_time {
  width: 100%;
  height: 14px;
  /* background-color: #f0f; */
  margin: 10px 0;
  font-size: 13px;
}

.card_background {
  width: 100%;
  height: 320px;
  background-color: #ff0;
  margin: 10px 0;
  background: url(../../images/blog/blog1.jpg);
  background-size: 100% auto;
}

.card_body {
  width: 100%;
  height: 20px;
  /* background-color: #0ff; */
  margin: 0 0 10px;
}

.card_bottom {
  width: 100%;
  height: 20px;
  /* background-color: #00f; */
}
</style>
