/*
 * -------------------------------------------------
 *                         链表
 * -------------------------------------------------
 * 链表实例
 */
function Node(e) {
    this.element = e;
    this.next = null;
}

function LList() {
    this.head = new Node('head');
    this.find = find;
    this.findPrevious = findPrevious;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
}

// 遍历链表，查找给定数据
function find(e) {
    var currNode = this.head;
    while (currNode.element != e) {
        currNode = currNode.next;
    }
    return currNode;
}

// 查找目标元素的前一个元素
function findPrevious(e) {
    var currNode = this.head;
    while (!(currNode.next == null) && (currNode.next.element != e)) {
        currNode = currNode.next;
    }
    return currNode;
}

// 插入到目标元素后面
function insert(newE, e) {
    var newNode = new Node(newE);
    var current = this.find(e);
    newNode.next = current.next;
    current.next = newNode;
}

// 删除元素
function remove(e) {
    var prevNode = this.findPrevious(e);
    if (!(prevNode.next == null)) {
        prevNode.next = prevNode.next.next;
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


var c = new LList();
c.insert('Conway', 'head');
c.insert('Russellville', 'Conway');
c.insert('Alma', 'Russellville');
c.display();
c.remove('Russellville');
c.display();