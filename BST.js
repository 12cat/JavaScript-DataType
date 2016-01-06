/*
 * -------------------------------------------------
 *                         二叉树
 * -------------------------------------------------
 * 二叉树实例
 */
function Node(data, left, right) {
    this.data = data;
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
    this.preOrder = preOrder;
    this.postOrder = postOrder;
    this.getMin = getMin;
    this.getMax = getMax;
    this.find = find;
    this.remove = remove;
    this.removeNode = removeNode;
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
            if (data < current.data) {
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

// 先序排列
function preOrder(node) {
    if (!(node==null)) {
        console.log(node.show());
        preOrder(node.left);
        preOrder(node.right);
    }
}

// 后续排序
function postOrder(node) {
    if (!(node==null)) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show());
    }
}

// 获取最小值
function getMin() {
    var current = this.root;
    while (!(current.left==null)) {
        current = current.left;
    }
    return current;
}

// 获取最大值
function getMax() {
    var current = this.root;
    while (!(current.right==null)) {
        current = current.right;
    }
    return current;
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

// 删除节点
function remove(data) {
    root = removeNode(this.root, data);
}

function removeNode(node, data) {
    if (node==null) {
        return null;
    }
    if (data == node.data) {
        // 没有子节点的节点
        if (node.left==null && node.right==null) {
            return null;
        }
        // 没有左子节点的节点
        if (node.left==null) {
            return ndoe.right;
        }
        // 没有右子节点的节点
        if (node.right==null) {
            return node.left;
        }
        // 有两个子节点的节点
        var tempNode = new BST(node.right).getMin();
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
    } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
    } else {
        node.right = removeNode(node.right, data);
        return node;
    }
}


var n = new BST();
n.insert(92);
n.insert(22);
n.insert(56);
n.insert(10);
n.insert(81);
n.insert(30);
n.insert(77);
n.insert(12);
//       92
//    22
// 10    56
//   12 30  81
//         77
console.log('Inorder traversal: ');
n.inOrder(n.root);
console.log('Preorder traversal: ');
n.preOrder(n.root);
console.log('Postorder traversal: ');
n.postOrder(n.root);
console.log(n.getMin().data);
console.log(n.getMax().data);
console.log(n.find(92));
n.remove(56);
n.inOrder(n.root)