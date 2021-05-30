//let mydocument=document.getElementsByClassName("padding-10");
let mydocument=document.getElementsByTagName('p');
mydocument[3].innerHTML= '<strong>Title1</strong>  <br> comment1';
mydocument[3].style.color = 'red';
mydocument[4].innerHTML= '<strong>Title2</strong> <br> comment2';
mydocument[4].style.color = 'blue';
mydocument[5].innerHTML= '<strong>Title3</strong> <br> comment3';
mydocument[5].style.color = 'green';

let heading=document.getElementsByTagName('h1');
heading[0].innerHTML='Main Content Here';

let nav=document.getElementsByTagName('nav')[0];
//link 1 is the first children
nav.insertAdjacentHTML('afterbegin','<a href="#">Link 1</a>');
//another way for adding link1
/*let a=document.querySelectorAll('nav a')[0];
a.insertAdjacentHTML('beforebegin','<a href="#">Link 1</a>');*/

//adding link 4
let a=document.querySelectorAll('nav a')[2];
a.insertAdjacentHTML('afterend','<a href="#">Link 4</a>');

//adding link7
let link7=document.querySelectorAll('nav a')[5];
link7.insertAdjacentHTML('afterend','<a href="#">Link 7</a>');


//to chang all p color in main
/*let parg=document.querySelectorAll('main p');
parg[0].style.color='purple';
parg[1].style.color='purple';
parg[2].style.color='purple';*/

//another to change p color in main
let parg=document.querySelectorAll('main p');
for(let i=0;i<parg.length;i++){
    parg[i].style.color='purple';
}