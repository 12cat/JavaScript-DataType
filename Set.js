/*
 * -------------------------------------------------
 *                         集合
 * -------------------------------------------------
 * 集合实例
 */
function Set() {
    this.dataStore = [];
    this.add = add;
    this.remove = remove;
    this.size = size;
    this.union = union;
    this.contains = contains;
    this.intersect = intersect;
    this.subset = subset;
    this.difference = difference;
    this.show = show;
}

function size() {
    return this.dataStore.length;
}

function add(data) {
    if (this.dataStore.indexOf(data) < 0) {
        this.dataStore.push(data);
        return true;
    } else {
        return false;
    }
}

function remove(data) {
    var pos = this.dataStore.indexOf(data);
    if (pos > -1) {
        this.dataStore.splice(pos, 1);
        return true;
    } else {
        return false;
    }
}

function show() {
    return this.dataStore;
}

// 并集
function union(set) {
    var tempSet = new Set();
    for (var i=0; i<this.dataStore.length; i++) {
        tempSet.add(this.dataStore[i]);
    }
    for (var i=0; i<set.dataStore.length; i++) {
        if (!tempSet.contains(set.dataStore[i])) {
            tempSet.dataStore.push(set.dataStore[i]);
        }
    }
    return tempSet;
}
// 检查一个成员是否属于该集合
function contains(data) {
    if (this.dataStore.indexOf(data) > -1) {
        return true;
    } else {
        false;
    }
}

// 交集
function intersect(set) {
    var tempSet = new Set();
    for (var i=0; i<this.dataStore.length; i++) {
        if (set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}

// 子集（判断this集合是否是其他集合的子集）
function subset(set) {
    if (this.size() > set.size()) {
        return false;
    } else {
        for (var i=0; i<this.dataStore.length; i++) {
            if (!set.contains(this.dataStore[i])) {
                return false;
            }
        }
    }
    return true;
}

// 补集（属于this但不属于其它集合的成员）
function difference(set) {
    var tempSet = new Set();
    for (var i=0; i<this.dataStore.length; i++) {
        if (!set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}

var n = new Set();
n.add('David');
n.add('Jennifer');
n.add('Cynthia');
n.add('Mike');
n.add('Raymond');
console.log(n.show());
console.log(n.remove('DDD'));
console.log(n.show());
console.log(n.remove('Mike'));
console.log(n.show());
var c = new Set();
c.add('David');
c.add('Jennifer');
c.add('Cynthia');
c.add('Mike');
c.add('Raymond');
c.add('David2');
c.add('Jennifer2');
c.add('Cynthia2');
c.add('Mike2');
c.add('Raymond2');
var dmp1 = c.union(n);
console.log(c.show());
console.log(dmp1.show());
var dmp2 = n.intersect(c);
console.log(dmp2.show());
console.log(n.subset(c));
console.log(c.difference(n).show());