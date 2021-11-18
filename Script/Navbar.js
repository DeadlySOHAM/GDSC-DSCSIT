window.addEventListener("scroll",(event)=>{
   nav.classList.toggle('navbar-scrolled',window.scrollY > document.getElementById('Picture').clientHeight) ;
}) ;