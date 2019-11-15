<template>
  <div>
    <div>
      <router-view></router-view>
    </div>
    <div>
      <van-tabbar v-model="active" style="z-index: 1999">
        <van-tabbar-item
          v-for="(tab, index) in tabbar"
          :to="tab.path"
          :dot="tab.dot"
          :info="tab.info"
          :key="index"
          :class="tab.class"
        >{{tab.name}}</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'
export default {
  name: 'home',
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data () {
    return {
      active: 0,
      tabbar: [
        {
          name: '详情',
          path: '/accountDetails',
          pathName: 'accountDetails',
          icon: 'records',
          dot: false,
          info: '',
          class: 'iconfont iconxianjinmingxi'
        },
        {
          name: '图表',
          path: '/pragh',
          pathName: 'pragh',
          icon: 'records',
          dot: false,
          info: '',
          class: 'iconfont iconChart'
        },
        {
          name: '记账',
          path: '/add',
          pathName: 'add',
          icon: 'records',
          dot: false,
          info: '',
          class: 'iconfont iconjia'
        },
        {
          name: '社区',
          path: '/community',
          pathName: 'community',
          icon: 'records',
          dot: false,
          info: '',
          class: 'iconfont icondibudaohanglan-'
        },
        {
          name: '我的',
          path: '/mine',
          pathName: 'mine',
          icon: 'records',
          dot: false,
          class: 'iconfont iconwode'
        }
      ]
    }
  },
  watch: {
    '$route': 'changeActive'
  },
  methods: {
    changeActive ({ name }) {
      this.setActive(name)
    },
    setActive (name) {
      this.tabbar.forEach((tab, i) => {
        if (tab.pathName === name) {
          this.active = i
          return false
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.iconfont {
  font-size: 13px;
}
.van-tabbar-item__text {
  font-size: 14px;
}
.van-tabbar-item--active {
  // font-size: 30px
  color: #feec2a;
}
.iconxianjinmingxi:before,
.iconChart:before,
.icondibudaohanglan-:before,
.iconwode:before {
  font-size: 25px;
}
.iconjia:before {
  font-size: 45px;
  background-color: #333;
  color: #feec2a;
  border-radius: 25px;
  margin-top: -17px;
}
</style>
