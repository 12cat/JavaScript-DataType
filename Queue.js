/*
 * -------------------------------------------------
 *                         队列
 * -------------------------------------------------
 * 队列实例
 */
function Queue() {
    this.dataStore = [];
    this.length = length;
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
}

// 向队尾添加元素
function enqueue(e) {
    return this.dataStore.push(e);
}

// 取出队首元素
function dequeue() {
    return this.dataStore.shift();
}

// 读取队首元素
function front() {
    return this.dataStore[0];
}

// 读取队尾元素
function back() {
    return this.dataStore[this.length-1];
}

// 队列长度
function length() {
    return this.dataStore.length;
}