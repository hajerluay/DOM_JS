//let mydocument=document.getElementsByClassName("padding-10");
let mydocument=document.getElementsByTagName('p');
mydocument[3].innerHTML= 'Title1  <br> comment1';
mydocument[3].style.color = 'red';
mydocument[4].innerHTML= 'Title2 <br> comment2';
mydocument[4].style.color = 'blue';
mydocument[5].innerHTML= 'Title3 <br> comment3';
mydocument[5].style.color = 'green';

let heading=document.getElementsByTagName('h1');
heading[0].innerHTML='Main Content Here';
let parg=document.querySelectorAll('p');
parg[0].style.color='purple';
parg[1].style.color='purple';
parg[2].style.color='purple';