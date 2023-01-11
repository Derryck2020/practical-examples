
function newAccount (name, initialBalance){
    let balance = initialBalance;
    function showBalance() {
        console.log(`Hey ${name}, your balance is ${balance}`);
    };
    function deposit(amount){
        balance += amount;
        console.log(`Hey ${name}, your balance is ${balance}`);
    };
    function withdraw(amount){
        if (amount > balance){
            console.log(`${name}, You have insufficient balance`)
        } else {
            balance -= amount;
            console.log(`Hey ${name}, your balance is ${balance}`);
        }
    };
    return {showBal:showBalance, dep:deposit, wid:withdraw};
};

const john = newAccount('john', 200)

john.showBal();
john.dep(300);
john.wid(1100);

const mike = newAccount('MoneyMan', 1500);

mike.showBal();
mike.wid(200);
mike.dep(3000)
mike.wid(5000);