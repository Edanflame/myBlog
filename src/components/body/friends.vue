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
          <!-- github版本 -->
          <audio src="./dist/music1.mp3" id="myMusic"></audio>
          <!-- 本地服务器版本 -->
          <!-- <audio src="../../mp3/music1.mp3" id="myMusic"></audio> -->
          <div class="myPlayer">
            <div class="myPlayerPic" @click="playTheMusic($event)">
              <img src="../../images/cat-return.jpg" alt />
              <span class="glyphicon glyphicon-play-circle" v-show="iconDisplay"></span>
              <span class="glyphicon glyphicon-pause" v-show="!iconDisplay"></span>
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
                  <div class="myPlayerControllBarPlayed" 
                    :style="{width:currentWidth}">
                    <span class="thumb"></span>
                  </div>
                </div>
                <div class="time" style>{{ currentTime }}/{{ totleTime }}</div>
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
import { clearInterval, setInterval } from 'timers';

// const sounds = require("../../mp3/music1.mp3")
// require("file-loader!../../mp3/music1.mp3")
// var music = document.getElementById("myMusic");

export default {
  data: function() {
    return {
      currentTime: "00:00",
      totleTime: "00:00",
      musicDuration: 0,
      musicCurrentTime: 12,
      iconDisplay: true,
      currentWidth: '50%'
    };
  },

  watch:{

  },

  components: {
    blogHeader
  },

  methods: {
    //显示当前时间
    curtime() {
      if (this.musicCurrentTime < 10) {
        this.currentTime = "0:0" + Math.floor(this.musicCurrentTime);
      } else if (this.musicCurrentTime < 60) {
        this.currentTime = "0:" + Math.floor(this.musicCurrentTime);
      } else {
        var minute = parseInt(this.musicCurrentTime / 60);
        var second = parseInt(this.musicCurrentTime % 60);
        if (second < 10) {
          this.currentTime = minute + ":0" + second;
        } else {
          this.currentTime = minute + ":" + second;
        }
      }
    },

    //显示总时间
    findTotleTime() {
      if (this.musicDuration < 10) {
        this.totleTime = "0:0" + Math.floor(this.musicDuration);
      } else if (this.musicDuration < 60) {
        this.totleTime = "0:" + Math.floor(this.musicDuration);
      } else {
        let minute = parseInt(this.musicDuration / 60);
        let second = parseInt(this.musicDuration % 60);
        if (second < 10) {
          this.totleTime = minute + ":0" + second;
        } else {
          this.totleTime = minute + ":" + second;
        }
      }
    },

    //播放音乐
    playTheMusic(e) {

      let music =  e.currentTarget.parentElement.previousElementSibling;

      let timer;

      //在控制台显示总时间，方便检查维护，项目完成后删除
      console.log(music.duration);

      //读取导入歌曲的总时长，把值赋给musicDuration
      this.musicDuration = parseInt(music.duration);
      
      //使用findTotleTime函数，对显示的总时长进行格式修改
      this.findTotleTime();


      //播放按钮变化：播放按钮和停止按钮轮流显示
      this.iconDisplay = !this.iconDisplay;


      //判断音乐播放状态，做出相应动作
      if(music.paused){
        this.currentWidth = "10%";
        music.play();//播放音乐
        clearInterval(timer);//清除定时器
        timer = setInterval(()=>{
          // this.currentWidth = parseInt((music.currentTime)*100 /(music.duration)) + "%";
          // console.log("123")
          // console.log(currentWidth);
          this.musicCurrentTime = music.currentTime;
          this.curtime();
          this.currentWidth = "30%"
          // this.curtime();
        },1000)
        this.currentWidth = "30%"


      }else{
        music.pause();
      }

      //进度条和时间开始变化
    }
  },

  mounted() {
    // this.findTotleTime();
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
  z-index: 1;
  position: absolute;
}

.myPlayerPic:hover {
  cursor: pointer;
}

.myPlayerInf {
  height: 80px;
  width: 630px;
  /* background-color: #0f0; */
  margin: 10px 25px 0;
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
  width: 10%;
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

.glyphicon-play-circle {
  color: yellow;
  font-size: 30px;
  position: relative;
  left: 33px;
  top: 30px;
  z-index: 2;
}

.glyphicon-pause {
  color: red;
  position: absolute;
  left: 70px;
  top: 70px;
  z-index: 2; 
}
</style>
