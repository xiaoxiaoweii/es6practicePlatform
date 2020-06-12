let a = 123.1
// !判断是否为整型
console.log(Number.isInteger(a))
// !转为整型
console.log(parseInt(a))
// !转为浮点型
console.log(parseFloat(a))

// !极限最大值 || 极限最小值
let xiaoxiaoweii =Math.pow(2,53) - 1;
console.log(xiaoxiaoweii)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
// !判断是否为安全整数
console.log(Number.isSafeInteger(xiaoxiaoweii))

// !将json文件转为数组
let  json = {
  '0': 'jspang',
  '1': '技术胖',
  '2': '大胖逼逼叨',
  length:3
}
console.log(json)
let arr1=Array.from(json);
console.log(arr1)

// ! 一堆文本或者变量转换成数组

let arr2 =Array.of(3,4,5,6);
console.log(arr2);

let arr3 =Array.of('技术胖','jspang','大胖逼逼叨');
console.log(arr3);

// *实例方法就是并不是以Array对象开始的，而是必须有一个已经存在的数组，然后使用的方法，这就是实例方法

// ! find( )实例方法: 函数中如果找到符合条件的数组元素就进行return，并停止查找 第一个符合条件的位置

let arr4=[1,2,3,4,5,6,7,8,9];
console.log(arr4.find(function(value,index,arr){
    return value > 5;
}))

// ! fill( )实例方法：把数组进行填充，它接收三个参数，第一个参数是填充的变量，第二个是开始填充的位置，第三个是填充到的位置。

let arr5=[0,1,2,3,4,5,6,7,8,9];
arr5.fill('jspang',2,5);
console.log(arr5);

// !for…of循环
let arr6=['jspang','技术胖','大胖逼逼叨']
for (let item of arr6){
    console.log(item);
}

// !数组的索引
for (let index  of arr6.keys()){
  console.log(index);
}

// !同时输出数组的内容和索引 entries()

let arr7=['jspang','技术胖','大胖逼逼叨']
for (let [index,val] of arr7.entries()){
    console.log(index+':'+val);
}
// !entries( )实例方法: entries()实例方式生成的是Iterator形式的数组，
let arr8=['jspang','技术胖','大胖逼逼叨']
let list = arr8.entries();
console.log(list)
console.log(list.next().value);
console.log(list.next().value);
console.log(list.next().value);