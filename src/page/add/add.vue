<template>
  <div>
    <van-nav-bar title="标题" right-text="返回" left-arrow @click-right="onClickRight" />
    <van-tabs @click="onClick">
      <van-tab title="支出">内容 1</van-tab>
      <van-tab title="收入">内容 2</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Tab, Tabs } from 'vant'
export default {
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },
  name: 'add',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    onClick (name, title) {
      this.$toast(title)
    },
    onClickRight () {
      this.$router.go(-1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
