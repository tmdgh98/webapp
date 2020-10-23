let buttons = document.querySelectorAll('#new>button');
console.log(buttons);
for(let i=0; i<buttons.length;i++){
    buttons[i].onclick = clickFunc;
    buttons[i].onmouseover = buMouseOver;
    buttons[i].onmouseout = function(){
        this.style.background = "";
        this.style.color = "";
    }
}
function buMouseOver(){
    let img = document.querySelector('#show>img');
    if('../../images/on.gif'==img.getAttribute('src')){
        this.style.background = 'black';
        this.style.color = 'white';
    }else{
        this.style.background = 'white';
        this.style.color = 'blue';
    }
}
function clickFunc(){
    // alert(buttons[i].innerHTML);
    alert("까꿍");
}

let onBtn =document.getElementById("turnOn");
onBtn.onclick = function(){
    let img = document.querySelector('#show>img');
    img.setAttribute('src','../../images/on.gif');
}
let offBtn = document.getElementById("turnOff");
offBtn.onclick = function(){
    let img = document.querySelector('#show>img');
    img.setAttribute('src','../../images/off.gif')
}
console.log(onBtn);
onBtn.onmouseover = function(){
    onBtn.style.background = 'yellow';
    onBtn.style.color = 'red';
}

offBtn.onmouseover = function(){
    let img = document.querySelector('#show>img');
    if('../../images/on.gif'==img.getAttribute('src')){
        offBtn.style.color = 'white';
        offBtn.style.backgroundColor ='black';
        offBtn.style.width = '200px';
        offBtn.style.height = '100px';
    }else{
        offBtn.style.color = 'black';
        offBtn.style.backgroundColor ='';
        offBtn.style.width = '';
        offBtn.style.height = '';
    }
}
onBtn.onmouseout = function(){
    onBtn.style.background = '';
    onBtn.style.color = 'black';
}
offBtn.onmouseout = function(){
    offBtn.style.color = 'black';
        offBtn.style.backgroundColor ='';
        offBtn.style.width = '';
        offBtn.style.height = '';
}

