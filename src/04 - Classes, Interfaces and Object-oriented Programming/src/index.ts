/* Creating Classes */

class Account {
    // make nickname optional
    nickname?: string;

    constructor(
        public readonly id: number,
        public owner: string,
        private _balance: number) {
    }

    deposit(amount: number): void {
        if (amount <= 0)
            throw new Error('Invalid amount');
        this._balance += amount;
    }


    get balance(): number {
        return this._balance;
    }


    // set balance(value: number) {
    //     if (value < 0)
    //         throw new Error('Invalid value');
    //
    //     this._balance = value;
    // }
}

/* Creating Objects */

let account = new Account(1, 'Mosh', 0);
account.deposit(100);

console.log(typeof account);               //object
console.log(account instanceof Account);   //true
console.log(account.balance);


/* Index Signatures */

class SeatAssignments {
    [seatNumber: string]: string

}

let seats = new SeatAssignments();

seats.A1 = 'Mosh';
seats.A2 = 'John';

// identical
// seats['A1'] = 'Mosh';
console.log(seats);

/* Static Members */

class Ride {
    private static _activeRides: number = 0;

    start() {
        Ride._activeRides++;
    }

    stop() {
        Ride._activeRides--
    };


    static get activeRides(): number {
        return this._activeRides;
    }
}

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

console.log(Ride.activeRides);

