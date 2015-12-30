/*
 * ---------------------------------------
 *                  对象
 * ---------------------------------------
 * 定义一个存款对象
 *      包含一个属性amount记录存款余额
 *      包含一个存款方法deposit
 *      包含一个取款方法withdraw
 *      包含一个查询存款方法toString
 */
function Checking(amount) {
    this.balance = amount;
    this.deposit = deposit;
    this.withdraw = withdraw;
    this.toString = toString;
}

function deposit(amount) {
    this.balance += amount;
}

function withdraw(amount) {
    if (amount <= this.balance) {
        this.balance -= amount;
    } else {
        console.log('余额不足！');
    }
}

function toString() {
    return '余额为: ' + this.balance;
}

var account = new Checking(500);
account.deposit(1000);
console.log(account.toString());
account.withdraw(750);
console.log(account.toString());
account.withdraw(800);
console.log(account.toString());