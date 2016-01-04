/*
 * -------------------------------------------------
 *                         字典
 * -------------------------------------------------
 * 字典实例
 */
function Dictionary() {
    this.dataStore = [];
    this.length = length;
    this.add = add;
    this.find = find;
    this.remove = remove;
    this.clear = clear;
    this.show = show;
}

function length() {
    return Object.keys(this.dataStore).length;
}

function add(key, val) {
    this.dataStore[key] = val;
}

function find(key) {
    return this.dataStore[key];
}

function remove(key) {
    delete this.dataStore[key];
}

function clear() {
    var keys = Object.keys(this.dataStore);
    for (var i in keys) {
        delete this.dataStore[keys[i]];
    }
}

function show() {
    var keys = Object.keys(this.dataStore);
    // 调用 Object 类的 keys() 方法可以返回传入参数中存储的所有键
    for (var i in keys) {
        console.log(keys[i] + ' -> ' + this.dataStore[keys[i]]);
    }
}

var pbook = new Dictionary();
pbook.add('Mike', '123');
pbook.add('David', '345');
pbook.add('Cynthia', '456');
console.log(pbook.find('David'));
pbook.remove('David');
pbook.show();
console.log(pbook)
console.log(pbook.length())
pbook.clear();
console.log(pbook)