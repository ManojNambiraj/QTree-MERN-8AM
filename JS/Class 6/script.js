// let arr = [10, 20, 30, 40, 50, 60];

// let ans = arr.map((item, index) => {
//     return item * 3
// })

// console.log(ans);

// Promise:

let myPromise = new Promise(function(myResolve, myReject) {
    let x = 10;

    if(x == 0) {
        myResolve("Okay")
    }else{
        myReject("Error")
    }
})

myPromise
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
})