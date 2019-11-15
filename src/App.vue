<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.van-nav-bar {
  background-color: #feec2a;
}
.van-nav-bar__text {
  color: black;
}
.van-tab {
  background-color: #feec2a;
  color: black;
}
.van-tabs__line {
  background-color: #423d3d91;
  /* width: 54px !important; */
  /* left: 64px; */
  display: none;
}
.van-tabs__nav :first-child > span {
  text-align: right;
  margin-right: 10px;
}
.van-tab--active {
  border-bottom: 1px solid black;
}
.van-tabs__nav :nth-child(2) > span {
  text-align: left;
  margin-left: 10px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;
}
</style>
