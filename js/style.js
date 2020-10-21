let div1=document.createElement('div');
div1.setAttribute('class','row');
div1.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eaque laboriosam distinctio. Iste voluptatibus vitae totam rem, a provident. Veniam quidem recusandae et magnam quam odit totam eveniet debitis voluptate.';

console.log(div1);

// document.write(div1.innerHTML);

let body = document.getElementsByTagName('body');
console.log(body);
body[0].append(div1);