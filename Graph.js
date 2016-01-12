/*
 * -------------------------------------------------
 *                         图
 * -------------------------------------------------
 * 图实例
 */
// function Vertex(label) {
//     this.label = label;
//     this.flag = false;
// }

function Graph(v) {
    this.vertices = [v];
    this.edges = 0;
    this.adj = {};
    this.adj[v] = [];

    this.addVertice = addVertice;
    this.addEdge = addEdge;
    this.show = show;

    this.depth = depth;
    this.depthRun = depthRun;
    this.range = range;
    this.rangeRun = rangeRun;

    this.pathTo = pathTo;
    this.pathToRun = pathToRun;

    this.topSort = topSort;
    this.topSortHelper = topSortHelper;
}

function addVertice(v) {
    this.vertices.push(v);
    this.adj[v] = [];
}

function addEdge(v1, v2) {
    if (this.adj[v1] && this.adj[v2]) {
        this.adj[v1].push(v2);
        this.adj[v2].push(v1);
        this.edges++;
    }
}

// 通过打印所有顶点及相邻顶点列表的方式显示图
function show() {
    for (var i=0; i<this.vertices.length; i++) {
        var str = this.vertices[i] + ': ';
        for (var j=0; j<this.adj[this.vertices[i]].length; j++) {
            str += '->' + this.adj[this.vertices[i]][j];
        }
        console.log(str);
    }
}

// 深度优先搜索
function depth() {
    var marked = {__depth: '深度优先搜索：'};  // 已查标记
    for (var i=0; i<this.vertices.length; i++) {
        marked[this.vertices[i]] = false;
    }
    this.depthRun(this.vertices[0], marked);
    console.log(marked.__depth);
}
function depthRun(v, marked) {              // 回调函数
    var that = this;
    marked[v] = true;
    marked.__depth += '-> ' + v;
    for (var i=0; i<this.adj[v].length; i++) {
        if (!marked[this.adj[v][i]])
            this.depthRun(this.adj[v][i], marked);
    }
}

// 广度优先搜索
function range() {
    var arr1 = [this.vertices[0]],        // 查询列表
        arr2 = {__range: '广度优先搜索：'};  // 已查询列表
    this.rangeRun(0, arr1, arr2);
    console.log(arr2.__range);
}
function rangeRun(v, arr1, arr2) {        // 回调函数
    if (!arr2[arr1[v]]) {
        arr2.__range += '-> ' + arr1[v];
        arr2[arr1[v]] = true;
        for (var i=0; i<this.adj[arr1[v]].length; i++) {
            arr1.push(this.adj[arr1[v]][i]);
        }
    }
    if (v+1 < arr1.length)
        this.rangeRun(v+1, arr1, arr2);
}

// 最短路径查询
function pathTo(v1, v2) {
    var arr1 = [this.vertices[0]],  // 查询列表
        arr2 = {},                  // 已查询列表
        str = v1+ ' 到 ' +v2+ ' 的最短路径：',
        v = v2;
    this.pathToRun(0, [v1, v2], arr1, arr2);
    console.log(arr2)
    while (v!=v1 && v) {
        str += '-> ' + v;
        v = arr2[v];
    }
    if (v) {
        console.log('此路不通！');
    } else {
        console.log(str + '-> ' +v1);
    }
}
function pathToRun(n, arr, arr1, arr2) {
    if (n==0) {
        arr2[arr1[n]] = true;
    }
    for (var i=0; i<this.adj[arr1[n]].length; i++) {
        if (!arr2[this.adj[arr1[n]][i]]) {
            arr2[this.adj[arr1[n]][i]] = arr1[n];
            arr1.push(this.adj[arr1[n]][i]);
        }
        if (arr2[arr[0]] && arr2[arr[1]]) {
            return;
        }
    }
    if (n+1 < arr1.length) {
        this.pathToRun(n+1, arr, arr1, arr2);
    }
}

// 拓扑排序
// ## 这个方法有问题
function topSort() {
    var stack = [],
        visited = [];
        for (var i=0; i<this.vertices.length; i++) {
            visited[this.vertices[i]] = false;
        }
        for (var i=0; i<this.vertices.length; i++) {
            if (visited[this.vertices[i]] == false) {
                this.topSortHelper(this.vertices[i], visited, stack);
            }
        }
        console.log(stack);
}
function topSortHelper(v, visited, stack) {
    visited[v] = true;
    for (var i=0; i<this.adj[v].length; i++) {
        if (!visited[this.adj[v][i]]) {
            this.topSortHelper(this.adj[v][i], visited, stack);
        }
    }
    stack.push(v);
}



//    A
//  B   C
//  D   I
// E F G H
// arr1 [A, B, C, D, E, F, G, H, I, G]
// path {A:true, B:A, C:A, D:B, I:C, E:D, F:D, G:I, H:I}
var g = new Graph('A');
g.addVertice('B');
g.addVertice('C');
g.addVertice('D');
g.addVertice('E');
g.addVertice('F');
g.addVertice('G');
g.addVertice('H');
g.addVertice('I');
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'I');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('I', 'G');
g.addEdge('I', 'H');
// g.addEdge('H', 'I');
// g.addEdge('E', 'G');
g.show();
console.log(g);
g.depth();
g.range();
g.pathTo('C', 'E');

g.topSort();