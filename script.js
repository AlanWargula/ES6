/*

///////////////////////////////////////////////// let and const

"use strict";

// ES5
var name5 = 'Jane Smith';
var age5 = 23;
console.log(name5, age5);
name5 = 'Jane Miller';
console.log(name5, age5);


// ES6
const name6 = 'Jane Smith';
let age6 = 23;
console.log(name6, age6);
// error trying to change a 'const'      name6 = 'Jane Miller';
// console.log(name6, age6);



// ES5
function driverL5(passed) {
    if (passed) {
        console.log(firstName5); // undefined
        var firstName5 = 'John';
        var yearOfBirth5 = 1990;
    }
    console.log(firstName5, yearOfBirth5);
};

driverL5(true);

// ES6
function driverL6(passed) {

//    console.log(firstName6);     will produce an error "cannot access before init"
    let firstName6;
    const yearOfBirth6 = 1990;

    if (passed) {
        firstName6 = 'John';
    }
    console.log(firstName6, yearOfBirth6);
};

driverL6(true);

let i = 23;

for (let i = 0; i < 5; i++) {
    console.log(i);
};

console.log(i);  // will return i = 23

*/







//////////////////////////////////////////// BLOCKS AND IIFEs
/*
{
    const a = 1;
    let b = 2 ;
    var c = 3;
}

// console.log(a + b);    will produce an error due to block scoped of const and let
console.log(c);

//ES5
(function() {
    var c = 3;
})();
*/













//////////////////////////////////////////// STRINGS
/*

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2016 - year;
};




// ES5
console.log('This is ' + firstName);

// ES6
console.log(`This is ${firstName} ${lastName}, he is ${calcAge(yearOfBirth)}.`);




const n = `${firstName} ${lastName}`;
console.log(n.startsWith('Joh'));    // returns boolean literal, caps sensitive
console.log(n.endsWith('ith'));    // returns boolean literal, caps sensitive
console.log(n.includes('hn '));    // returns boolean literal, caps sensitive
console.log(`${firstName} `.repeat(5));    // returns boolean literal, caps sensitive

*/














//////////////////////////////////////////// ARROW FUNCTIONS

/*
const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el) {
    return 2016 - el;
});
console.log(ages5);

// ES6
let ages6 = years.map(el => 2016 - el);  // argument, arrow, return statement
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}`);
console.log(ages6);

ages6 = years.map((el, index) => {

    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}`;

});
console.log(ages6);
*/















//////////////////////////////////////////// ARROW FUNCTIONS 2

// ES5
/*
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        var self = this;
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
};
box5.clickMe();
*/

// ES6
/*
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {

        document.querySelector('.green').addEventListener('click', () => {

            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);

        });
    }
};
box6.clickMe();
*/

/*
const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {

        document.querySelector('.green').addEventListener('click', () => {

            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);

        });
    }
};
box66.clickMe();
*/
/*
function Person(name) {
    this.name = name;
};

// ES5
Person.prototype.myFriends5 = function(friends) {

    var arr = friends.map(function(el) {
        return this.name + ' is friends with ' + el;
    }.bind(this));
    console.log(arr);
};

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);

*/

/*
// ES6
function Person(name) {
    this.name = name;
};

// ES5

Person.prototype.myFriends6 = function(friends) {

    const arr = friends.map(el => 
    `${this.name} is friends with ${el}`
    );
    console.log(arr);
};

const friends = ['Bob', 'Jane', 'Mark'];
new Person('Mike').myFriends6(friends);
*/

















//////////////////////////////////////////// DESTRUCTURING

// ES5
/*
var john = ['John', 26];
var name = john[0];
var age = john[1];
*/
/*
// ES6
const [name, year] = ['John', 26];
console.log(name, year);

const obj = {
    firstName: 'John',
    lastName: 'Smith',
};

const {firstName, lastName} = obj;
console.log(firstName, lastName);

const {firstName: a, lastName: b} = obj;
console.log(a, b);




function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
};

const [age, retirement] = calcAgeRetirement(1990);
console.log(age);
console.log(retirement);
*/















//////////////////////////////////////////// ARRAYS

const boxes = document.querySelectorAll('.box');
/*
// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
});
*/

// ES6
const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');


/*
// ES5
for(var i = 0; i < boxesArr5.length; i++) {
    
    if(boxesArr5[i].className === 'box blue') {
        continue;
    }
    boxesArr5[i].textContent = 'I changed to blue';
};
*/

// ES 6
for (const i of boxesArr6) {
    if(i.className.includes('blue')) {
        continue;
    }
    i.textContent = 'I changed to blue';
}



// ES5

var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
    return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true));

console.log(ages[full.indexOf(true)]);




//ES 6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));








