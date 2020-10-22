let var1 = 10;
console.log(typeof var1);
let aaaaa = 'hello';
console.log(typeof aaaaa);

//var은 중복선언가능 그냥 쓰지말것!!
// var var2 = 20;
// console.log(var2);
// var var2 = 'hello';
// console.log(var2);

//const 는 값을 한번만 입력가능 변수가 아닌 상수선언시 사용
const var2 = '20';
// var2 = 10; //에러뜸
console.log(var2);

let num1 =10;
let num2 = '10';
//값만 체크
if(num1==num2){
    console.log('same');
}else{
    console.log('diff');
}
//값과 타입 둘다 체크
if(num1===num2){
    console.log('same');
}else{
    console.log('diff');
}

let a = 5;
let b = 3;
let c = a&b;
let d = a|b;
let e = a^b;
console.log(c);
console.log(d);
console.log(e);

if(num2){
    console.log("true");
}else{
    console.log("false");
}
let num3;
console.log(typeof num3);
num3 =null;
console.log(typeof num3);
//object 선언
let person = {
    name: 'Hong',
    age: 20,
    score: 80
}
console.log(person.name);
person.age = 25;
console.log(person.age);
person.hobby = 'reading';
console.log(person);

let persons = [person, {name : 'Hwang', age:30, score : 70}];

console.log(persons);
console.log(persons[0].age+persons[1].age);

persons.push({name:'Choi',age: 27,score:100});

persons[persons.length] = { name: 'Park', age:22, score:88};

console.log(persons[2]);
console.log("persons lenght : " +persons.length);

let sum = 0;
for(per of persons){
    sum += per.score;
}
console.log(sum/persons.length);
console.clear();
for(p of persons){
    console.log(p.name)
}
console.log(persons.length);
console.log(persons.pop());
console.log(persons.length);

let ul = document.createElement('ul');
ul.setAttribute('class',"abc");
for(p of persons){
    let li = document.createElement('li');
    li.innerHTML = p.name;
    ul.append(li);
}
let div = document.getElementById('show');
div.append(ul);