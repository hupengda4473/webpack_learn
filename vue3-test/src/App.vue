<template>
  <div>
    <nav id="nav">
      <router-link @click="selectItem(0)" :class="{'active': selectIndex === 0}" class="navItem" :to="{path: '/home', query: {data: '首页'}}">首页</router-link>
      <router-link @click="selectItem(1)" :class="{'active': selectIndex === 1}" class="navItem" :to="{path: '/about', query: {data: '关于页'}}">关于</router-link>
      <router-link @click="selectItem(2)" :class="{'active': selectIndex === 2}" class="navItem" :to="{path: '/mine', query: {data: '我的页'}}">我的</router-link>
    </nav>
    <router-view/>
    <div class="navList">
      <div class="navItem" @click="selectItemNew(0,'/home', '首页')" :class="{'active': selectIndex === 0}">首页</div>
      <div class="navItem" @click="selectItemNew(1,'/about', '关于页')" :class="{'active': selectIndex === 1}">关于</div>
      <div class="navItem" @click="selectItemNew(2,'/mine', '我的页')" :class="{'active': selectIndex === 2}">我的</div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      selectIndex: 0
    }
  },
  methods: {
    selectItem(index){
      this.selectIndex = index;
    },
    selectItemNew(index, path, str){
      this.selectIndex = index;
      this.$router.replace({
        path: path,
        query: {
          data: str
        }
      });
    },
  }
}
</script>
<style lang="less">
  #nav{
    text-align: center;
  }
  .navList{
    display: flex;
    justify-content: center;
  }
  .navItem{
    font-size: 36px;
    margin-right: 24px;
    text-decoration: none;
    color: #000;
  }
  .active{
    color: coral;
  }
</style>
