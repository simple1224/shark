<template>
  <div class="login">
    <h1>记账app</h1>
    <van-cell-group>
      <van-field clearable label="用户名：" v-model="userName" placeholder="请输入用户名" />
      <van-field clearable label="密码：" type="password" v-model="userPass" placeholder="请输入密码" />
      <van-button plain type="info" @click="open">登录</van-button>
    </van-cell-group>
    <!-- <van-button plain type="primary">注册</van-button> -->
  </div>
</template>

<script>
import { Field } from 'vant'
export default {
  name: 'logib',
  components: {
    Field
  },
  data () {
    return {
      userName: '',
      userPass: ''
    }
  },
  methods: {
    open () {
      this.$router.push({ path: '/add' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.login {
  background-color: #feec2a;
  width: 100%;
  height: 100%;
  overflow: hidden;
  h1 {
    margin-top: 100px;
  }
  .van-cell-group {
    background-color: transparent;
    width: 80%;
    margin: 50% auto;
    .van-cell {
      margin-bottom: 15px;
      font-size: 20px;
      border-radius: 25px;
    }
    .van-button--plain.van-button--info{
      width: 100%;
      border: none;
      border-radius: 25px;
      color: black;
      font-size: 20px;
    }
  }
}
</style>
