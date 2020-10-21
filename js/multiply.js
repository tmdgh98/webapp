//mutiply.js

document.write("hi<br>");
document.write("2+1=1<br>")
let show = document.getElementById('show');
for(let j = 0; j<9; j++){
    for(let i = 0; i<4; i++){
        // document.write("<div>"+(i+2)+" * "+(j+1)+" = "+(i+2)*(j+1) +" </div>");
        let div = document.createElement('div');
        div.innerHTML = (i+2)+" * "+(j+1)+" = "+(i+2)*(j+1);
        show.append(div);
    }
    // document.write("<div class='row'></div>")
    let row = document.createElement('div');
    row.setAttribute('class','row');
    
    show.append(row);
}