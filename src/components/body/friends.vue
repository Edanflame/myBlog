<template>
  <div>
    <blogHeader></blogHeader>
    <div class="friends">
      <div class="post-header">
        <div class="title">
          <a href="#">
            <h3>友人帐</h3>
          </a>
        </div>
        <div class="meta">
          <span># 1024次阅读</span>
          <span># 2019-8-6 17:20</span>
        </div>
      </div>
      <div class="post-body">
        <div>
          <audio src id="myMusic"></audio>
      <div class="myPlayer">
        <div class="myPlayerPic">
          <img src="../../images/cat-return.jpg" alt />
        </div>
        <div class="myPlayerInf">
          <div class="myPlayerDetail">
            <p>幻化成风</p>
          </div>
          <div class="myPlayerList">
            <p>风（かぜ）になる</p>
            <p>忘（わす）れていた目（め）を闭（と）じて</p>
            <p>取（と）りもどせ恋（こい）の歌（うた）</p>
            <p>青空（あおぞら）に隠（かく）れている</p>
            <p>手（て）を伸（の）ばしてもう一度（いちど）</p>
            <p>忘（わす）れないですぐそばに</p>
            <p>ぼくがいるいつの日（ひ）も</p>
            <p>星空（ほしぞら）を眺（なが）めている</p>
            <p>一人（ひとり）きりの夜明（よあ）けも</p>
          </div>
          <div class="myPlayerControll">
            <div class="myPlayerControllBar">
              <div class="myPlayerControllBarLoaded"></div>
              <div class="myPlayerControllBarPlayed">
                <span class="thumb"></span>
              </div>
            </div>
            <div class="time" style="">00:00/07:51</div>
          </div>
        </div>
      </div>
        </div>
        <div class="post-content">
          <hr />
          <div class="pic"></div>
          <hr />
        </div>
        <div class="post-other"></div>
        <div class="post-update">最后一次更新于2019-8-6</div>
      </div>
    </div>
  </div>
</template>
<script>
import blogHeader from "../headers/blogHeaderFriends.vue";

export default {
  components: {
    blogHeader
  }
};
</script>
<style scoped>
.friends {
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

/* .friends {
  width: 300px;
  height: 600px;
  margin: 0 auto;
} */

.myPlayer {
  height: 90px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.07), 0 1px 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  display: flex;
  overflow: hidden;
  position: relative;
}

.myPlayerPic {
  height: 90px;
  width: 90px;
  border-radius: 2px;
  overflow: hidden;
}

img {
  height: 90px;
  width: 90px;
}

.myPlayerInf {
  height: 80px;
  width: 630px;
  /* background-color: #0f0; */
  margin: 10px 7px 0;
}

.myPlayerControll {
  height: 10px;
  width: 1000px;
  /* background-color: #f00; */
  position: absolute;
  left: 100px;
  top: 75px;
  display: flex;
}

.myPlayerControllBar {
  height: 2px;
  width: 500px;
  background-color: #fff;
  position: absolute;
  margin: 4px;
  box-shadow: 0px 0px 10px 10px rgba(255, 255, 255, 0.9);
}

.myPlayerControllBarLoaded {
  height: 100%;
  width: 100%;
  background-color: #aaa;
}

.myPlayerControllBarPlayed {
  height: 100%;
  width: 30%;
  background-color: rgb(173, 122, 134);
  position: relative;
  top: -2px;
}

.thumb {
  width: 0;
  height: 0;
}

.time {
  position: relative;
  top: 2px;
  left: 510px;
  line-height: 3px;
  font-size: 3px;
  color: #aaa;
}
</style>
