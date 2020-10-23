// document.getElementById('result').innerHTML = new Date(2020, 10, 10, 16, 15, 24);

// let showBtn = document.getElementById('showBtn');
// showBtn.onclick = function () {
//     let year = document.querySelector("input[name='year']");
//     let month = document.querySelector("input[name='month']").value;
//     let day = document.querySelector("input[name='day']");

//     console.log(year.value, month, day.value);
//     document.getElementById('result').innerHTML = new Date(year.value, month - 1, day.value);
// }

// console.log(Date(2020, 10, 1));
// let a = Date(2020, 10, 1).substring(0, 3);
// console.log(a);
// a = "";
// a = new Date(2020, 3, 11);
// console.log(a);
// a.indexOf("2020");
// a.indexOf('2020');
// console.log(a.getDate());//마지막날

// let start = new Date(2020,5,1).getDay();
// console.log(start);
// let last = new Date(2020,6,0).getDate();
// console.log(last);


let but = document.getElementById("calBtn");
but.onclick = function () {
    let year = document.querySelector("input[name='year']").value;
    let month = document.querySelector("input[name='month']").value;
    let day = document.querySelector("input[name='day']").value;

    let start = new Date(year, month - 1, 1).getDay();
    let last = new Date(year, month, 0).getDate();

    
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let tatle = document.createElement('h2');
    tatle.innerHTML = year+"/"+month+" Calender";
    document.getElementById('calender').append(tatle);
    let table = document.createElement('table');
    table.style.border = 1;
    let tr = document.createElement('tr');
    let th = document.createElement('th');
    for (d of days) {
        th = document.createElement('th');
        th.innerHTML = d;
        if(d=="Sun"){
            th.style.color = "red";
        }else if(d=="Sat"){
            th.style.color = "blue";
        }
        tr.append(th);
    }
    table.append(tr);
    let td = document.createElement('td');
    for (let i = 0; i < last + start; i++) {
        if (i % 7 == 0)
            tr = document.createElement('tr');
        if (i < start) {
            td = document.createElement('td');
            tr.append(td);
        } else if(day==i-start+1){
            td = document.createElement('td');
            td.style.background = 'black';
            td.style.color = 'white';
            td.innerHTML = i - start + 1;
            tr.append(td);
        } else {
            td = document.createElement('td');
            td.innerHTML = i - start + 1;
            tr.append(td);
        }
        if (i % 7 == 0){
            td.style.color = 'red';
            table.append(tr);
        }else if(i%7==6){
            td.style.color = 'blue';
        }
    }

    document.getElementById('calender').append(table);
}