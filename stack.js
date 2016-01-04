/*
 * -------------------------------------------------
 *                         栈
 * -------------------------------------------------
 * 栈实例
 */
function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = length;
    this.clear = clear;
}

function push(e) {
    this.dataStore[this.top++] = e;
}

function pop() {
    return this.dataStore[--this.top];
}

function peek() {
    return this.dataStore[this.top-1];
}

function length() {
    return this.top;
}

function clear() {
    this.dataStore = [];
    this.top = 0;
}

var s = new Stack();
s.push('1');
s.push('2');
s.push('3');
console.log(s);
console.log(s.peek())
s.clear();
console.log(s);