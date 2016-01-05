/*
 * -------------------------------------------------
 *                         散列表
 * -------------------------------------------------
 * 散列表实例
 */
function HashTable() {
    // 散列表的长度一般为质数
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.put = put;
    this.get = get;
}

// 散列函数
function simpleHash(data) {
    var total = 0;
    for (var i=0; i<data.length; i++) {
        total += data.charCodeAt(i);
    }
    return total % this.table.length;
}

// 另一种散列函数
function betterHash(data) {
    const H = 37;
    var total = 0;
    for (var i=0; i<data.length; i++) {
        // H * total ?
        total += H * total + data.charCodeAt(i);
    }
    total = total % this.table.length;
    if (total < 0) {
        total += this.table.length - 1;
    }
    return parseInt(total);
}

// 插入元素
function put(data) {
    var pos = this.betterHash(data);
    this.table[pos] = data;
}

function showDistro() {
    var n = 0;
    for (var i=0; i<this.table.length; i++) {
        if (this.table[i] != undefined) {
            console.log(i + ': ' + this.table[i]);
        }
    }
}

function get(key) {
    return this.table[this.betterHash(key)];
}

var s = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike"];
var h = new HashTable();
for (var i=0; i<s.length; i++) {
    h.put(s[i]);
}
h.showDistro();