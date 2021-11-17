// Disable Right Click
document.oncontextmenu = new Function("return false;");


const nav = document.getElementById('navbar') ;
const hamIcon = () => nav.classList.toggle('active') ;


window.addEventListener("scroll",(event)=>{
   nav.classList.toggle('navbar-scrolled',window.scrollY > document.getElementById('Picture').clientHeight) ;
}) ;
