const menubar=document.getElementById('menubar');
const hidden=document.getElementById('mobilemenu');
const dropdown=document.getElementsByClassName('dropdown');
const body=document.getElementById('body');
const cross=document.getElementById('cross');
 
menubar.addEventListener('click',clickMenu);

function clickMenu(){
  if(hidden.style.display=='none'){
  hidden.style.display='block';
  }else{
    hidden.style.display='none'
  }
}

