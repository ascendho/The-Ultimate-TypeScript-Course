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

/* Inheritance */

class Person {
    constructor(public firstName: string, public lastName: string) {
    }

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    // private method won't be inherited
    // private walk() {
    //      console.log('Walking');
    //  }

    // protected method will be inherited,
    // but you should rarely use it
    protected walk() {
        console.log('Walking');
    }

}

class Student extends Person {
    constructor(firstName: string, lastName: string, public studentId: string) {
        super(firstName, lastName);
    }

    takeTest() {
        console.log('Taking a test');
    }
}

class Teacher extends Person {

    /* Method Overriding*/
    override get fullName() {
        return 'Professor ' + super.fullName;
    }

}

class Principal extends Person {
    /* Method Overriding*/
    override get fullName() {
        return 'Principal ' + super.fullName;
    }
}


let student = new Student('Mosh', 'Hamedani', '1');
console.log(student);

let teacher = new Teacher('John', 'Smith');
console.log(teacher.fullName);


/* Polymorphism */

function printNames(people: Person[]) {
    for (let person of people)
        console.log(person.fullName);
}

printNames([
    new Student('Mosh', 'Hamedani', '1'),
    new Teacher('John', 'Smith'),
    new Principal('Mary', 'Smith')]
);

/* Abstract Classes and Methods */

abstract class Shape {
    constructor(public color: string) {
    }

    abstract render(): void;
}

class Circle extends Shape {
    constructor(public radius: number, color: string) {
        super(color);
    }

    override render() {
        console.log('Rednering a circle')
    }
}

let circle = new Circle(3, 'blue');
circle.render();

/* Interfaces */

interface Calendar {
    name: string;

    addEvent(): void;

    removeEvent(): void;
}

interface CloudCalendar extends Calendar {
    sync(): void;
}

class GoogleCalendar implements Calendar {

    constructor(public name: string) {
    }

    addEvent(): void {
    }

    removeEvent(): void {
    }

}

/* Exercises */

// 1

class Logger {
    constructor(public logFile: string) {
    }

    log(message: string) {
        console.log(message);
    }
}

// 2

class Person2 {
    constructor(public firstName: string, public lastName: string) {
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// 3

class Employee extends Person {
    constructor(
        firstName: string,
        lastName: string,
        public salary: number) {
        super(firstName, lastName);
    }
}

// 4

// What is the difference between private and protected members
// Private members are not inherited by child classes.

// 5

interface Address {
    street: string;
    city: string;
    zipCode: number;
}

interface Employee {
    name: string;
    salary: number;
    address: Address;
}