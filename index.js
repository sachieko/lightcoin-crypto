class Account {

  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    let bal = 0;
    for (const trans of this.transactions) {
      bal += trans.value;
    }
    return bal;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;


  }

  commit() {
    if (this.isAllowed()) {
      this.time = new Date();
      this.account.addTransaction(this);
      return true;
    }
    return false;
  }
}
class Withdrawal extends Transaction {

  get value() {
    return - this.amount;
  }

  isAllowed() {
    if (this.account.balance + this.value > 0) {
      return true;
    }
    return false;
  }
}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }
  isAllowed() {
    return true;
  }
}




// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account("snow-patrol");
const t0 = new Deposit(245.50, myAccount);
console.log(t0.commit());
console.log('Transaction 0:', t0);

const t1 = new Withdrawal(50.25, myAccount);
console.log(t1.commit());
console.log('Transaction 1:', t1);

const t2 = new Withdrawal(9.24, myAccount);
console.log(t2.commit());
console.log('Transaction 2:', t2);
// Can't withdraw 1 dollar over remaining amount.
const t3 = new Withdrawal(187.00, myAccount);
console.log(t3.commit());
console.log('Transaction 3:', t3);
console.log('Balance:', myAccount.balance);
