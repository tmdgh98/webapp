let person1 = {
    firstName: 'Kildong',
    lastName: 'Hong',
    age:15,
    setName: function(name){
        this.firstName = name;
    },
    fullName: function(){
        return this.firstName + ', ' + this.lastName;
    }
}

person1.firstName;
person1.lastName;
console.log(person1.fullName());
person1.setName('Seungho');
console.log(person1.fullName());

let str = new String('Hello');
// let str = 'Hello';

let newstr = str.replace('l','r');
console.log(newstr);

console.log(str.length);

let text = 'Please locate where "locate" occurs!';

let loc = text.indexOf('locate',1);
let lastloc = text.lastIndexOf('locate');
console.log(lastloc);

if(loc != -1){
    console.log(loc);
}else{
    console.log("값을 찾을 수 없습니다.");
}

let subString = text.substring(7,10);
console.log(subString);
let subStr = text.substr(7,10);
console.log(subStr);

let strSlice = text.slice(-16,-8);
console.log(strSlice);
console.log(text);

let url = "https://www.daum.net";
let firstpos = url.indexOf('.');
let lastpos =url.lastIndexOf('.');
console.log(url.substring(firstpos+1,lastpos));
console.log(url.substring(lastpos+1));

let ary ='apple, melon, mango, banana';
let strAry = ary.split(', ');
for(str of strAry){
    console.log(str);
}

let str1 ='Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end. If end is omitted, the characters from start through the end of the original string are returned.';
let str1Ary = str1.split(" ");
let newText = document.getElementById('new');
for(str of str1Ary){
    // console.log(str);
    newText.innerHTML+='<button>'+str+'</button>';
}