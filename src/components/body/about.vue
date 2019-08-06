<template>
  <div class="post">
    <div class="post-header">
      <div class="title">
        <a href="#">
          <h3>我</h3>
        </a>
      </div>
      <div class="meta">
        <span># &nbsp 1024次阅读</span>
        <span># &nbsp 2019-8-6 &nbsp 17:20</span>
      </div>
    </div>
    <div class="post-body">
      <div class="post-content">
        <hr />
        <div class="pic"></div>
        <hr />
        <h2>关于我</h2>
        <h2>博客历程</h2>
        <h2>联系方式</h2>
      </div>
      <div class="post-other"></div>
      <div class="post-update"></div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.post {
  width: 50%;
  height: 700px;
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
    margin: 20px 0 10px;
}
</style>
