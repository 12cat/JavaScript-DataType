/*
 * -------------------------------------------------
 *                         列表
 * -------------------------------------------------
 * 列表实例
 */
function List() {
    this.listSize = 0;              // 列表元素容量
    this.pos = 0;                   // 列表当前位置
    this.length = length;           // 列表中元素数量
    this.clear = clear;             // 清空列表
    this.toString = toString;       // 字符串表达形式
    this.getElement = getElement;   // 当前位置的元素
    this.insert = insert;           // 在指定元素后面插入元素
    this.append = append;           // 列表末尾加入元素
    this.remove = remove;           // 删除元素
    this.front = front;             // 当前位置移动到开始
    this.end = end;                 // 当前位置移动到最后
    this.prev = prev;               // 当前位置后移
    this.next = next;               // 当前位置前移
    this.currPos = currPos;         // 列表当前位置
    this.moveTo = moveTo;           // 将当前位置移动到指定位置
    this.dataStore = [];            // 列表容器
    this.find = find;               // 查找元素，返回下标
}

function length() {
    return this.listSize;
}

function clear() {
    // this.dataStore.length = this.listSize = this.pos = 0;
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}

function toString() {
    return this.dataStore;
}

function getElement() {
    return this.dataStore[this.pos];
}

function insert(e, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos+1, 0, e);
        ++this.listSize;
        return true;
    }
    return false;
}

function append(e) {
    this.dataStore[this.listSize++] = e;
}

function remove(e) {
    var foundAt = this.find(e);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}

function front() {
    this.pos = 0;
}

function end() {
    this.pos = this.listSize - 1;
}

function prev() {
    if (this.pos > 0) {
        this.pos--;
    }
}

function next() {
    if (this.pos < this.listSize-1) {
        this.pos++;
    }
}

function currPos() {
    return this.pos;
}

function moveTo(i) {
    this.pos = i;
}

function find(e) {
    for (var i=0; i<this.dataStore.length; i++) {
        if (this.dataStore[i] == e) {
            return i;
        }
    }
    return -1;
}