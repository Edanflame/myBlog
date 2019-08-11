<template>
  <div>
    <blogHeader></blogHeader>
    <div class="post">
      <div class="post-header">
        <div class="title">
          <a href="#">
            <h3>留言</h3>
          </a>
        </div>
        <div class="meta">
          <span># 1024次阅读</span>
          <span># 2019-8-6 17:20</span>
        </div>
      </div>
      <div class="post-body">
        <div class="post-content">
          <hr />
          <div class="pic"></div>
          <hr />
          <h4>留言和吐槽</h4>
        </div>
        <div class="post-other"></div>
        <div class="post-update">最后一次更新于2019-8-6</div>
      </div>
    </div>
  </div>
</template>
<script>
import blogHeader from "../headers/blogHeaderGustbook.vue";

export default {
  components: {
    blogHeader
  }
};
</script>
<style scoped>
.post {
  width: 50%;
  background-color: #fff;
  margin: 50px auto;
  padding: 15px;
}

.post-header {
  width: 100%;
  height: 64px;
}

.title {
  margin: 20px auto;
  text-align: center;
  font-size: 24px;
  font-style: initial;
}

.meta {
  margin: 0 auto;
  text-align: center;
  font-size: 15px;
}

.post-body {
  width: 100%;
  border-top: #ddd dashed 1px;
  border-bottom: #ddd dashed 1px;
  margin: 25px 0 0;
  padding: 20px 0;
}

hr {
  width: 80%;
  height: 3px;
  background-color: #ddd;
  margin: 40px auto;
  background-image: repeating-linear-gradient(
    -45deg,
    #fff,
    #fff 4px,
    transparent 4px,
    transparent 8px
  );
  border: none;
}

.pic {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 10px auto;
}

.pic:hover {
  box-shadow: 0 0 6px #8a8a8a;
}

h2 {
  font-size: 22px;
  padding-left: 5px;
  margin: 20px 0 10px;
  border-left: #000 solid 4px;
}

li {
  font-size: 16px;
}

.post-other {
  height: 200px;
}

.post-update {
  height: 39px;
  padding: 10px 0;
  text-align: right;
}
</style>
