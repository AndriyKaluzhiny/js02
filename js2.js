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
    let result = 0;

    try {

        switch (c) {
            case "+": {
                if (a instanceof Number || b instanceof Number) {
                    result = a + b;
                } else {
                    throw new SyntaxError();
                }
                break;
            }

            case "-": {
                if (a instanceof Number || b instanceof Number) {
                    result = a - b;
                } else {
                    throw new SyntaxError();
                }
                break;
            }

            case "*": {
                if (a instanceof Number || b instanceof Number) {
                    result = a * b;
                } else {
                    throw new SyntaxError();
                }
                break;
            }

            case "/": {
                if (a instanceof Number && b instanceof Number && a != 0 && b != 0) {
                    result = a / b;
                } else {
                    throw new SyntaxError();
                }
                break;
            }

            default: {
                throw new SyntaxError();
            }
        }
    }

    catch (err) {
        console.log("Error: " + err);
        return "Error";
    }

    return result;
}



let a1;         //num 1
let b1;         //num 2
let c1;         // + - / * 

console.log(task3(a1, b1, c1));