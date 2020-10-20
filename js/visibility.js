let divv1 = document.createElement('div');
divv1.setAttribute('class','v1');
let divv2 = document.createElement('div');
divv2.setAttribute('class','v2');
let divv3 = document.createElement('div');
divv3.setAttribute('class','v3');
let divv4 = document.createElement('div');
divv4.setAttribute('class','v2');
let img = document.createElement('img');
img.setAttribute('src','../images/pic1.jpg');
let img2 = document.createElement('img');
img2.setAttribute('src','../images/pic1.jpg');
let img3 = document.createElement('img');
img3.setAttribute('src','../images/pic1.jpg');
let img4 = document.createElement('img');
img4.setAttribute('src','../images/pic1.jpg');
divv1.append(img);
divv2.append(img2);
divv3.append(img3);
divv4.append(img4);

let body = document.querySelectorAll('body');
console.log(body);
body[0].append(divv1, divv2, divv3, divv4);

let div = document.createElement('div');
div.setAttribute('class','row');
let ul = document.createElement('ul');
ul.setAttribute('class','first');

for (let i = 0; i < 3; i++) {
    let li = document.createElement("li");
    li.innerHTML = 'Menu'+(i+1);
    ul.append(li);
}
div.append(ul);

let ol = document.createElement('ol');
ul.setAttribute('class','first');

for (let i = 0; i < 3; i++) {
    let li2 = document.createElement("li");
    li2.innerHTML = 'Menu'+(i+1);
    ol.append(li2);
}
div.append(ol);

body[0].append(div);
