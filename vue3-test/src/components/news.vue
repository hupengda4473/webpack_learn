<template>
  <div>
    <h3>我是news页</h3>
    <h3>{{ new Date(1661397156020).format("yyyy-MM-dd hh:mm:ss") }}</h3>
    <h3>{{ new Date(1661397156020).format("yyyy年M月d日 h时m分s秒S毫秒") }}</h3>
    <button @click="debounce">防抖</button>
    <button @click="throttle">节流</button>
    <div class="demo-content function-based-params-demo">
      <div class="line">
        <div class="small square el" style=""></div>
      </div>
      <div class="line">
        <div class="small square el" style=""></div>
      </div>
      <div class="line">
        <div class="small square el" style=""></div>
      </div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.js';
export default {
  name: "news",
  data() {
    return {
      arr: [
        {name: '张三', age: 20},
        {name: '李四', age: 18},
        {name: '王五', age: 19},
        {name: '赵六', age: 23},
      ],
      array: [1]
    }
  },
  methods: {
    debounce: _.debounce(function () {
      console.log(111);
    }, 200),
    throttle: _.throttle(function () {
      console.log(222);
    }, 1000),
  },
  computed: {},
  created() {
    console.log(_.orderBy(this.arr, ['age'], ['desc']));
    console.log(_.flattenDeep(_.concat(this.array, 2, [3], [[4]])));
    console.log(_.compact([0, 1, false, 2, '', 3]));
  },
  mounted() {
    let myAnimation = anime({
      targets: '.function-based-params-demo .el',
      translateX: 270,
      direction: 'alternate',
      loop: true,
      delay: function (el, i, l) {
        return i * 100;
      },
      endDelay: function (el, i, l) {
        return (l - i) * 100;
      }
    });
  }
}
</script>

<style scoped>
.demo-content {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 290px;
  height: 100%;
}
.line {
  width: 100%;
  padding: 1px 0px;
}

.small.abel {
  height: 18px;
  padding-left: 28px;
}
.label {
  position: absolute;
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  width: 100%;
  height: auto;
  padding-left: 38px;
  transition: opacity .5s ease;
}
.square, .circle {
  pointer-events: none;
  position: relative;
  width: 28px;
  height: 28px;
  margin: 1px;
  background-color: coral;
  font-size: 14px;
}
</style>