
const nav = document.getElementById('navbar') ;



window.addEventListener("scroll",(event)=>{
   if(document.getElementsByClassName('teamNative')[0]==null)
      nav.classList.toggle('navbar-scrolled',window.scrollY > document.getElementById('Picture').clientHeight) ;
}) ;

const hamIcon = () => nav.classList.toggle('active') ;