// Operators:   

    // 4. Logical op

        // (&&, ||, !)

        /*
        
            &&:

            (True)  && (True)  => True 
            (True)  && (False) => False 
            (False) && (True)  => False 
            (False) && (False) => False 

            ||:

            (True)  || (True)  => True 
            (True)  || (False) => True 
            (False) || (True)  => True 
            (False) || (False) => False

            !:

            (True) --> False
            (False)--> True
        
        */


    // let a = 10;

    // // let result = (a == 10) && (a < 5);
    // let result = (a != 10) || (a < 5);

    // console.log(!result);


    // 5. Bitwise op

    // (&, |, ~, ^, <<, >>)

    
    // &:

    // (1)  & (1)  => 1 
    // (1)  & (0)  => 0 
    // (0)  & (1)  => 0 
    // (0)  & (0)  => 0 

    // |:

    // (1)  | (1)  => 1 
    // (1)  | (0)  => 1 
    // (0)  | (1)  => 1 
    // (0)  | (0)  => 0

    // ^: XOR

    // (1)  | (1)  => 0 
    // (1)  | (0)  => 1 
    // (0)  | (1)  => 1 
    // (0)  | (0)  => 0

    // let a = 10;

    // let result = (a == 10) & (a > 5);
    // let result = (a == 10) | (a < 5);
    // let result = (a == 10) ^ (a > 5);

    // console.log(~result);

    // <<:

    // let a = 5;

    // answer = a << 2;

    // console.log(answer);

    // ((5)) -> 0000 0101

    // (1)   -> 0000 1010
    // (2)   -> 0001 0100   -> 20

    // >>:

    // let a = 16;

    // let answer = a >> 2;

    // ((16)) -> 0001 0000

    // (1)    -> 0000 1000
    // (2)    -> 0000 0100 --> 4

    // console.log(answer);

    // 6. Ternary op

    // let age = 20;

    //    let answer = (age >= 18) ? true : false;

    //    console.log(answer);

    // 7. Type op

    let a = "hi";

    console.log(a, typeof a);

