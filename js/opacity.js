//opasity.js
// //<div>Hello</div>
// let divTag = document.createElement('div');
// divTag.innerHTML = "Hello";

// //document.querySelectorAll("#idname"); id도 가능
// let bdy = document.querySelectorAll("body");
// console.log(bdy);
// bdy[0].append(divTag);

let divTag = document.createElement('div');
divTag.setAttribute('class','background');

let divBox = document.createElement('div');
divBox.setAttribute('class','box');

let pTag = document.createElement('p');
pTag.innerHTML = 'HTML5 웹 프로그래밍'
// for (let index = 0; index < 5; index++) {
    
//     pTag.innerHTML = 'HTML5 웹 프로그래밍';
    
// }

divTag.append(divBox);
divBox.append(pTag);

let bdy = document.querySelectorAll('body');
console.log(bdy);
bdy[0].append(divTag);
// console.log(divTag);

// let a = "";

// console.log(a);
// a=0;

// console.log(a);