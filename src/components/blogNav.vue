<template>
  <div class="nav-menu" id="123">
    <div class="nav-left" style="font-family: gloria">Edanflameの日常</div>
    <div class="nav-right">
      <ul>
        <li>
          <router-link to="/">
            <span class="glyphicon glyphicon-home" aria-hidden="true"></span>
            <i></i>
            主页
          </router-link>
        </li>
        <li>
          <router-link to="/archive">
            <span class="glyphicon glyphicon-send" aria-hidden="true"></span>
            <i>归档</i>
          </router-link>
        </li>
        <li>
          <router-link to="/gustbook">
            <span class="glyphicon glyphicon-tags" aria-hidden="true"></span>
            <i>留言</i>
          </router-link>
        </li>
        <li>
          <router-link to="/friends">
            <span class="glyphicon glyphicon-paperclip" aria-hidden="true"></span>
            <i>友人帐</i>
          </router-link>
        </li>
        <li>
          <router-link to="/about">
            <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            <i>我</i>
          </router-link>
        </li>
        <li>
          <router-link to="search">
            <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.nav-menu {
  height: 64px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  position: fixed;
  z-index: 110;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
}

.nav-menu:hover {
  background-color: rgba(255, 255, 255, 1);
}

.nav-left {
  height: 100%;
  width: 170px;
  text-align: center;
  font-size: 20px;
  line-height: 64px;
  margin: 0 0 0 10px;
}

.nav-right {
  margin: 0 5px;
}

.nav-right > ul {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  margin: 20px 0;
  padding: 0 0 0 40px;
}

.nav-right > ul > li {
  width: 70px;
  margin: 0 10px;
}

.nav-right > ul > li:nth-child(4) {
  width: 90px;
}

.nav-right > ul > li:nth-child(5) {
  width: 50px;
}

.nav-right > ul > li:nth-child(6) {
  width: 20px;
}

.nav-right > ul > li > a > i {
  font-style: normal;
}
</style>


