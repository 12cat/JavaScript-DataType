/*
 * -------------------------------------------------
 *                         排序
 * -------------------------------------------------
 */

// 用于检测数组
function CArray(num) {
    this.dataStore = new Array(num);
    this.pos = 0;
    this.num = num;
    this.insert = insert;
    this.show = show;
    this.setData = setData;

    this.swap = swap;

    this.bubbleSort = bubbleSort;
    this.selectionSort = selectionSort;
    this.insertionSort = insertionSort;

    this.shellSort = shellSort;
    this.mergeSort = mergeSort;
    this.quickSort = quickSort;
}

function setData() {
    for (var i=0; i<this.num; i++) {
        this.dataStore[i] = Math.floor(Math.random() * this.num);
    }
}

function clear() {
    for (var i=0; i<this.dataStore.length; i++) {
        this.dataStore[i] = 0;
    }
}

function insert(e) {
    this.dataStore[this.pos++] = e;
}

function show() {
    var str = "";
    for (var i=0; i<this.dataStore.length; i++) {
        str += this.dataStore[i] + " ";
        if (i>0 && i%10==0) {
            str += "\n";
        }
    }
    console.log(str);
}

function swap(arr, i, j) {
    arr[i] = arr[i] + arr[j];
    arr[j] = arr[i] - arr[j];
    arr[i] = arr[i] - arr[j];
}

// 冒泡排序
function bubbleSort() {
    console.log("bubbleSort:");
    var num = this.dataStore.length;
    for (var outer=num; outer>1; outer--) {
        for (var inner=0; inner<=outer-1; inner++) {
            if (this.dataStore[inner]>this.dataStore[inner+1]) {
                swap(this.dataStore, inner, inner+1);
            }
        }
        //this.show();
    }
}

// 选择排序
function selectionSort() {
    console.log("selectionSort:");
    for (var outer=0; outer<this.dataStore.length-1; outer++) {
        for (var inner=outer+1; inner<this.dataStore.length; inner++) {
            if (this.dataStore[inner]<this.dataStore[outer]) {
                swap(this.dataStore, inner, outer);
            }
        }
        //this.show();
    }
}

// 插入排序
function insertionSort() {
    console.log("insertionSort:");
    for (var outer=1; outer<this.dataStore.length; outer++) {
        var temp = this.dataStore[outer];
        for (var inner=outer; inner>0; inner--) {
            if (this.dataStore[inner-1] > temp) {
                this.dataStore[inner] = this.dataStore[inner-1];
            } else {
                break;
            }
        }
        this.dataStore[inner] = temp;
        //this.show();
    }
}

// 动态希尔排序
function shellSort() {
    console.log("shellSort:");
    var len = this.dataStore.length;
    for (var fra=Math.floor(len/2); fra>0; fra=Math.floor(fra/2)) {
        for (var i=fra; i<len; i++){
            for(var j=i-fra; j>=0&&this.dataStore[j]>this.dataStore[fra+j]; j-=fra){
                swap(this.dataStore, j, fra+j)
            }
        }
    }
}

// 并归排序
function merge(left, right) {
    var result = [];
    while (left.length>0 && right.length>0) {
        if (left[0]<right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return result.concat(left).concat(right);
}
function mSort(items) {

    if (items.length == 1) {
        return items;
    }
    var middle = Math.floor(items.length/2),
        left = items.slice(0, middle),
        right = items.slice(middle);
    return merge(mSort(left), mSort(right));
}
function mergeSort() {
    console.log("mergeSort:");
    this.dataStore = mSort(this.dataStore);
}

// 快速排序
function quickSort() {
    console.log("quickSort:");
    this.dataStore = qSort(this.dataStore);
}
function qSort(arr) {
    if (arr.length == 0) {
        return [];
    }
    var left = [],
        right = [],
        pivot = arr[0];     // 基准值
    for (var i=1; i<arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return qSort(left).concat(pivot, qSort(right));
}


var arr = new CArray(10);
arr.setData();
arr.show();

//arr.selectionSort();
//arr.insertionSort();
//arr.bubbleSort();
//arr.shellSort();
//arr.mergeSort();
arr.quickSort();
arr.show();

// var start = new Date().getTime();
// arr.bubbleSort();
// console.log(new Date().getTime() - start);

// arr.setData();
// start = new Date().getTime();
// arr.selectionSort();
// console.log(new Date().getTime() - start);

// arr.setData();
// start = new Date().getTime();
// arr.insertionSort();
// console.log(new Date().getTime() - start);

