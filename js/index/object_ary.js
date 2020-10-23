let apples = ['apple'];

apples[apples.length] = 'banana';
apples[apples.length] = 'mango';
apples.push('melon');
apples.push('strawberry');

apples.unshift('grape');

for(fruit of apples){
    console.log(fruit);
}
console.log('---------------------');
apples.pop();
apples.shift();
delete apples[2];
apples.splice(1, 2); // index 1에서 두개삭제;
//index0에서 1개삭제후 new apple, new mango추가
apples.splice(0,1,'new apple','new mango');


for(fruit of apples){
    console.log(fruit);
}
console.log('-------------------------')
let fruits = ['apple', 'banana', 'mango', 'melon','grape'];
let newFr = fruits.slice(1,3);
console.log(fruits);
console.log(newFr);

for (let i = 0; i < fruits.length; i++) {
        
}
for(a of fruits){

}
let tags = '<ul>';
fruits.forEach(function(a,b,c){
    //a=요소(element) b=index c=배열전체(fruits)
    // if(b%2==0)
    // console.log(a, b);

    tags += '<li>'+ a + '</li>';
});
tags += '</ul>';
console.log(tags);
// let body = document.querySelector('body');
// body.innerHTML = tags;
document.querySelector('body').innerHTML = tags;

let intAry = [3,5,2,6,4,8,6];
let sum = 0;
intAry.forEach(function(a,b){
    if(b%2==0)
    sum+=a;
});
console.log(sum);


console.clear();
let per1 = {
    name:'Kwak',
    age:31,
    hobby: 'game',
    grade : 'C'
}
let per2 = {
    name:'Chan',
    age:30,
    hobby: 'cook',
    grade : 'B'
}
let per3 = {
    name:'Min',
    age:19,
    hobby: 'study',
    grade : 'A'
}

per1.name;
console.log(per1['name']);
console.log(per1['age']);

function getField(obj, field){
    return obj[field];
    // return obj.field; //undefined나옴 사용x
}
let name = getField(per1, 'name');
let age = getField(per1,'age');
console.log(name,age);

for(field in per1){
    console.log(field);
}

let persons = [per1, per2, per3];

let newTag = '<table border = 1>';
newTag += '<tr>';
for(field in persons[0]){
    newTag += '<th>' + field + '</th>';
}
newTag+= '<th>button</th></tr>'
for(person of persons){
    newTag+= '<tr>'
    for(field in person){
        if(field=='name'){
            newTag += '<td style="color:blue;"> ' + person[field]; + '</td>'
        }else if(field=='age'){
            newTag += '<td><b> ' + person[field]; + '</b></td>'
        }else{
            newTag += '<td> ' + person[field]; + '</td>'
        }
    }
    newTag += '<td><button class="btn">OK</button></td></tr>'
}
newTag += '</table>';

document.querySelector('body').innerHTML += newTag;

let btn = document.querySelectorAll('.btn');
console.log(btn);

for(let i = 0; i<btn.length;i++){
    btn[i].onclick = function(){
        // this.parentNode.parentNode.remove();
        let trTag = this.parentNode.parentNode;
        if(trTag.style.background=="yellow"){
            trTag.style.background ='';
        }else{
            trTag.style.background ='yellow';
        }
    }
}

//css 선택자를 tr로 찾아온다.
let trs = document.getElementsByTagName('td');
for(let i =0; i<trs.length; i++){
    trs[i].onmouseover = function() {
        this.style.background = 'cyan';
    trs[i].onmouseout = function(){
        this.style.background = "";
    }    
    }
}