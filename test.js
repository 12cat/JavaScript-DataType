/*
 * -------------------------------------------------
 *                         demo
 * -------------------------------------------------
 */
function Score() {
    this.student = [];
    this.add = add;
    this.avg = avg;
}

function add(name, score) {
    this.student.push({name: name, score: score});
}

function avg() {
    return this.student.reduce(function(a, b) {
            return a.score + b.score;
        })/this.student.length;
}

var score = new Score();
score.add('李雷', 100);
score.add('韩梅梅', 85);

console.log(score);
console.log(score.avg());