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
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    walk() {
        console.log('Walking');
    }
}
class Student extends Person {
    constructor(firstName, lastName, studentId) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log('Taking a test');
    }
}
class Teacher extends Person {
    get fullName() {
        return 'Professor ' + super.fullName;
    }
}
class Principal extends Person {
    get fullName() {
        return 'Principal ' + super.fullName;
    }
}
let student = new Student('Mosh', 'Hamedani', '1');
console.log(student);
let teacher = new Teacher('John', 'Smith');
console.log(teacher.fullName);
function printNames(people) {
    for (let person of people)
        console.log(person.fullName);
}
printNames([
    new Student('Mosh', 'Hamedani', '1'),
    new Teacher('John', 'Smith'),
    new Principal('Mary', 'Smith')
]);
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log('Rednering a circle');
    }
}
let circle = new Circle(3, 'blue');
circle.render();
class GoogleCalendar {
    constructor(name) {
        this.name = name;
    }
    addEvent() {
    }
    removeEvent() {
    }
}
//# sourceMappingURL=index.js.map