/*
 * -------------------------------------------------
 *                         双向链表
 * -------------------------------------------------
 * 双向链表实例
 */
function Node(e) {
    this.element = e;
    this.previous = null;
    this.next = null;
}

function LList() {
    this.head = new Node('head');
    this.find = find;
    this.findLast = findLast;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.dispReverse = dispReverse;
}

// 遍历链表，查找给定数据
function find(e) {
    var currNode = this.head;
    while (currNode.element != e) {
        currNode = currNode.next;
    }
    return currNode;
}

// 遍历链表，查找最后一个节点
function findLast() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
        currNode = currNode.next;
    }
    return currNode;
}

// 插入到目标元素后面
function insert(newE, e) {
    var newNode = new Node(newE);
    var current = this.find(e);
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
}

// 删除元素
function remove(e) {
    var currNode = this.find(e);
    if (!(currNode.next == null)) {
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous;
        currNode.next = null;
        currNode.previous = null;
    }
}

// 显示链表
function display() {
    var currNode = this.head;
    while (!(currNode.next==null)) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}

// 反向显示链表
function dispReverse() {
    var currNode = this.findLast();
    while (!(currNode.previous == null)) {
        console.log(currNode.element);
        currNode = currNode.previous;
    }
}


var c = new LList();
c.insert('Conway', 'head');
c.insert('Russellville', 'Conway');
c.insert('Alma', 'Russellville');
c.display();
c.remove('Russellville');
c.display();
c.dispReverse();