/*
 * -------------------------------------------------
 *                       二叉树计数
 * -------------------------------------------------
 * 二叉树实例
 * 计数
 */
function Node(data, left, right) {
    this.data = data;
    this.count = 1;
    this.left = left;
    this.right = right;
    this.show = show;
}

function show() {
    return this.data;
}

function BST(node) {
    this.root = node || null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.find = find;
}

// 插入
function insert(data) {
    var n = new Node(data, null, null);
    if (this.root == null) {
        this.root = n;
    } else {
        var current = this.root;
        var parent;
        while (true) {
            parent = current;
            if (data == current.data) {
                current.count++;
                break;
            } else if (data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = n;
                    break;
                }
            } else {
                current = current.right;
                if (current == null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

// 中序排列（得到结果从小到大)
function inOrder(node) {
    if (!(node==null)) {
        inOrder(node.left);
        console.log(node.show());
        inOrder(node.right);
    }
}

// 获取给定值
function find(data) {
    var current = this.root;
    while (current != null) {
        if (current.data == data) {
            return current;
        } else if (data < current.data) {
            current = current.left;
        } else {
            current = current.right;
        }
    }
    return null;
}



var n = new BST();
n.insert(92);
n.insert(22);
n.insert(56);
n.insert(10);
n.insert(12);
n.insert(81);
n.insert(30);
n.insert(77);
n.insert(12);
n.insert(12);
n.insert(12);
n.insert(12);
console.log('Inorder traversal: ');
n.inOrder(n.root);
console.log(n.find(12).count);