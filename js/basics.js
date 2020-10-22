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

console.clear();

//방법1
let days = ['일요일', '월요일','화요일', '수요일', '목요일', '금요일', '토요일'];
let li
let ul = document.createElement('ul');
for(day of days){
    li = document.createElement('li');
    li.innerHTML = day;
    ul.append(li);
}

// li.innerHTML="가나다라마바사";
let div = document.getElementById('show');
console.log(div);
div.append(ul);

//방법2
let ulTags = '<ul>';
for(let i = 0; i<7; i++){
    ulTags += '<li>' + days[i] + '</li>';
}
ulTags += '</ul>';
document.write(ulTags);

let arr1 = [];
for(let i =0; i<6; i++){
    arr1[i] = i;
}
console.log(arr1);

