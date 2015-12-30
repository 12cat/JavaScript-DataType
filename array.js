/*
 * -------------------------------------------------
 *                         数组
 * -------------------------------------------------
 * 数组的常用操作
 */

// 数组的创建
var arr1 = [],
    arr2 = new Array(),
    arr3 = [1, 2, 3],
    arr4 = new Array(1, 2, 3),
    arr5 = new Array(10);

// 数组长度（只记录下标为数值的元素）
var length = arr.length

// 判断是否为数组
Array.isArray(arr);     // true/false

// 数组中元素读取
var n = arr[0];

arr.pop();      // 删除并获取目标数组末尾的元素
arr.shift();    // 删除并获取目标数组头部的元素

// 数组中元素赋值
arr[0] = 2;
arr[arr.length] = 12;

arr.push(2, 3);     // 向目标数组末尾添加元素，并返回改变后数组的长度
arr.unshift(2, 3);  // 向目标数组头部添加元素，并返回改变后数组的长度

// 字符串转换为数组
var str = 'the quick brown fox jumped over the lazy dog';
var arr = str.split(' ');

// 数组转换为字符串
var arr = [1, 2, 3];
arr.toString();     // "1,2,3"
arr.join();         // "1,2,3"
arr.join('||');     // "1||2||3"

// 查询元素在数组中的下标，不存在返回-1
var arr = [1, 2, 3, 1];
arr.indexOf(1);     // 0
arr.indexOf(4);     // -1

arr.lastIndexOf(1); // 3
arr.lastIndexOf(4); // -1

// 合并并创建新数组（可以用来做数组的深层复制）
var arr1 = ['a', 'b', 'c'],
    arr2 = ['d', 'e', 'f'];
var arr3 = arr1.concat(arr2);
arr3    // ['a', 'b', 'c', 'd', 'e', 'f']
arr1    // ['a', 'b', 'c']
arr2    // ['d', 'e', 'f']

// 万能方法splice
var arr1 = [1, 2, 3, 4, 5];
var arr2 = arr1.splice(1, 3);       // 删除并获取目标数组中的部分元素
arr1    // [1, 5]
arr2    // [2, 3, 4]
var arr2 = arr1.splice(1, 0, 2, 3); // 添加目标数组中的部分元素
arr1    // [1, 2, 3, 2, 3, 4 ,5]
arr2    // []

// 删除元素
var arr = [0, 1, 2, 3];
delete arr[1];
arr     // [0, undefined, 2, 3]

/* 数组排序 */
var arr = [0, 2, 1, 3];
arr.reverse();  // 数组翻转
arr     // [3, 1, 2, 0]
function compare(a, b) {
    return a-b;
}
arr.sort(compare);
arr     // [0, 1, 2, 3]

/*
 * -------------------------------------------------
 * 数组迭代
 */
// forEach 接受一个函数作为参数,对数组中的每个元素使用该函数
function square(n) {
    console.log(n * n);
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.forEach(square);

// every 判断所有元素都符合
function isEven(n) {
    return n % 2 == 0;
}
var arr = [2,4,6,8,10];
var even = arr.every(isEven);
if (even) {
    console.log('所有的数都是偶数。');
} else {
    console.log('不是所有的数都是偶数。');
}

// some 判断有元素符合
function isEven(n) {
    return n % 2 == 0;
}
var arr = [2,4,6,8,10];
var even = arr.some(isEven);
if (even) {
    console.log('这些数值中包含偶数。');
} else {
    console.log('这些数值中不包含偶数。');
}

// reduce 返回累计值
function add(a, b) {
    return a + b;
}
var arr = [1, 2, 3, 4, 5];
var sum = arr.reduce(add);      // 15

// map 返回所有元素运行结果的新数组
function fun(n) {
    return ++n;
}
var arr = [0, 1, 2, 3];
var arr2 = arr.map(fun);
arr2    // [1, 2, 3, 4]

// filter 返回符合要求的元素的新数组
function passing(n) {
    return n >= 60;
}
var arr = [34, 45, 67, 74, 25, 84];
var arr2 = arr.filter(passing);
arr2    // [67, 74, 84]