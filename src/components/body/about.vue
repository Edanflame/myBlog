<template>
  <div>
    <blogHeader></blogHeader>
    <div class="post">
      <div class="post-header">
        <div class="title">
          <a href="#">
            <h3>我</h3>
          </a>
        </div>
        <div class="meta">
          <span># 1024次阅读</span>
          <span># 2019-9-12 17:20</span>
        </div>
      </div>
      <div class="post-body">
        <div class="post-content">
          <hr />
          <div class="pic">
            <img src="../../images/pic/pic1.jpg" alt="" style="height:150px;width:150px">
          </div>
          <hr />
          <h2>关于我</h2>
          <ul>
            <li>上海在职研究生</li>
            <li>在前端的技术海洋中遨游，勉强没有被淹死</li>
            <li>闲来喜欢练练吉他，还没被邻居举报ing</li>
            <li>总觉得时间不够</li>
          </ul>
          <h2>博客历程</h2>
          <ul>
            <li>2019年7月初打算捣鼓自己的博客，初次在阿里云上注册了免费的服务器</li>
            <li>2019年8月6日第一次把初步自己完成的静态页面发送到了服务器</li>
            <li>2019年9月12日初步完成网页中的歌曲播放器，并为其添加一首歌曲</li>
          </ul>
          <h2>联系方式</h2>
          <ul>
            <li>Email:237397488@qq.com</li>
            <li>Github:https://github.com/Edanflame</li>
          </ul>
        </div>
        <div class="post-other"></div>
        <div class="post-update">最后一次更新于2019-9-12</div>
      </div>
    </div>
  </div>
</template>

<script>
import blogHeader from "../headers/blogHeaderAbout.vue";

export default {
  data:function(){
    return {

    }
  },
  components: {
    blogHeader
  },
  mounted(){
  }
};
</script>

<style scoped>
.post {
  width: 56%;
  background-color: #fff;
  margin: 50px auto;
  padding: 15px;
  border-radius: 12px;
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
  overflow: hidden;
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

ul {
  list-style: circle;
}
</style>
