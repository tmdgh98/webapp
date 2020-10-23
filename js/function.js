// function sumFunction(){
//     let num1, num2;
//     num1 = 15;
//     num2 = 20;
//     let result = num1 + num2;

//     console.log(result);

//     return result;
// }

// let sum = sumFunction();
// console.log(sum+10);

// document.write(sum);

function sumFunction(var1, var2){
    let num1, num2;
    num1 = var1;
    num2 = var2;
    let result = num1 + num2;

    console.log(result);

    return result;
}

let sum = sumFunction(33,34);

document.write(sum);

let multiFunc = function(v1, v2){
    let number1 = v1, number2 = v2;
    return number1*number2;
}

console.log(multiFunc);
console.log(multiFunc());
console.log(sumFunction);

document.write(sumFunction);

function callBackFunc(func, val1, a, b){
    return func(a,b) + val1;
}

console.log(callBackFunc(multiFunc, 11, 3, 5));
console.log(callBackFunc(sumFunction,10,1,2));

function myFunc(v1, v2) {
    let tem;
    if(v1>v2){
        tem = v1;
        v1 = v2;
        v2 = tem;
    }
    let sum = 0;
    for(i = v1; i<=v2; i++){
        sum += i;
    }
    return sum;
}



console.log(myFunc(10,1));
console.log(myFunc(1,10));
console.log(myFunc(10,2));
console.log(myFunc(2,10));

let o = 1;
let p = 2;
let y;
let x;
o>p? y=o: y=p;
console.log(y);

// console.clear();
// function test(v1, v2){
//     let s =0;
//     let i = v1;
//     let j = v2;
//     for(i = v1+1; i< j; i++){
//         s += i;
//         console.log(i);
//     }
//     for(j = v2+1; j< i; j++){
//         s += i;
//         console.log(j);
//     }
//     return s;
// }
// console.log(test(1,5));


