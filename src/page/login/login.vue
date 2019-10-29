<template>
<div>
    <h1>我是Login</h1>
    <button @click="open()">进入页面</button>
</div>
</template>

<script>
export default {
  name: 'details',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    open () {
      this.$router.push({path: '/add'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
