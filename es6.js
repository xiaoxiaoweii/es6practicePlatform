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

/* import {name} from './temp.js'
 */
/* console.log(name) */

/* const _array = [
  "RGB(0,0,0,255)", "RGB(1,1,1,255)", "RGB(2,2,2,255)", "RGB(3,3,3,255)", "RGB(4,4,4,255)", "RGB(5,5,5,255)", "RGB(6,6,6,255)", "RGB(7,7,7,255)", "RGB(8,8,8,255)", "RGB(9,9,9,255)", "RGB(10,10,10,255)", "RGB(11,11,11,255)", "RGB(12,12,12,255)", "RGB(13,13,13,255)", "RGB(14,14,14,255)", "RGB(15,15,15,255)", "RGB(16,16,16,255)", "RGB(17,17,17,255)", "RGB(18,18,18,255)", "RGB(19,19,19,255)", "RGB(20,20,20,255)", "RGB(21,21,21,255)", "RGB(22,22,22,255)", "RGB(23,23,23,255)", "RGB(24,24,24,255)", "RGB(25,25,25,255)", "RGB(26,26,26,255)", "RGB(27,27,27,255)", "RGB(28,28,28,255)", "RGB(29,29,29,255)", "RGB(30,30,30,255)", "RGB(31,31,31,255)", "RGB(32,32,32,255)", "RGB(33,33,33,255)", "RGB(34,34,34,255)", "RGB(35,35,35,255)", "RGB(36,36,36,255)", "RGB(37,37,37,255)", "RGB(38,38,38,255)", "RGB(39,39,39,255)", "RGB(40,40,40,255)", "RGB(41,41,41,255)", "RGB(42,42,42,255)", "RGB(43,43,43,255)", "RGB(44,44,44,255)", "RGB(45,45,45,255)", "RGB(46,46,46,255)", "RGB(47,47,47,255)", "RGB(48,48,48,255)", "RGB(49,49,49,255)", "RGB(50,50,50,255)", "RGB(51,51,51,255)", "RGB(52,52,52,255)", "RGB(53,53,53,255)", "RGB(54,54,54,255)", "RGB(55,55,55,255)", "RGB(56,56,56,255)", "RGB(57,57,57,255)", "RGB(58,58,58,255)", "RGB(59,59,59,255)", "RGB(60,60,60,255)", "RGB(61,61,61,255)", "RGB(62,62,62,255)", "RGB(63,63,63,255)", "RGB(64,64,64,255)", "RGB(65,65,65,255)", "RGB(66,66,66,255)", "RGB(67,67,67,255)", "RGB(68,68,68,255)", "RGB(69,69,69,255)", "RGB(70,70,70,255)", "RGB(71,71,71,255)", "RGB(72,72,72,255)", "RGB(73,73,73,255)", "RGB(74,74,74,255)", "RGB(75,75,75,255)", "RGB(76,76,76,255)", "RGB(77,77,77,255)", "RGB(78,78,78,255)", "RGB(79,79,79,255)", "RGB(80,80,80,255)", "RGB(81,81,81,255)", "RGB(82,82,82,255)", "RGB(83,83,83,255)", "RGB(84,84,84,255)", "RGB(85,85,85,255)", "RGB(86,86,86,255)", "RGB(87,87,87,255)", "RGB(88,88,88,255)", "RGB(89,89,89,255)", "RGB(90,90,90,255)", "RGB(91,91,91,255)", "RGB(92,92,92,255)", "RGB(93,93,93,255)", "RGB(94,94,94,255)", "RGB(95,95,95,255)", "RGB(96,96,96,255)", "RGB(97,97,97,255)", "RGB(98,98,98,255)", "RGB(99,99,99,255)", "RGB(100,100,100,255)", "RGB(101,101,101,255)", "RGB(102,102,102,255)", "RGB(103,103,103,255)", "RGB(104,104,104,255)", "RGB(105,105,105,255)", "RGB(106,106,106,255)", "RGB(107,107,107,255)", "RGB(108,108,108,255)", "RGB(109,109,109,255)", "RGB(110,110,110,255)", "RGB(111,111,111,255)", "RGB(112,112,112,255)", "RGB(113,113,113,255)", "RGB(114,114,114,255)", "RGB(115,115,115,255)", "RGB(116,116,116,255)", "RGB(117,117,117,255)", "RGB(118,118,118,255)", "RGB(119,119,119,255)", "RGB(120,120,120,255)", "RGB(121,121,121,255)", "RGB(122,122,122,255)", "RGB(123,123,123,255)", "RGB(124,124,124,255)", "RGB(125,125,125,255)", "RGB(126,126,126,255)", "RGB(127,127,127,255)", "RGB(128,128,128,255)", "RGB(129,129,129,255)", "RGB(130,130,130,255)", "RGB(131,131,131,255)", "RGB(132,132,132,255)", "RGB(133,133,133,255)", "RGB(134,134,134,255)", "RGB(135,135,135,255)", "RGB(136,136,136,255)", "RGB(137,137,137,255)", "RGB(138,138,138,255)", "RGB(139,139,139,255)", "RGB(140,140,140,255)", "RGB(141,141,141,255)", "RGB(142,142,142,255)", "RGB(143,143,143,255)", "RGB(144,144,144,255)", "RGB(145,145,145,255)", "RGB(146,146,146,255)", "RGB(147,147,147,255)", "RGB(148,148,148,255)", "RGB(149,149,149,255)", "RGB(150,150,150,255)", "RGB(151,151,151,255)", "RGB(152,152,152,255)", "RGB(153,153,153,255)", "RGB(154,154,154,255)", "RGB(155,155,155,255)", "RGB(156,156,156,255)", "RGB(157,157,157,255)", "RGB(158,158,158,255)", "RGB(159,159,159,255)", "RGB(160,160,160,255)", "RGB(161,161,161,255)", "RGB(162,162,162,255)", "RGB(163,163,163,255)", "RGB(164,164,164,255)", "RGB(165,165,165,255)", "RGB(166,166,166,255)", "RGB(167,167,167,255)", "RGB(168,168,168,255)", "RGB(169,169,169,255)", "RGB(170,170,170,255)", "RGB(171,171,171,255)", "RGB(172,172,172,255)", "RGB(173,173,173,255)", "RGB(174,174,174,255)", "RGB(175,175,175,255)", "RGB(176,176,176,255)", "RGB(177,177,177,255)", "RGB(178,178,178,255)", "RGB(179,179,179,255)", "RGB(180,180,180,255)", "RGB(181,181,181,255)", "RGB(182,182,182,255)", "RGB(183,183,183,255)", "RGB(184,184,184,255)", "RGB(185,185,185,255)", "RGB(186,186,186,255)", "RGB(187,187,187,255)", "RGB(188,188,188,255)", "RGB(189,189,189,255)", "RGB(190,190,190,255)", "RGB(191,191,191,255)", "RGB(192,192,192,255)", "RGB(193,193,193,255)", "RGB(194,194,194,255)", "RGB(195,195,195,255)", "RGB(196,196,196,255)", "RGB(197,197,197,255)", "RGB(198,198,198,255)", "RGB(199,199,199,255)", "RGB(200,200,200,255)", "RGB(201,201,201,255)", "RGB(202,202,202,255)", "RGB(203,203,203,255)", "RGB(204,204,204,255)", "RGB(205,205,205,255)", "RGB(206,206,206,255)", "RGB(207,207,207,255)", "RGB(208,208,208,255)", "RGB(209,209,209,255)", "RGB(210,210,210,255)", "RGB(211,211,211,255)", "RGB(212,212,212,255)", "RGB(213,213,213,255)", "RGB(214,214,214,255)", "RGB(215,215,215,255)", "RGB(216,216,216,255)", "RGB(217,217,217,255)", "RGB(218,218,218,255)", "RGB(219,219,219,255)", "RGB(220,220,220,255)", "RGB(221,221,221,255)", "RGB(222,222,222,255)", "RGB(223,223,223,255)", "RGB(224,224,224,255)", "RGB(225,225,225,255)", "RGB(226,226,226,255)", "RGB(227,227,227,255)", "RGB(228,228,228,255)", "RGB(229,229,229,255)", "RGB(230,230,230,255)", "RGB(231,231,231,255)", "RGB(232,232,232,255)", "RGB(233,233,233,255)", "RGB(234,234,234,255)", "RGB(235,235,235,255)", "RGB(236,236,236,255)", "RGB(237,237,237,255)", "RGB(238,238,238,255)", "RGB(239,239,239,255)", "RGB(240,240,240,255)", "RGB(241,241,241,255)", "RGB(242,242,242,255)", "RGB(243,243,243,255)", "RGB(244,244,244,255)", "RGB(245,245,245,255)", "RGB(246,246,246,255)", "RGB(247,247,247,255)", "RGB(248,248,248,255)", "RGB(249,249,249,255)", "RGB(250,250,250,255)", "RGB(251,251,251,255)", "RGB(252,252,252,255)", "RGB(253,253,253,255)", "RGB(254,254,254,255)", "RGB(255,255,255,255)"
]
const _reverse_array = _array.reverse()
console.log((_reverse_array).slice(199, 256)) */

const _a = [
  "rgb(174,133,198,255)",
  "rgb(172,130,197,255)",
  "rgb(170,128,196,255)",
  "rgb(169,125,194,255)",
  "rgb(167,122,193,255)",
  "rgb(165,119,192,255)",
  "rgb(163,117,191,255)",
  "rgb(162,114,189,255)",
  "rgb(160,111,188,255)",
  "rgb(158,109,187,255)",
  "rgb(156,106,186,255)",
  "rgb(154,103,184,255)",
  "rgb(153,100,183,255)",
  "rgb(151,98,182,255)",
  "rgb(149,95,181,255)",
  "rgb(147,92,179,255)",
  "rgb(145,90,178,255)",
  "rgb(144,87,177,255)",
  "rgb(142,84,176,255)",
  "rgb(140,81,174,255)",
  "rgb(138,79,173,255)",
  "rgb(137,76,172,255)",
  "rgb(135,73,171,255)",
  "rgb(133,71,170,255)",
  "rgb(131,68,168,255)",
  "rgb(129,65,167,255)",
  "rgb(128,62,166,255)",
  "rgb(126,60,165,255)",
  "rgb(124,57,163,255)",
  "rgb(122,54,162,255)",
  "rgb(120,52,161,255)",
  "rgb(119,49,160,255)",
  "rgb(117,46,158,255)",
  "rgb(115,43,157,255)",
  "rgb(113,41,156,255)",
  "rgb(112,38,155,255)",
  "rgb(110,35,153,255)",
  "rgb(108,33,152,255)",
  "rgb(106,30,151,255)",
  "rgb(104,27,150,255)",
  "rgb(103,24,148,255)",
  "rgb(101,22,147,255)",
  "rgb(99,19,146,255)",
  "rgb(206,204,207,255)",
  "rgb(180,179,181,255)",
  "rgb(155,153,155,255)",
  "rgb(129,128,129,255)",
  "rgb(103,102,104,255)",
  "rgb(77,77,78,255)",
  "rgb(52,51,52,255)",
  "rgb(26,26,26,255)",
  "rgb(31,24,24,255)",
  "rgb(37,23,23,255)",
  "rgb(42,21,21,255)",
  "rgb(47,19,19,255)",
  "rgb(52,17,17,255)",
  "rgb(58,16,16,255)",
  "rgb(63,14,14,255)",
  "rgb(68,12,12,255)",
  "rgb(73,10,10,255)",
  "rgb(79,9,9,255)",
  "rgb(84,7,7,255)",
  "rgb(89,5,5,255)",
  "rgb(94,3,3,255)",
  "rgb(100,2,2,255)",
  "rgb(105,0,0,255)",
  "rgb(113,0,0,255)",
  "rgb(121,0,0,255)",
  "rgb(129,0,0,255)",
  "rgb(137,0,0,255)",
  "rgb(145,0,0,255)",
  "rgb(153,0,0,255)",
  "rgb(161,0,0,255)",
  "rgb(169,0,0,255)",
  "rgb(177,0,0,255)",
  "rgb(185,0,0,255)",
  "rgb(193,0,0,255)",
  "rgb(201,0,0,255)",
  "rgb(209,0,0,255)",
  "rgb(217,0,0,255)",
  "rgb(225,0,0,255)",
  "rgb(227,5,0,255)",
  "rgb(229,11,0,255)",
  "rgb(231,16,0,255)",
  "rgb(233,22,0,255)",
  "rgb(235,27,0,255)",
  "rgb(237,33,0,255)",
  "rgb(239,38,0,255)",
  "rgb(241,44,0,255)",
  "rgb(243,49,0,255)",
  "rgb(245,55,0,255)",
  "rgb(247,60,0,255)",
  "rgb(249,66,0,255)",
  "rgb(251,71,0,255)",
  "rgb(253,77,0,255)",
  "rgb(255,82,0,255)",
  "rgb(255,92,0,255)",
  "rgb(255,102,0,255)",
  "rgb(255,113,0,255)",
  "rgb(255,123,0,255)",
  "rgb(255,133,0,255)",
  "rgb(255,143,0,255)",
  "rgb(255,153,0,255)",
  "rgb(255,164,0,255)",
  "rgb(255,174,0,255)",
  "rgb(255,184,0,255)",
  "rgb(255,194,0,255)",
  "rgb(255,204,0,255)",
  "rgb(255,215,0,255)",
  "rgb(255,225,0,255)",
  "rgb(255,235,0,255)",
  "rgb(250,236,0,255)",
  "rgb(245,238,0,255)",
  "rgb(240,239,0,255)",
  "rgb(234,240,0,255)",
  "rgb(229,242,0,255)",
  "rgb(224,243,0,255)",
  "rgb(219,244,0,255)",
  "rgb(214,246,0,255)",
  "rgb(209,247,0,255)",
  "rgb(204,248,0,255)",
  "rgb(199,250,0,255)",
  "rgb(193,251,0,255)",
  "rgb(188,252,0,255)",
  "rgb(183,254,0,255)",
  "rgb(178,255,0,255)",
  "rgb(171,248,3,255)",
  "rgb(164,241,7,255)",
  "rgb(157,234,10,255)",
  "rgb(150,227,13,255)",
  "rgb(142,220,17,255)",
  "rgb(135,213,20,255)",
  "rgb(128,206,24,255)",
  "rgb(121,199,27,255)",
  "rgb(114,192,30,255)",
  "rgb(107,185,34,255)",
  "rgb(100,178,37,255)",
  "rgb(93,171,40,255)",
  "rgb(85,165,44,255)",
  "rgb(78,158,47,255)",
  "rgb(71,151,50,255)",
  "rgb(64,144,54,255)",
  "rgb(57,137,57,255)",
  "rgb(50,130,60,255)",
  "rgb(43,123,64,255)",
  "rgb(36,116,67,255)",
  "rgb(28,109,71,255)",
  "rgb(21,102,74,255)",
  "rgb(14,95,77,255)",
  "rgb(7,88,81,255)",
  "rgb(0,81,84,255)",
  "rgb(0,78,88,255)",
  "rgb(0,76,91,255)",
  "rgb(0,73,95,255)",
  "rgb(0,71,98,255)",
  "rgb(0,68,102,255)",
  "rgb(0,66,106,255)",
  "rgb(0,63,109,255)",
  "rgb(0,61,113,255)",
  "rgb(0,58,116,255)",
  "rgb(0,56,120,255)",
  "rgb(0,53,124,255)",
  "rgb(0,51,127,255)",
  "rgb(0,48,131,255)",
  "rgb(0,46,134,255)",
  "rgb(0,43,138,255)",
  "rgb(0,51,143,255)",
  "rgb(0,60,147,255)",
  "rgb(0,68,152,255)",
  "rgb(0,77,157,255)",
  "rgb(0,85,161,255)",
  "rgb(0,94,166,255)",
  "rgb(0,102,171,255)",
  "rgb(0,111,175,255)",
  "rgb(0,119,180,255)",
  "rgb(0,128,185,255)",
  "rgb(0,136,189,255)",
  "rgb(0,145,194,255)",
  "rgb(0,153,199,255)",
  "rgb(0,162,204,255)",
  "rgb(0,170,208,255)",
  "rgb(0,179,213,255)",
  "rgb(0,187,218,255)",
  "rgb(0,196,222,255)",
  "rgb(0,204,227,255)",
  "rgb(0,213,232,255)",
  "rgb(0,221,236,255)",
  "rgb(0,230,241,255)",
  "rgb(0,238,246,255)",
  "rgb(0,247,250,255)",
  "rgb(0,255,255,255)",
  "rgb(198,198,198,255)",
  "rgb(197,197,197,255)",
  "rgb(196,196,196,255)",
  "rgb(195,195,195,255)",
  "rgb(195,195,195,255)",
  "rgb(194,194,194,255)",
  "rgb(193,193,193,255)",
  "rgb(192,192,192,255)",
  "rgb(191,191,191,255)",
  "rgb(190,190,190,255)",
  "rgb(190,190,190,255)",
  "rgb(189,189,189,255)",
  "rgb(188,188,188,255)",
  "rgb(187,187,187,255)",
  "rgb(186,186,186,255)",
  "rgb(185,185,185,255)",
  "rgb(185,185,185,255)",
  "rgb(184,184,184,255)",
  "rgb(183,183,183,255)",
  "rgb(182,182,182,255)",
  "rgb(181,181,181,255)",
  "rgb(180,180,180,255)",
  "rgb(180,180,180,255)",
  "rgb(179,179,179,255)",
  "rgb(178,178,178,255)",
  "rgb(177,177,177,255)",
  "rgb(176,176,176,255)",
  "rgb(175,175,175,255)",
  "rgb(174,174,174,255)",
  "rgb(173,173,173,255)",
  "rgb(172,172,172,255)",
  "rgb(171,171,171,255)",
  "rgb(170,170,170,255)",
  "rgb(169,169,169,255)",
  "rgb(168,168,168,255)",
  "rgb(167,167,167,255)",
  "rgb(166,166,166,255)",
  "rgb(165,165,165,255)",
  "rgb(164,164,164,255)",
  "rgb(163,163,163,255)",
  "rgb(162,162,162,255)",
  "rgb(161,161,161,255)",
  "rgb(160,160,160,255)",
  "rgb(159,159,159,255)",
  "rgb(158,158,158,255)",
  "rgb(157,157,157,255)",
  "rgb(156,156,156,255)",
  "rgb(155,155,155,255)",
  "rgb(154,154,154,255)",
  "rgb(153,153,153,255)",
  "rgb(153,153,153,255)",
  "rgb(152,152,152,255)",
  "rgb(151,151,151,255)",
  "rgb(150,150,150,255)",
  "rgb(149,149,149,255)",
  "rgb(148,148,148,255)",
  "rgb(147,147,147,255)",
  "rgb(146,146,146,255)",
  "rgb(145,145,145,255)",
  "rgb(144,144,144,255)",
  "rgb(143,143,143,255)",
  "rgb(142,142,142,255)",
  "rgb(141,141,141,255)",
  "rgb(140,140,140,255)",
  "rgb(139,139,139,255)",
  "rgb(138,138,138,255)",
  "rgb(137,137,137,255)",
  "rgb(136,136,136,255)",
  "rgb(135,135,135,255)",
  "rgb(134,134,134,255)",
  "rgb(133,133,133,255)",
  "rgb(132,132,132,255)",
  "rgb(131,131,131,255)",
  "rgb(130,130,130,255)",
  "rgb(129,129,129,255)",
  "rgb(128,128,128,255)",
  "rgb(127,127,127,255)",
  "rgb(126,126,126,255)",
  "rgb(125,125,125,255)",
  "rgb(124,124,124,255)",
  "rgb(123,123,123,255)",
  "rgb(122,122,122,255)",
  "rgb(121,121,121,255)",
  "rgb(120,120,120,255)",
  "rgb(119,119,119,255)",
  "rgb(118,118,118,255)",
  "rgb(117,117,117,255)",
  "rgb(116,116,116,255)",
  "rgb(115,115,115,255)",
  "rgb(114,114,114,255)",
  "rgb(113,113,113,255)",
  "rgb(112,112,112,255)",
  "rgb(111,111,111,255)",
  "rgb(110,110,110,255)",
  "rgb(109,109,109,255)",
  "rgb(108,108,108,255)",
  "rgb(107,107,107,255)",
  "rgb(106,106,106,255)",
  "rgb(105,105,105,255)",
  "rgb(104,104,104,255)",
  "rgb(103,103,103,255)",
  "rgb(101,101,101,255)",
  "rgb(100,100,100,255)",
  "rgb(99,99,99,255)",
  "rgb(98,98,98,255)",
  "rgb(97,97,97,255)",
  "rgb(96,96,96,255)",
  "rgb(95,95,95,255)",
  "rgb(94,94,94,255)",
  "rgb(93,93,93,255)",
  "rgb(92,92,92,255)",
  "rgb(91,91,91,255)",
  "rgb(90,90,90,255)",
  "rgb(89,89,89,255)",
  "rgb(88,88,88,255)",
  "rgb(87,87,87,255)",
  "rgb(86,86,86,255)",
  "rgb(85,85,85,255)",
  "rgb(84,84,84,255)",
  "rgb(83,83,83,255)",
  "rgb(82,82,82,255)",
  "rgb(81,81,81,255)",
  "rgb(80,80,80,255)",
  "rgb(79,79,79,255)",
  "rgb(78,78,78,255)",
  "rgb(77,77,77,255)",
  "rgb(76,76,76,255)",
  "rgb(75,75,75,255)",
  "rgb(74,74,74,255)",
  "rgb(72,72,72,255)",
  "rgb(71,71,71,255)",
  "rgb(70,70,70,255)",
  "rgb(69,69,69,255)",
  "rgb(68,68,68,255)",
  "rgb(67,67,67,255)",
  "rgb(66,66,66,255)",
  "rgb(64,64,64,255)",
  "rgb(63,63,63,255)",
  "rgb(62,62,62,255)",
  "rgb(61,61,61,255)",
  "rgb(60,60,60,255)",
  "rgb(59,59,59,255)",
  "rgb(58,58,58,255)",
  "rgb(56,56,56,255)",
  "rgb(55,55,55,255)",
  "rgb(54,54,54,255)",
  "rgb(53,53,53,255)",
  "rgb(52,52,52,255)",
  "rgb(51,51,51,255)",
  "rgb(50,50,50,255)",
  "rgb(49,49,49,255)",
  "rgb(47,47,47,255)",
  "rgb(46,46,46,255)",
  "rgb(45,45,45,255)",
  "rgb(44,44,44,255)",
  "rgb(43,43,43,255)",
  "rgb(42,42,42,255)",
  "rgb(41,41,41,255)",
  "rgb(39,39,39,255)",
  "rgb(38,38,38,255)",
  "rgb(37,37,37,255)",
  "rgb(36,36,36,255)",
  "rgb(35,35,35,255)",
  "rgb(34,34,34,255)",
  "rgb(33,33,33,255)",
  "rgb(31,31,31,255)",
  "rgb(30,30,30,255)",
  "rgb(29,29,29,255)",
  "rgb(28,28,28,255)",
  "rgb(27,27,27,255)",
  "rgb(26,26,26,255)",
  "rgb(25,25,25,255)",
  "rgb(23,23,23,255)",
  "rgb(22,22,22,255)",
  "rgb(21,21,21,255)",
  "rgb(20,20,20,255)",
  "rgb(19,19,19,255)",
  "rgb(18,18,18,255)",
  "rgb(18,18,18,255)",
  "rgb(17,17,17,255)",
  "rgb(16,16,16,255)",
  "rgb(15,15,15,255)",
  "rgb(15,15,15,255)",
  "rgb(14,14,14,255)",
  "rgb(13,13,13,255)",
  "rgb(12,12,12,255)",
  "rgb(12,12,12,255)",
  "rgb(11,11,11,255)",
  "rgb(10,10,10,255)",
  "rgb(9,9,9,255)",
  "rgb(9,9,9,255)",
  "rgb(8,8,8,255)",
  "rgb(7,7,7,255)",
  "rgb(6,6,6,255)",
  "rgb(6,6,6,255)",
  "rgb(5,5,5,255)",
  "rgb(4,4,4,255)",
  "rgb(3,3,3,255)",
  "rgb(3,3,3,255)",
  "rgb(2,2,2,255)"
]

const _b = _a.reverse()
console.log(_b.length)
console.log(_b.slice(0,100))
console.log(_b.slice(100,200))
console.log(_b.slice(200,300))
console.log(_b.slice(300,392))


// 参考界面中颜色
/* const _a = {
  "海洋": "rgb(8, 9, 15,255)",
  "植被": "rgb(66, 133, 46,255)",
  "沙漠": "rgb(173, 126, 103,255)",
  "高云": "rgb(21, 233, 221,255)",
  "低云/雾": "rgb(220, 200, 200,255)",
  "沙城/烟尘": "rgb(8, 9, 15,255)",


  "沙尘/烟尘": "rgb(207, 74, 153,255)",
  "卷云": "rgb(4, 16, 35,255)",
  "薄冷云/冰": "rgb(138, 1, 0)",
  "中层云": "rgb(154, 146, 26,255)",
  "沙漠卷云": "rgb(1, 152, 38,255)",
  "沙漠": "rgb(138, 207, 223,255)",
  "低层湿气团": "rgb(46, 96, 173,255)",
  "低层干气团": "rgb(141, 114, 218,255)",


  "晴空": "rgb(120, 90, 240,255)",
  "晴空": "rgb(176, 111, 217,255)",
  "暖低云": "rgb(156, 208, 217,255)",
  "冷低云": "rgb(170, 215, 176,255)",
  "厚中层云": "rgb(166, 121, 123,255)",
  "厚冰云": "rgb(130, 10, 20,255)",
  "薄卷云": "rgb(161, 8, 0,255)",
  "极薄卷云": "rgb(27, 0, 156,255)",
  "白天云": "rgb(120, 0, 200,255)",
  "厚高云": "rgb(180, 182, 200,255)",
  "薄高云": "rgb(101, 104, 179,255)",
  "厚高云": "rgb(180, 182, 200,255)",
  "厚高云": "rgb(180, 182, 200,255)",
  "陆地": "rgb(56, 58, 67,255)",
  "海洋": "rgb(3, 3, 251,255)"
}  */