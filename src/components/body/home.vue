<template>
  <div>
    <blogHeader></blogHeader>
    <div class="body">
      <div class="box">
        <div class="card" v-for="item in list" :key="item.id">
          <div class="card_title">
            <a href="#">{{ item.title }}</a>
          </div>
          <div class="card_time">{{ item.time }}</div>
          <div
            class="card_background"
            v-bind:style="{backgroundImage:'url(' + item.imges + ')',
          backgroundRepeat:'no-repeat',
          backgroundPosition:'center center',
          backgroundSize:'cover'}"
          ></div>
          <div class="card_body">{{ item.content }}</div>
          <hr />
          <div class="card_bottom"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import blogHeader from "../headers/blogHeaderHome.vue";

export default {
  components: {
    blogHeader
  },
  data: function() {
    return {
      list: [
        {
          id: 3,
          title: "杰伦发新歌了",
          time: "2019年9月17日",
          imges: "../../images/blog/blog4.jpg",
          content: "前几天就说听说杰伦要发新歌了，今天看了mv，嗯嗯，还是原来的味道"
        },
        {
          id: 2,
          title: "同济懒猫",
          time: "2019年9月15日",
          imges: "../../images/blog/blog3.jpg",
          content: "早上去彰武校区上英语课的时候，这只橘猫霸占着椅子谁懒觉，真是惬意"
        },
        {
          id: 1,
          title: "新的开始",
          time: "2019年7月30日",
          imges: "../../images/blog/blog1.jpg",
          content: "开始了静态小网站的实践"
        },
      ]
    };
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
  width: 56%;
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
  overflow: hidden;
}

.card_background img {
  width: 100%;
  position: relative;
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
