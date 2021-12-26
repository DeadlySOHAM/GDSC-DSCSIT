const nav = document.getElementById('navbar') ;



window.addEventListener("scroll",(event)=>{
   nav.classList.toggle('navbar-scrolled',window.scrollY > document.getElementById('Picture').clientHeight) ;
}) ;

const hamIcon = () =>{
   nav.classList.toggle('active') ;
   const icon = document.getElementById('hamburger-icon');
   icon.textContent = icon.textContent == "menu" ? "menu_open" : "menu";
}