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


var arr = new CArray(10);
arr.setData();

arr.selectionSort();
//arr.insertionSort();
//arr.bubbleSort();
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

