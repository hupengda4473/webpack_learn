import {re} from "@babel/core/lib/vendor/import-meta-resolve";

const {add, mul, num} = require('./js/mathUtils');
console.log(add(20, 40));
console.log(mul(10, 20));

/*闭包*/
let logFun = (num = 1) => {
    let a = 1;
    return () => console.log(num + a);
}
let log = logFun(num);
log();

/*数组合并，排序，items * 2，过滤，求和*/
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr2 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
let arr3 = [...arr, ...arr2].sort().map(item => item * 2).filter(item => item < 15).reduce((prev, curr) => prev + curr, 0);
console.log(arr3);


/*递归深拷贝*/
let data = {
    test: 1,
    test1: undefined,
    test2: null,
    test3: {
        test4: '123',
        test5: {
            test6: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            test7: {
                test8: {
                    name: '张三',
                    sex: '男',
                    age: '18'
                }
            }
        }
    }
};
data.data = data;
let clone = (target, map = new WeakMap()) => {
    if (
        !target ||
        typeof target !== 'object' ||
        target.constructor === RegExp
    ) {
        return target;
    }
    let targetNew = Array.isArray(target) ? [] : {};
    if (map.get(target)) {
        return map.get(target);
    }
    map.set(target, targetNew);
    for (const key in target) {
        targetNew[key] = clone(target[key], map);
    }
    return targetNew;
};
let data2 = clone(data);
data.test = 999;
console.log(data);
console.log(data2);


require('./css/index.css');

require('./less/style.less');

import Vue from 'vue';

const app = new Vue({
    el: '#app',
    data: {
        massage: 'hello webpack'
    }
});