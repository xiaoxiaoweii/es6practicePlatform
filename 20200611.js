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

