let arr = [34, 52, 58, 22, 19, 30];
arr.push(35);
arr.push(88);
console.log(arr);

let sum = 0;
for(i of arr){
    sum += i;
}
let sum2 = 0;
for(i=0;i<arr.length;i++){
    sum2 += arr[i];
}
console.log(sum + " " + sum2);

// document.write(arr);


let div = document.createElement('div');
let ul = document.createElement('ul');
for(n of arr){
    let li = document.createElement('li');
    li.innerHTML = n;
    ul.append(li);
}
let li = document.createElement('li');
li.innerHTML = "합계 : "+sum;
ul.append(li);
div.append(ul);

let body = document.getElementsByTagName('body');
console.log(body);
body[0].append(div);

//여러개 push하기
console.log(arr.length);
arr.push(2,5,6);
console.log(arr.length);

let boolAry = [true, false, true, 'a', 0];
let times = 0;

console.clear();
for(boo of boolAry){
    if(boo){
        console.log(times++);
    }
}

let p1 = {
    name: 'hong',
    age: 15
}

let p2 = {
    name: 'park',
    age: 22
}

let p3 = {
    name: 'kwak',
    age: 31
}

let persons = [];
persons.push(p1,p2,p3);
console.log(persons);

let tableTag = '<table border=1>';
tableTag += '<tr><th>이름</th><th>나이</th></tr>';
for(p of persons){
    tableTag+='<tr><td>'+ p.name +'</td><td>'+p.age+'</td></tr>';
}
tableTag += '</table>';
body[0].innerHTML = tableTag;

let table = document.createElement('table');
table.setAttribute("border","1px")
let td;
for(i = 0; i<persons.length+1; i++){
    let tr = document.createElement('tr');
    td = document.createElement('td');
    if(i==0){
        td = document.createElement('th');
        td.innerHTML = '이름';
        tr.append(td);
        td = document.createElement('th');
        td.innerHTML = '나이';
        tr.append(td);
    }else{
        td = document.createElement('td');
        td.innerHTML=persons[i-1].name;
        tr.append(td);
        td = document.createElement('td');
        td.innerHTML=persons[i-1].age;
        tr.append(td);
    }
    table.append(tr);
}

body[0].append(table);

console.clear();
let arrt = [1,2,3,4,5,6];

// arrt.pop();
// arrt.shift(4);
// arrt = arrt.splice(4);
// arrt.splice(4);
for(a of arrt){
    console.log(a);
}