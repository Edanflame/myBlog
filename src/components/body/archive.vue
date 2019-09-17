<template>
  <div>
    <blogHeader></blogHeader>
    <div class="archive">
      <div class="timeline">2019 年 9月</div>
      <div class="line"></div>
      <div class="box" v-for="item in list" :key="item.id">
        <div class="time">{{ item.time }} 日</div>
        <div class="hole">
          <div class="centerHole"></div>
        </div>
        <div class="content">{{ item.content }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import blogHeader from "../headers/blogHeaderArchive.vue";


export default {
  components: {
    blogHeader
  },
  data:function(){
    return{
      list:[
        {id:1,time:12,content:'初步添加音乐'},
        {id:1,time:17,content:'初步完成页面'}
      ]
    }
  }
  
};
</script>
<style scoped>
.archive {
  width: 56%;
  background-color: #f2f2f2;
  margin: 50px auto;
  padding: 15px;
  border-radius: 12px;
  position: relative;
  /* height: 500px; */
  display: flex;
  flex-direction: column;
}

.line {
  height: 100%;
  width: 4px;
  position: absolute;
  left: 86px;
  top:0px;
  background-color: #dcdcdc;
  z-index: 3;
}

.timeline {
  height: 32px;
  line-height: 32px;
  background-color: #6f6f6f;
  border-radius: 20px;
  width: 126px;
  font-size: 19px;
  color: #fff;
  padding:0 10px;
  position: relative;
  left: 10px;
  z-index: 7;
}

.box {
  height: 32px;
  width: 100%;
  /* background-color: #000; */
  display: flex;
  position: relative;
  z-index: 3;
}

.time {
  line-height: 32px;
  font-size: 14px;
  color: #333;
  position: relative;
  left: 15px;
}

.hole {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: #8a8a8a;
  line-height: 20px;
  text-align: center;
  color: #fff;
  position: absolute;
  top: 6px;
  left: 64px;
  /* z-index: 2; */
}

.centerHole {
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background-color: #f2f2f2;
  position: relative;
  left: 4px;
  top: 4px;


}

.content {
  line-height: 32px;
  font-size: 15.2px;
  color: #333;
  position: relative;
  left: 90px;
}

</style>
