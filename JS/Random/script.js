const playerOneName = "tim"
const playerTwoName = "jenn"
const playerOneMarker = "X"
const playerTwoMarker = "O"

const playerOne = {
    name: "tim",
    marker: "X"
}

const playerTwo = {
    name: "jenn",
    marker: "O"
}

class Player {
    constructor(name, marker) {
        this.name = name
        this.marker = marker
        this.sayName = function () {
            console.log(name)
        }
    }
}

const player = new Player('steve', 'X')
const player2 = new Player('jason', 'O')

class Student {
    constructor(name, grade) {
        this.name = name
        this.grade = grade
    }
    sayName() {
        console.log(this.name)
    }
    goToProm() {
        console.log("Eh.. go to prom?")
    }
}


const studentOne = new Student('Susan', 9);
studentOne.sayName();

const studentTwo = new Student("Jason", 8);
studentTwo.sayName();

function Student() {
}

Student.prototype.sayName = function () {
    console.log(this.name)
}

//EighthGrader.prototype = Student.prototype
EighthGrader.prototype = Object.create(Student.prototype)

function EighthGrader(name) {
    this.name = name
    this.grade = 8
}

function NinthGrader(name) {
    this.name = name
    this.grade = 9
}

// noooo! not again!
NinthGrader.prototype = Object.create(Student.prototype)

NinthGrader.prototype.sayName = function () {
    console.log("HAHAHAHAHAHA")
}

const studentOne1 = new NinthGrader('Josh')
studentOne1.sayName()

const studentTwo2 = new EighthGrader('Mary')
studentTwo2.sayName()

Object.getPrototypeOf(player) === Player.prototype // returns true
Object.getPrototypeOf(player2) === Player.prototype // returns true

Object.getPrototypeOf(player) === Player.prototype

function Person(name) {
    this.name = name
}

Person.prototype.sayName = function () {
    console.log(`Hello, I'm ${this.name}!`)
}

function Player(name, marker) {
    this.name = name
    this.marker = marker
}

Player.prototype.getMarker = function () {
    console.log(`My marker is '${this.marker}'`)
}

// Object.getPrototypeOf(Player.prototype) should 
// return the value of "Person.prototype" instead 
// of "Object.prototype"
Object.getPrototypeOf(Player.prototype) // returns Object.prototype

// Now make `Player` objects inherit from `Person`
Object.setPrototypeOf(Player.prototype, Person.prototype)
Object.getPrototypeOf(Player.prototype) // returns Person.prototype

const player1 = new Player('steve', 'X')
const player3 = new Player('also steve', 'O')

player1.sayName() // Hello, I'm steve!
player3.sayName() // Hello, I'm also steve!

player1.getMarker() // My marker is 'X'
player3.getMarker() // My marker is 'O'