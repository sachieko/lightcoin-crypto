class Account {

  constructor(username) {
    this.username = username;
    this.balance = 0;
  }
}

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;


  }

  commit() {
    this.account.balance += this.value;
  }
}
class Withdrawal extends Transaction {

  get value() {
    return - this.amount;
  }

}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }
}




// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account("snow-patrol");
const t0 = new Deposit(245.00, myAccount);
t0.commit();
console.log('Transaction 0:', t0);

const t1 = new Withdrawal(50.25, myAccount);
t1.commit();
console.log('Transaction 1:', t1);

const t2 = new Withdrawal(9.99, myAccount);
t2.commit();
console.log('Transaction 2:', t2);


console.log('Balance:', myAccount.balance);
