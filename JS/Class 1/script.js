// Javascript - ES6 (Ecma script 6)

// Datatypes:

    // number  -> 1,5,100, 10.5
    // string  -> "hello"
    // boolean -> true (or) false
    // undefined
    // null
    // Nan

// Hoisting -> variable Declaration

// var 

    // var a = 10;

    // var a = 500;

    // console.log(a);

// let

    // let a;

    // a = 20;

    // console.log(a);

// const

    // const c = 30;

    // console.log(c);

// Scope

    /*

        1. Global scope -> var

        var a = 10;

        {
            console.log(a);
        }

        2. Local scope -> let, const

        {

            const a = 10;

            console.log("inside: ", a);

        }

        console.log("outside: ", a);
    
    */

//   {
//     {

//         const b = 50;
//         {
//             {
//                 {
//                     console.log(b);
//                 }
//             }
//         }
//         console.log(b);
//     }

//     console.log(b);
//   }

// Operators:

    /*  

        1. Arithematic op
         
            (+, -, *, /, %, **, ++, --)

        2. Assignment op

            (=, +=, -=, *=, /=, %=, **=)

        3. Comparision op

            (==, !=, <, >, >=, <=)

        4. Logical op
        5. Bitwise op
        6. Ternary op
        7. Type op

    */

// 1. Arithematic op
         

    // let a = 10;
    // let b = 20;

    // let result;

    // result = a + b;
    // result = a - b;
    // result = a * b;
    // result = a / b;
    // result = a % b;
    // result = a ** 5;
    // result = ++a;
    // result = --a;

    // console.log(result);

// 2. Assignment op

    // let a = 10;

    // a += 5;     // a = a + 5;
    // a -= 5;     // a = a - 5;
    // a *= 5;     // a = a * 5;
    // a /= 5;     // a = a / 5;
    // a %= 5;     // a = a % 5;
    // a **= 2;     // a = a ** 5;

    // console.log(a);

// 3. Comparision op -> Boolean (true (or) false)

    let a = 10;

    // let ans = (a == 10);
    // let ans = (a != 10);
    // let ans = (a > 10);
    // let ans = (a >= 10);
    // let ans = (a < 10);
    let ans = (a <= 10);


    console.log(ans);

