// // !var 声明
// var a1 = "xiaoxiaoweiii";
// console.log(a1);
// window.onload = function () {
//   console.log(a1);
// };
// var a2=2;
// {
//    var a2=3;
// }
// console.log(a2);

// !let 局部声明
// ! -1
// var a=2;
// {
//    let a=3;
// }
// console.log(a);
// ! - 2
// {
//   let a=3;
// }
// console.log(a);

// !用var声明的循环

// for(let i=0;i<10;i++){
//   console.log('循环体中:'+i);
//   }
//   console.log('循环体外:'+i);

// ! const声明常量

// const a="xiaoxiaoweii";
// var a='晓晓伟';
// console.log(a); // !报错

// !解构赋值
// let [a,b,c] = [0,1,2];
// let [a,[b,c],d] = [0,[1,2],3]
// console.log(a,b,c,d)
// !默认值
// let [foo = 'true'] = []
// console.log(foo)
// let [a,b = "晓晓"] = ['xiaoxiaoweii']
// console.log(a,b)

// !对象解构
// let {foo,bar} = {foo: 'xiaoxiaoweii', bar: '晓晓伟'}
// console.log(foo + bar)

// !解构小坑 先赋值 再解构 需要加圆括号
// let foo;
// ({foo} = {foo: '晓晓伟'})
// console.log(foo)

// !字符串解构
// const [a,b,c,d,e,f] = 'xiaoxi';
// console.log(a,b,c,d,e,f)

// !对象扩展运算符
// function xiaoxiaoweii(...arg) {
//   console.log(arg[0]);
//   console.log(arg[1])
//   console.log(arg[2])
//   console.log(arg[3])
// }
// xiaoxiaoweii(1,2,3,4)

// let arr1 = ['111','222','333'];
// let arr2 = arr1;
// console.log(arr2);
// arr2.push('444')
// console.log(arr1)

// let arr1 = ['111','222','333'];
// // let arr2 = arr1;
// let arr2 =[...arr1]
// console.log(arr2);
// arr2.push('444')
// console.log(arr1,arr2)

// !rest运算符
// function xiaoxiaoweii(first,...arg) {
//   console.log(arg.length);
//   for( let i of arg) {
//     console.log(i)
//   }
// }
// xiaoxiaoweii(0,1,2,3,4,5,6,7,8)

// let a = 123.1;
// !判断是否为整型
// console.log(Number.isInteger(a));
// !转为整型
// console.log(parseInt(a));
// !转为浮点型
// console.log(parseFloat(a));

// !极限最大值 || 极限最小值
// let xiaoxiaoweii = Math.pow(2, 53) - 1;
// console.log(xiaoxiaoweii);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);
// !判断是否为安全整数
// console.log(Number.isSafeInteger(xiaoxiaoweii));

// !将json文件转为数组
// let json = {
//   "0": "xiaoxiaoweii",
//   "1": "晓晓伟",
//   "2": "顶顶顶",
//   length: 3,
// };
// console.log(json);
// let arr1 = Array.from(json);
// console.log(arr1);

// ! 一堆文本或者变量转换成数组

// let arr2 = Array.of(3, 4, 5, 6);
// console.log(arr2);

// let arr3 = Array.of("xiaoxiaoweii", "晓晓伟", "顶顶顶");
// console.log(arr3);

// *实例方法就是并不是以Array对象开始的，而是必须有一个已经存在的数组，然后使用的方法，这就是实例方法

// ! find( )实例方法: 函数中如果找到符合条件的数组元素就进行return，并停止查找 第一个符合条件的位置

// let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(
//   arr4.find(function (value, index, arr) {
//     return value > 5;
//   })
// );

// ! fill( )实例方法：把数组进行填充，它接收三个参数，第一个参数是填充的变量，第二个是开始填充的位置，第三个是填充到的位置。

// let arr5 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr5.fill("xiaoxiao", 2, 5);
// console.log(arr5);

// !for…of循环
// let arr6 = ["xiaoxiao", "晓晓伟", "顶顶顶"];
// for (let item of arr6) {
//   console.log(item);
// }

// !数组的索引
// for (let index of arr6.keys()) {
//   console.log(index);
// }

// !同时输出数组的内容和索引 entries()

// let arr7 = ["xiaoxiao", "晓晓伟", "顶顶顶"];
// for (let [index, val] of arr7.entries()) {
//   console.log(index + ":" + val);
// }
// !entries( )实例方法: entries()实例方式生成的是Iterator形式的数组，
// let arr8 = ["xiaoxiao", "晓晓伟", "顶顶顶"];
// let list = arr8.entries();
// console.log(list);
// console.log(list.next().value);
// console.log(list.next().value);
// console.log(list.next().value);

// !es6 箭头函数 和扩展

// function add(a, b = 1) {
//   if ( a == 0) {
//     throw new Error('a不能为0')
//   }
//   return a + b;
// }
// console.log(add(1))
// console.log(add(0))

// !将严谨模式放在函数体内
// function add(a, b) {
//   'use strict'
//   return a + b;
// }
// console.log(add(1, 2))

// !获得参数个数 必须传递的参数
// function add(a, b = 1) {
//   return a + b;
// }
// console.log(add(1, 2))
// console.log(add.length)

// !箭头函数  不能当构造函数
// var add = (a,b = 1) => a + b
// var add = (a,b = 1) => {return a + b}
// console.log(add(1))

// var add = (a,b = 1) => {
//   console.log("晓晓伟")
//   return a + b;
// }
// console.log(add(1))

// !对象的函数解构   json

// let json = {
//   a: 'xiaoxiaoweii',
//   b: '晓晓伟'
// }

// function fun({a, b = 'web'}) {
//   console.log(a,b)
// }
// fun(json)

// !数组的解构

// let arr = ['xiaoxiaoweii','晓晓伟','前端'];
// function fun(a,b,c) {
//   console.log(a,b,c)
// }

// fun(...arr);

// !in的用法

// let obj = {
//   a: 'xiaoxiaowei',
//   b: '晓晓伟'
// }
// console.log('a' in obj)
// console.log('c' in obj)

// let arr = [1,,,];
// console.log("arr.length", arr.length)
// console.log(0 in arr)
// console.log(1 in arr)

// !数组遍历 foreach
// let arr = ['xiaoxiaoweii', '晓晓伟', '前端']
// arr.forEach((val,index) => {
//   console.log(index, val)
// })

// !filter

// let arr = ['xiaoxiaoweii', '晓晓伟', '前端']
// arr.filter(x => console.log(x))

// !map

// let arr = ['xiaoxiaoweii', '晓晓伟', '前端']
// console.log(arr.map(x => 'web'))
// console.log(arr.toString())
// console.log(arr.join('|'));

// !对象赋值
// let name = 'xiaoxiaoweii';
// let skill = 'web';
// let obj = {
//   name,
//   skill
// };
// console.log(obj);

// !key值的构建

// let key = 'skill';
// let obj = {
//   [key] : 'web'
// };
// console.log(obj)

// !自定义对象方法

// let obj = {
//   add: function(a,b) {
//     return a + b;
//   }
// }
// console.log(obj.add(1,2));

// !is() === 同值相等 is 严格相等
// let obj1 ={ name: 'xiaoxiaoweii' }
// let obj2 ={ name: 'xiaoxiaoweii' }
// console.log(obj1.name === obj2.name)
// console.log(Object.is(obj1.name,obj2.name))

// console.log(+0 === -0);
// console.log(NaN === NaN);

// console.log(Object.is(+0,-0));
// console.log(Object.is(NaN,NaN));
// !合并对象 assign
// let a = {a: 'xiaoxiaoweii'}
// let b = {b: '晓晓伟'}
// let c = {c: 'web'}
// let d = Object.assign(a,b,c)
// console.log(d)

// !Symbol 对对象元素的保护作用

// let f = Symbol();
// console.log(typeof(f))

// let xiaoxiaowei = Symbol('xiaoxiaowei');
// console.log(xiaoxiaowei)
// console.log(xiaoxiaowei.toString())

// let xiaoxiaowei = Symbol();
// let obj = {
//     [xiaoxiaowei]: '晓晓伟'
// }
// console.log(obj[xiaoxiaowei])
// obj[xiaoxiaowei] = 'web'
// console.log(obj[xiaoxiaowei])

// let obj = {name: 'xiaoxiaowei',skill: 'web'};
// let age = Symbol();
// obj[age] =18;
// for(let item in obj) {
//     console.log(obj[item]);
// }
// console.log(obj[age])

// !Set
// let serArr = new Set(['xiaoxiaowei','晓晓伟','web']);
// serArr.add('hahaha')
// console.log(serArr)

// !has
// console.log(serArr);
// console.log(serArr.has('xiaoxiaowei'))
// console.log(serArr.has('xioxiaowei'))
// serArr.delete('xiaoxiaowei')
// console.log(serArr);
// serArr.clear()
// console.log(serArr);

// ! for ... of ...
// let serArr = new Set(['xiaoxiaowei','晓晓伟','web']);
// for (let item of serArr) {
//     console.log(item)
// }
// !forEach
// let serArr = new Set(['xiaoxiaowei','晓晓伟','web']);
// serArr.forEach(i => {
//     console.log(i)
// })

// !size
// let serArr = new Set(['xiaoxiaowei','晓晓伟','web']);
// console.log(serArr.size)

// !WeakSet

// let weakObj =new WeakSet();
// let obj = {
//     a: 'xiaoxiaowei',
//     b: '晓晓伟',
//     c: 'web'
// }
// let obj1 = {
//     a: 'xiaoxiaowei',
//     b: '晓晓伟',
//     c: 'web'
// }
// weakObj.add(obj)
// weakObj.add(obj1)
// console.log(weakObj)

// !map
// let json = {
//     name: 'xiaoxiaowei',
//     skill: 'web'
// }
// console.log(json.name)

// !=>
// var map =new Map();
// map.set(json, 'iam')
// console.log(map)
// map.set('jsjs', json)
// console.log(map)
// !增 删 查
// !get
// console.log(map.get(json));
// !has
// console.log(map.has(json))
// !delete
// map.delete(json)
// console.log(map)
// map.clear()
// console.log(map)
// console.log(map.size)

// !proxy

// let obj = {
//   add: function (val) {
//     return val + 1;
//   },
//   name: "I am xiaoxiaowei",
// };
// // console.log(obj.add(100))
// // console.log(obj.name)
// let pro = new Proxy(
//   {
//     add: function (val) {
//       return val + 1;
//     },
//     name: "I am xiaoxiaowei",
//   },
//   {
//     //   !get
//     get: function (target, key, property) {
//       console.log("come in get");
//       console.log(target, key, property);
//       return target[key];
//     },
//     set: function (target, key, value, receiver) {
//       console.log(` setting ${key} = ${value}`)
//       return target[key] = value
//     },
//   }
// );

// console.log(pro.name);
// pro.name = 'xiaoxiaoxiaowei'
// console.log(pro.name);
// let target = function () {
//   return "I am xiaoxiaowei";
// };
// let handle = {
//   apply(target, ctx, args) {
//     console.log("do apply");
//     return Reflect.apply(...arguments);
//   },
// };
// let pro = new Proxy(target, handle);
// console.log(pro());

// !promise 1.洗菜 2.做饭 3.吃饭
// let state = 1;
// function step1(resolve, reject) {
//   console.log("1.开始-洗菜做饭");
//   if ((state = 1)) {
//     resolve("洗菜做饭-完成");
//   } else {
//     reject("洗菜做饭-失败");
//   }
// }

// function step2(resolve, reject) {
//   console.log("2.开始-洗菜做饭");
//   if ((state = 1)) {
//     resolve("洗菜做饭-完成");
//   } else {
//     reject("洗菜做饭-失败");
//   }
// }

// function step3(resolve, reject) {
//   console.log("3.开始-吃饭");
//   if ((state = 1)) {
//     resolve("吃饭-完成");
//   } else {
//     reject("吃饭-失败");
//   }
// }

// new Promise(step1)
//   .then(function (val) {
//     console.log(val);
//     return new Promise(step2);
//   })
//   .then(function (val) {
//     console.log(val);
//     return new Promise(step3);
//   })
//   .then(function (val) {
//     console.log(val);
//   });

// let state = 1;
// function step1(resolve, reject) {
//   console.log("1.开始-洗菜做饭");
//   if ((state == 1)) {
//     resolve("洗菜做饭-完成");
//   } else {
//     reject("洗菜做饭-失败");
//   }
// }

// function step2(resolve, reject) {
//   console.log("2.开始-洗菜做饭");
//   state = 0;
//   if ((state == 1)) {
//     resolve("洗菜做饭-完成");
//   } else {
//     reject("洗菜做饭-失败");
//   }
// }

// function step3(resolve, reject) {
//   console.log("3.开始-吃饭");
//   if ((state == 1)) {
//     resolve("吃饭-完成");
//   } else {
//     reject("吃饭-失败");
//   }
// }

// new Promise(step1)
//   .then(function (val) {
//     console.log(val);
//     return new Promise(step2);
//   })
//   .then(function (val) {
//     console.log(val);
//     return new Promise(step3);
//   })
//   .then(function (val) {
//     console.log(val);
//   });

// !class

// class Coder {
//     name(val) {
//         console.log(val)
//         return val
//     }
//     skill(val) {
//         console.log(this.name('xiaoxiaowei') + ':' + val)
//     }
//     constructor(a,b) {
//         this.a = a;
//         this.b = b;
//     }
//     add() {
//         return this.a + this.b
//     }
// }

// let xiaoxiaowei = new Coder(1,2);
// xiaoxiaowei.name('xiaoxiaowei')
// xiaoxiaowei.skill('xiaoxiaowei')
// console.log(xiaoxiaowei.add())

// // !class 继承
// class htmler extends Coder{}

// let pang = new htmler;
// pang.name('晓晓伟');

// !模块化操作 export 输出
// !import 输入

import {name} from './temp.js'

console.log(name)