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
for (let index of arr6.keys()) {
  console.log(index);
}

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
