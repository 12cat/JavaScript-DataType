/*
 * -------------------------------------------------
 *                         图
 * -------------------------------------------------
 * 图实例
 */
function Vertex(label) {
    this.label = label;
    this.flag = false;
}

function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for (var i=0; i<this.vertices; i++) {
        this.adj[i] = [];
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;

    this.dfs = dfs;
    this.dfsRun = dfsRun;
    this.dfs2 = dfs2;
    this.dfsRun2 = dfsRun2;

    this.pathTo = pathTo;
    this.pathToRun = pathToRun;
}

function addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}

// 通过打印所有顶点及相邻顶点列表的方式显示图
function showGraph() {
    for (var i=0; i<this.vertices; i++) {
        var str = i + '-> ';
        for (var j=0; j<this.vertices; j++) {
            if (this.adj[i][j] != undefined) {
                str += this.adj[i][j] + ' ';
            }
        }
        console.log(str);
    }
}

// 深度优先搜索
function dfs() {
    var marked = [];
    for (var i=0; i<this.vertices; i++) {
        marked[i] = false;
    }
    this.dfsRun(0, marked);
}
function dfsRun(v, marked) {        // 回调函数
    console.log('深度优先搜索: ' + v);
    marked[v] = true;
    for (var i=0; i<this.adj[v].length; i++) {
        if (!marked[this.adj[v][i]]) {
            this.dfsRun(this.adj[v][i], marked);
        }
    }
}

// 广度优先搜索
function dfs2() {
    var arr1 = [0], // 查询列表
        arr2 = {};  // 已查询列表
    this.dfsRun2(0, arr1, arr2);
}
function dfsRun2(v, arr1, arr2) {        // 回调函数
    if (!arr2[arr1[v]]) {
        console.log('广度优先搜索: ' + arr1[v]);
        arr2[arr1[v]] = true;
        for (var i=0; i<this.adj[arr1[v]].length; i++) {
            arr1.push(this.adj[arr1[v]][i]);
        }
    }
    if (v+1 < arr1.length) {
        this.dfsRun2(v+1, arr1, arr2);
    }
}

// 最短路径查询
function pathTo(n) {
    var arr1 = [this.adj[0]], // 查询列表
        arr2 = {}, // 已查询列表
        path = [];
    this.pathToRun(n, );
    // do {
    //     result.push(path[n]);
    //     n = path[n];
    //     console.log(n);
    // } while(n>0);
    return arr2;
}
function pathToRun(n, path) {
    var arr1 = [0], // 查询列表
        arr2 = {};  // 已查询列表
    if (n!=0) {
        this.pathToRun2(0, n, arr1, arr2, path);
    }
}
function pathToRun2(v, n, arr1, arr2, path) {
    if (!arr2[arr1[v]]) {
        console.log('最短路径查询: ' + arr1[v]);
        arr2[arr1[v]] = true;
        for (var i=0; i<this.adj[arr1[v]].length; i++) {
            console.log(this.adj[arr1[v]][i]);
            console.log(v+' '+n);
            path[this.adj[arr1[v]][i]] = v;
            console.log(path)
            if (this.adj[arr1[v]][i] == n) {
                return;
            } else {
                arr1.push(this.adj[arr1[v]][i]);
            }
        }
    }
    if (v+1 < arr1.length) {
        this.pathToRun2(v+1, n, arr1, arr2, path);
    }
}



//    0
//  1   2
//  3   4
// 6 5 8 7
// arr1 [0, 1, 2, 0, 3, 0, 4, 1, 6, 5, 2, 8, 7]
// arr2 {0:true, 1:true, 2:true, 3:true, 4:true, 6:true, 5:true, 8:true, 7true}
// path {1:0, 2:0, 3:1, 4:2, 6:3, 5:3, 8:4, 7:4}
// result [0, 2, 4, 8]

var g = new Graph(9);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.addEdge(3, 6);
g.addEdge(3, 5);
g.addEdge(4, 8);
g.addEdge(4, 7);
g.showGraph();
console.log(g);
g.dfs();    // 0 1 3 6 5 2 4 8 7
g.dfs2();   // 0 1 2 3 4 6 5 8 7
console.log(g.pathTo(8)); // [8, 4, 2, 0]