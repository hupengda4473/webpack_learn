/*依赖js*/
const {add, mul} = require('./js/mathUtils');

console.log(add(20, 40));
console.log(mul(10, 20));

/*依赖css*/
require('./css/index.css');

/*依赖less*/
require('./less/style.less');

/*依赖vue*/
import Vue from 'vue';
const app = new Vue({
  el: '#app',
  data: {
    massage: 'hello VUE'
  }
})
