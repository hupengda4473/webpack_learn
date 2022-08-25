<template>
  <div>
    <h1>我是{{ $route.query.data }}</h1>
    <h1>我是{{ $route.query.data }}</h1>
    <h1>我是{{ $route.query.data }}</h1>
    <div class="itemBox">
      <router-link class="homeNva" to="/home/news/">消息</router-link>
      <router-link class="homeNva" to="/home/massage/">我的</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "home",
  data(){
    return {
      name: this.$route.query.data
    }
  },
  methods: {},
}
</script>

<style scoped>
.itemBox{
  display: flex;
  justify-content: center;
}
.homeNva{
  color: #42b983;
  font-size: 24px;
  text-decoration: none;
  text-align: center;
  margin-right: 24px;
}
</style>