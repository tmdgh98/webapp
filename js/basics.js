let num1, num2, num3, result;
num1 = 10;

num1 = "nice";
num2 = 20;
result = num1 * num2;

// if(num1>num2 || num1>num3){
//     alert('large');
// }else{
//     alert('small');
// }

result = 0;

for(let i = 1; i<=100; i++){
    if((i%3==0&&i%5!=0)||(i%3!=0&&i%5==0))
        result += i;
}
console.log(result);
result = 0;
for(let i = 1; i<=100; i++){
    if(i%15==0)
        continue;
    else if(i%3==0||i%5==0)
        result += i;
}
console.log(result);
let cnt = 0;
while(cnt<15){
    result += cnt;
    cnt++;
}
console.log(result);
let arr = [2,3,4,5,6,7];

result =0;
for(num of arr){
    console.log(num);
    result += num;
}
console.clear();

console.log(result);

let strarr = ['hello', 'nice', 'good', 'beautiful', 23, 5, 8];

for(str of strarr){
    console.log(str);
}

let days = ['일요일', '월요일','화요일', '수요일', '목요일', '금요일', '토요일'];
let li
let ul = document.createElement('ul');
for(let i = 0 ; i<7; i++){
    li = document.createElement('li');
    li.innerHTML = days[i];
    ul.append(li);
}
let div = document.getElementById('show');
console.log(div);
div.append(ul);