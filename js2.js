'use strict';

                                                                                                                                // task 1

let user = {
    name: 'Philip',
    surname: 'Shevchenko',
};

for (let key in user) {
    console.log(key + " : " + user[key]);
}

console.log("Name:  " + user.name);

delete user.name;


console.log("After deleting name");

for (let key in user) {
    console.log(key + " : " + user[key]);
}

                                                                                                                                // task 2

function task2func(a) {
    let sum = 0;

    a = {
        salary: 1000,
        salary2: 2000,
        salary3: 500
    };

    for (let key in a) {
        sum += a[key];
    }

    return sum;

}

let a;

console.log(task2func(a));

                                                                                                                                    // task 3 

function task3(a, b, c) {
    let abiggerZero = parseInt(a) > 0;
    let alessZero = parseInt(a) < 0;
    let bBiggerZero = parseInt(b) > 0;
    let bLessZero = parseInt(b) < 0;
    let cValues = c == "+" || c == "-" || c == "*" || c == "/";

    let result = 0;

    try {
        if (abiggerZero, alessZero, bLessZero, bBiggerZero, cValues) {
            switch (c) {
                case "+": {
                    result = a + b;
                    break;
                }

                case "-": {
                    result = a - b;
                    break;
                }

                case "*": {
                    result = a * b;
                    break;
                }

                case "/": {
                    result = a / b;
                    break;
                }
            }
        } else {
            throw new SyntaxError();
        }
    } catch (err) {
        console.log("Error: " + err);
    }

    return result;
}



let a1 = 0;
let b1 = 2;
let c1 = "22";

console.log(task3(a1, b1, c1));