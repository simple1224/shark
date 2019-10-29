<template>
  <div>
    <div>
      <router-view></router-view>
    </div>
    <div>
      <van-tabbar v-model="active" style="z-index: 1999">
        <van-tabbar-item
          v-for="(tab, index) in tabbar"
          :icon="tab.icon"
          :to="tab.path"
          :dot="tab.dot"
          :info="tab.info"
          :key="index"
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
          info: ''
        },
        {
          name: '图表',
          path: '/pragh',
          pathName: 'pragh',
          icon: 'records',
          dot: false,
          info: ''
        },
        {
          name: '记账',
          path: '/add',
          pathName: 'add',
          icon: 'records',
          dot: false,
          info: ''
        },
        {
          name: '社区',
          path: '/community',
          pathName: 'community',
          icon: 'records',
          dot: false,
          info: ''
        },
        {
          name: '我的',
          path: '/mine',
          pathName: 'mine',
          icon: 'records',
          dot: true,
          info: '4'
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
<style scoped>
</style>
