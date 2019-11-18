<template>
  <div class="addpage">
    <!-- <van-nav-bar title="标题" right-text="返回" left-arrow @click-right="onClickRight" /> -->
    <van-tabs @click="onClick">
      <van-tab title="支出" class="outlay">
        <div class="wrap">
          <div class="iconlist" v-for="(item,index) in iconList" :key="index">
            <div :class="item.className" @click="openCalculator(item)"></div>
            <div class="iconName">{{item.iconName}}</div>
          </div>
        </div>
      </van-tab>
      <van-tab title="收入" class="income">内容 2</van-tab>
      <van-button class="cancel" @click="cancel">取 消</van-button>
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
      iconList: [
        { className: 'iconfont iconjiaotong', iconName: '交通' },
        { className: 'iconfont iconchongwufushi', iconName: '服饰' },
        { className: 'iconfont iconshuiguo', iconName: '水果' },
        { className: 'iconfont iconhua', iconName: '花' },
        { className: 'iconfont iconhuazhuangpin', iconName: '化妆品' },
        { className: 'iconfont iconhuazhuangpin', iconName: '蔬菜' },
        { className: 'iconfont iconshezhi-', iconName: '设置' }
      ]
    }
  },
  methods: {
    onClick (name, title) {
      this.$toast(title)
    },
    cancel () {
      // this.$router.go(-1)
      this.$router.push({ path: '/accountDetails' })
    },
    openCalculator (item) {
      console.log('打开计算器', item)
      if (item.iconName === '设置') {
        console.log('设置')
        this.$router.push({ path: '/setting' })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.cancel {
  position: absolute;
  top: -1px;
  right: 10px;
  background-color: #feec2a;
  border: none;
  color: black;
}
.wrap {
  padding: 10px 0 10px 0;
  display: flex;
  flex-wrap: wrap;
  .iconlist {
    margin: 9px 16px 32px 26px;
    background-color: #e5e5e8;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    position: relative;
    .iconfont {
      font-size: 36px;
      width: 36px;
      height: 36px;
      position: absolute;
      top: 5px;
      left: 7px;
    }
    .iconName {
      margin-top: 53px;
      font-size: 16px;
    }
  }
}
</style>
