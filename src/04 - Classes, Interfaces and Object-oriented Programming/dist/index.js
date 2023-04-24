"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('Invalid amount');
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
}
let account = new Account(1, 'Mosh', 0);
account.deposit(100);
console.log(typeof account);
console.log(account instanceof Account);
console.log(account.balance);
class SeatAssignments {
}
let seats = new SeatAssignments();
seats.A1 = 'Mosh';
seats.A2 = 'John';
console.log(seats);
class Ride {
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
    ;
    static get activeRides() {
        return this._activeRides;
    }
}
Ride._activeRides = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(Ride.activeRides);
//# sourceMappingURL=index.js.map